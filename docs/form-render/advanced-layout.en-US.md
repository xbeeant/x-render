---
order: 0
group: 
  title: Advanced Usage
  order: 1
---

# Form Layout
- Form layout by displayType
- Multi-column form layout via column
- Internal layout of form items via labelCol, wrapperCol

## Label Arrangement
```jsx
import React from 'react';
import { Button, Space } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  column: 3,
  displayType: 'row',
  properties: {
    input1: {
      title: 'Name',
      type: 'string'
    },
    input2: {
      title: 'Phone',
      type: 'string'
    },
    input3: {
      title: 'Email',
      type: 'string',
      format: 'email'
    },
    input4: {
      title: 'Address',
      type: 'string'
    },
  }
};

export default () => {
  const form = useForm();

  const handClick = (type) => () => {
    schema.displayType = type;
    form.setSchema(schema, true);
  };

  return (
    <div>
      <Space style={{ marginBottom: '20px' }}>
        <span>displayType：</span>
        <Button onClick={handClick('row')}>row</Button>
        <Button onClick={handClick('column')}>column</Button>
        <Button onClick={handClick('inline')}>inline</Button>
      </Space>
      <FormRender schema={schema} form={form} />
    </div>
  );
}
```

## Multi-column layout

- column: One row, multiple columns, default 1 (configured via props or schema.column)

```jsx
import React from 'react';
import FormRender from './demo/FormRender';

const schema = {
  type: 'object',
  column: 3,
  displayType: 'row',
  properties: {
    input1: {
      title: 'Name',
      type: 'string'
    },
    input2: {
      title: 'Phone',
      type: 'string'
    },
    input3: {
      title: 'Email',
      type: 'string',
      format: 'email'
    },
    input4: {
      title: 'Address',
      type: 'string'
    },
  }
};

export default () => {
  return (
    <FormRender 
      schema={schema} 
      // column={3}
      builtOperation={true}
    />
  );
}
```


<!-- ## Form item layout

- labelCol: label label layout, same as Col component, set span value, e.g. { span: 6 }
- wrapperCol: Use this property when you need to set the layout style for the input control, same usage as labelCol
- Default Value：
```js
// One row and one column
const labelCol = { span: 4 };
const wrapperCol = { span: 8 };

// One row and two columns
const labelCol = { span: 6 };
const wrapperCol = { span: 14 };

// Three or more columns
const labelCol = { span: 7 };
const wrapperCol = { span: 15 };
```

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
   displayType: 'row',
  column: 1,
  labelCol: {
    span: 9
  },
  properties: {
    input1: {
      title: 'Name',
      type: 'string'
    },
    input2: {
      title: 'Phone',
      type: 'string'
    },
    input3: {
      title: 'Email',
      type: 'string',
      format: 'email'
    },
    input4: {
      title: 'Address',
      type: 'string'
    },
  }
};

export default () => {
  return (
    <FormRender 
      schema={schema} 
      builtOperation={true}
      // labelCol={{ span: 9 }}
    />
  )
};
``` -->