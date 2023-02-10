---
order: 1
group: 
  title: Advanced Usage
  order: 1
---

# Form Linkage
- Simple linkage via function expressions.
- Complex linkage via watch listener.
- Complex linkage between components via dependencies.

## Simple linkage
### Function expressions

Form linkage is a common interaction in development, for which we created this simple configuration to support linkage. The linkage interaction can be controlled by function expressions to hide form items, whether they are editable or not, etc.

Expression characteristics：
- The function expression is a string with double brackets `"{{...}}" ` as a syntax feature. All fields in schema support function expressions except default and rules. For example:

```json
{
  "disabled": "{{ formData.x.y === 1 }}",
}
```

Expression keywords:
- formData: the value of the whole form, get the value of the corresponding form item according to the path path, for example: formData.x.y.
- rootValue: the value of the form at the upper level, only used in List scenarios.

Summary：

### formData Example
```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    switch1: {
      title: 'Hide input',
      type: 'boolean',
      widget: 'switch'
    },
    input1: {
      title: 'input',
      type: 'string',
      required: true,
      hidden: '{{ formData.switch1 === true }}',
    }
  }
};

export default () => {
  const form = useForm();
  
  return (
     <FormRender 
      schema={schema} 
      form={form}
    />
  )
};
```

### rootValue Example
```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Member Activities',
      type: 'array',
      display: 'inline',
      items: {
        type: 'object',
        properties: {
          switch1: {
            title: 'Hide input',
            type: 'boolean',
            widget: 'switch'
          },
          input1: {
            title: 'input',
            type: 'string',
            required: true,
            hidden: '{{ rootValue.switch1 === true }}',
          }
        }
      },
      props: {
        hasBackground: true,
      }
    }
  }
};

export default () => {
  const form = useForm();
  
  return (
     <FormRender 
      schema={schema} 
      form={form}
    />
  )
};
```

## Complex linkage

### watch Listening
watch: Used to listen for changes in form data to invoke callbacks, it is a collection of objects that register the corresponding form item listening events according to the path path.
```js
const watch = {
  // # for global
  '#': val => {
    console.log('The real-time data of the form is：', val);
  },
  input1: val => {
    if (val !== undefined) {
      form.onItemChange('input2', val);
    }
  },
  'object1.select2': {
    handler: val => {
      if (val === 'option1') {
        form.onItemChange('object1.input2', 'hello');
      }
    }
  }
};
```

### Modify value 

form.setValueByPath：specify the path to modify the value. [path is detailed in](en-US/form-render/advanced-path)。

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input1: {
      title: 'input A',
      type: 'string',
      placeholder: 'Assign a value to input B',
    },
    input2: {
      title: 'input B',
      type: 'string',
      disabled: true
    },
  },
};

export default () => {
  const form = useForm();

  const watch = {
    // # for global
    '#': val => {
      console.log('The real-time data of the form is：', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  const onValuesChange = (changedValues, allValues) => {
    form.setValueByPath('input2', changedValues.input1);
  }

  return <FormRender form={form} schema={schema} watch={watch} onValuesChange={onValuesChange} />;
};
```

### Modify schema

form.setSchemaByPath：Specify the path to modify the schema (value, defalut are not allowed to be modified through this API). [path is detailed in](en-US/form-render/advanced-path)。

```jsx
import React, { useEffect } from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input1: {
      title: 'input',
      type: 'number',
      placeholder: 'When the value is greater than 1, it changes the options in the radio',
    },
    radio: {
      title: 'radio',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['a', 'b', 'c'],
      widget: 'radio'
    }
  }
};

export default () => {
  const form = useForm();

  const watch = {
    input1: val => {
      if (val > 1) {
        form.setSchemaByPath('radio', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
        return ;
      }

      form.setSchemaByPath('radio', { enumNames: ['a', 'b', 'c'] });
    }
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      watch={watch}
    />
  );
};
```

## Dependency Linkage
dependencies：Used to complete the complex linkage logic inside the component. When the dependent fields are updated, the component will automatically trigger the update and validation.
- Type：path[]，Set dependency fields, support multiple dependency fields
- Get dependency values: get the set of dependency values within the component via props.dependValues

### Trigger update
The dependency value changes and the custom component triggers an update.
```jsx
import React from 'react';
import { Input, } from 'antd';
import FormRender, { useForm } from 'form-render';

const { TextArea } = Input;

const CustomTextArea = props => {
  const { dependValues } = props;

  console.log(dependValues, 'dependValues');

  return <TextArea rows={dependValues?.[0] || 2} />;
};

export default () => {
  const form = useForm();

  const schema = {
    type: 'object',
    displayType: 'row',
    displayType: 'row',
    properties: {
      input1: {
        title: 'Height of input',
        type: 'number'
      },
      select1: {
        title: 'input',
        type: 'string',
        dependencies: ['input1'],
        widget: 'CustomTextArea'
      }
    }
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      widgets={{ CustomTextArea }}
    />
  );
}
```

### Trigger check
Dependency value changes, custom checks trigger checks.

```jsx
import React from 'react';
import { Input, } from 'antd';
import FormRender, { useForm } from 'form-render';

const { TextArea } = Input;

const CustomTextArea = props => {
  const { dependValues } = props;

  console.log(dependValues, 'dependValues');

  return <TextArea rows={dependValues?.[0] || 2} />;
};

export default () => {
  const form = useForm();

  const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input1: {
      title: 'password',
      type: 'string',
      required: true,
    },
    input2: {
      title: 'confirm password',
      type: 'string',
      dependencies: ['input1'],
      required: true,
      rules: [
        { 
          validator: (_, value, { form }) => {
            if (!value || form.getFieldValue('input1') === value) {
              return true;
            }
            return false;
          }, 
           message: 'The two passwords you entered do not match' 
        }
      ]
    }
  }
};

  return (
    <FormRender
      form={form}
      schema={schema}
      widgets={{ CustomTextArea }}
    />
  );
}
```

### Two-way binding
- addons：The simple understanding is that the form instance.
- dependValues：Collection of dependency values.


```jsx
import { Button, Checkbox } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const CustomCheckbox = ({ addons, dependValues }) => {
  const { setValueByPath } = addons;
  console.log(dependValues);

  const checked = dependValues?.[0]?.length === 4;

  const onChange = e => {
    const val = e.target.checked;
    console.log(val);

    if (val === false) {
      setValueByPath('boxes', []);
    } else if (val === true) {
      setValueByPath('boxes', [1, 2, 3, 4]);
    }
  };

  return <Checkbox checked={checked} onChange={onChange} />;
};

export default () => {
  const form = useForm();

  const schema = {
    type: 'object',
    displayType: 'row',
    properties: {
      select1: {
        title: 'Whether to select all',
        type: 'boolean',
        dependencies: ['boxes'],
        widget: 'CustomCheckbox',
      },
      boxes: {
        title: 'Available operations',
        description: 'multiple Choice',
        type: 'array',
        items: {
          type: 'number',
        },
        enum: [1, 2, 3, 4],
        enumNames: ['add', 'remove', 'modify', 'search'],
        widget: 'checkboxes',
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      onFinish={onFinish}
      widgets={{ CustomCheckbox }}
    />
  );
};
```





