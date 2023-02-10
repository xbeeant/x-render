---
order: 4
group: 
  title: Advanced Usage
  order: 1
---

# Customized Components（widget）

When the components provided by FormRender do not meet 100% of the user's needs, consider writing one yourself. The custom component feature makes FormRender very extensible, and possible application scenarios are as follows.

- I need to write a search input box that loads asynchronously (component that is not very universal/difficult to describe with schema)
- Our team uses xxx ui, which is not compatible with antd, and would like to adapt a FormRender for a set of xxx ui components (Pull Request is welcome)
- I need to write an excel upload button inside the form (fully customizable requirement)

Note: If you are adding a common component, it is recommended that you give the students who maintain FormRender a Pull Request so that they can better extend its ecology. [Common custom components](https://github.com/alibaba/x-render/tree/master/widgets)。

## Use

Simply put, register a custom component at the Form component level using the widgets field, and specify the component key value used using the widget field within the schema.

```js
const schema = {
  type: 'object',
  properties: {
    string: {
      title: 'URL input customization component',
      type: 'string',
      widget: 'site',
    },
    //...
  },
};

<Form
  schema={schema}
  widgets={{ site: SiteInput }}
  //...
/>;
```

The actual codes are as follows：

```jsx
import React from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: 'URL input customization component',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: 'select',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['item1', 'item2', 'item3'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        Submit
      </Button>
    </div>
  );
};

export default Demo;
```

## No need to write custom components by hand!

A custom component is a normal React component, the only requirement is to have value/onChange props for binding values in both directions. So if an off-the-shelf component already uses value/onChange by default, you can use it directly.

For example: Now we need to use the "cascade selection" component, which FormRender doesn't have built-in support for. At this point, we open the [antd document](https://ant.design/components/cascader/) and see that the cascader uses value/onChange by default, so let's just use it.

```js
import { Cascader } from 'antd';

// Top-level introduction of registration
...
<Form
  form={form}
  schema={schema}
  widgets={{ cascader: Cascader }}
/>

// use in schema
location: {
  title: 'Province and city',
  type: 'string',
  widget: 'cascader',
  props: {
    ...
  }
},
```

## The props received by the custom component

When using custom components, most of which have complex customization needs, FormRender provides a rich set of props:

- **disabled**：Whether to disable input
- **readOnly**：Read-only or not
- **value**：The current value of the component
- **onChange**：function that takes value as an input and is used to synchronize the return value of the custom component to the Form
- **schema**：The component's corresponding sub schema

Almost all of the form methods are hooked up to addons：

```js
const {
  setValueByPath, // (path, value) => void
  getSchemaByPath, // (path) => schema
  setSchemaByPath, // (path) => void
  setSchema, // ({path1: schema1, path2: schema2}) => void
  setValues, // (newData) => void
  getValues, // () => formData
  resetFields, // () => void
  setErrorFields, // (errors) => void
  removeErrorField, // () => void
  validateFields, // (nameList?: string[]) => Promise<any>;
  isFieldTouched, // (name: string) => boolean;
  isFieldsTouched, //(nameList?: string[], allTouched?: boolean) => boolean;
  isFieldValidating, //(name: string) => boolean;
  scrollToPath, (name: string) => void;
  getFieldError, (name: string) => string[];
  getFieldsError, (nameList?: string[]) => Error[];
  setFields, (nameList: string[]) => void;
} = addons;
```

See the "form method" in [Getting Started](/form-render/) for details

- **addons.dataPath**: The path where the current data is located, e.g. "a.b[2].c[0].d", string type.
- **addons.dataIndex**: If dataPath does not contain an array, it is [], if dataPath contains an array, e.g. "a.b[2].c[0].d", then it is [2,0]. It is an array type where the indexes of all the arrays passed from top to bottom are stored in order.
- **addons.dependValues**: When the schema corresponding to the custom component uses the dependencies field, get the real-time value of the dependencies corresponding to the form item here.

## antd component transformation into a custom component

In most cases, antd's components are ready to use. But sometimes the props of a component are not the agreed value/onChange, as in the case of Checkbox, where the value corresponds to checked, and only a few changes are needed：

```js
import { Checkbox } from 'antd';

const MyCheckBox = ({ value, ...rest }) => {
  return <Checkbox checked={value} {...rest} />;
};
```

## Custom components in read-only mode

In read-only mode, the built-in html component is rendered by default, but sometimes the html component does not meet the display needs of a custom component in read-only mode, so you can use the `readOnlyWidget` field to specify the display in read-only mode.

```json
{
  "type": "object",
  "properties": {
    "string": {
      "title": "URL input customization component",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "siteText"
    }
  }
}
```

If you intend to determine the conditional display in a custom component by the readOnly parameter, it means that the site component has written the rendering for both read-only and non-read-only cases.

```js
const SiteInput = ({ readOnly, value, ...rest }) => {
  if (readOnly) return <div>{`https://${value}.com`}</div>;
  return (
    <Input addonBefore="https://" addonAfter=".com" value={value} {...rest} />
  );
};
```

In this case you can specify `readOnlyWidget` and `widget` as the same component：

```json
{
  "type": "object",
  "properties": {
    "string": {
      "title": "URL input customization component",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "site"
    }
  }
}
```

## Best Practices

The custom components used in different forms under the same project may be roughly the same, but they may also be different from each other, so I recommend centralizing a Form component and injecting all the required custom components into it at once. Introduce the corresponding components in various parts of the project：

```js
//  /Component/FormRender.js
import Form from 'form-render';
import Cascade from './Cascade';
import Percentage from './Percentage';
import MyCheckBox from './MyCheckBox';
import ExcelUploader from './ExcelUploader';

const FormRender = props => {
  return (
    <Form
      widgets={{
        percentage: Percentage,
        cascade: Cascade,
        myCheck: MyCheckBox,
        excelUpload: ExcelUploader,
      }}
      {...props}
    />
  );
};
```

Then introduce it consistently on each form page:

```js
import { useForm } from 'form-render';
import FormRender from './Component/FormRender';
const Demo1 = props => {
  const form = useForm();
  return <FormRender form={form} onFinish={() => {}} />;
};
```

## Built-in components

Before using custom components, there may already be built-in component support. See [schema and built-in components](en-US/form-render/api-schema)
