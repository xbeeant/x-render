---
order: 2
group: 
  title: Advanced Usage
  order: 1
---

# Form Validation

- Simple checksum logic through built-in checksum field configuration.
- Complex validation logic through rules configuration.
- Validation hint template customization via validateMessages.

### Built-in validation

- required: required field
- max：string type is the maximum length of a string; number type is the maximum value; array type is the maximum length of an array
- min：string type is the minimum length of string; number type is the minimum value; array type is the minimum length of array
- format：url ｜ email ｜ image | color

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input1: {
      title: 'Required',
      type: 'string',
      required: true,
    },
    input2: {
      title: 'Digital Maximum',
      type: 'number',
      max: 2,
      required: true
    },
    input3: {
      title: 'Digital Minimum',
      type: 'number',
      min: 10,
      required: true,
    },
    input4: {
      title: 'Maximum character length',
      type: 'string',
      max: 2,
      required: true,
    },
    input5: {
      title: 'Minimum character length',
      type: 'string',
      min: 10,
      required: true,
    },
    input6: {
      title: 'Url validation',
      type: 'string',
      required: true,
      format: 'url',
    },
    input7: {
      title: 'Email validation',
      type: 'string',
      required: true,
      format: 'email',
    },
    input8: {
      title: 'Image format validation',
      type: 'string',
      required: true,
      format: 'image',
    }
  }
};

export default () => {
  const form = useForm();
  
  return (
     <FormRender 
      schema={schema} 
      form={form} 
      builtOperation={true}
      configProvider={{ locale: 'en-US'}}
    />
  )
};
```


### Rules validation

- Fully embraced Antd Form Rules
- Custom validator: A small change has been made, the validator returns the boolean value directly.


```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input1: {
      title: 'Regular expression',
      type: 'string',
      required: true,
      rules: [
        { pattern: '^[\u4E00-\u9FA5]+$', message: 'Please enter Chinese!' }
      ]
    },
    input2: {
      title: 'Custom validation',
      type: 'string',
      rules: [
        { 
          validator: (_, value) => {
            const pattern = '^[\u4E00-\u9FA5]+$';
            return new RegExp(pattern).test(value);
          }, 
          // message: 'Please enter Chinese!' 
        }
      ]
    }
  }
};

export default () => {
  const form = useForm();
  
  return (
     <FormRender 
      schema={schema} 
      form={form} 
      builtOperation={true} 
      configProvider={{ locale: 'en-US'}}
    />
  )
};
```

### Custom calibration templates
- Fully embrace Antd Form Rules
- validateMessages: Customize the validation template by configuring validateMessages, which can be customized on demand and will be merged with the default validation template.


```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input1: {
      title: 'Address (required)',
      type: 'string',
      required: true,
    }
  }
};

export default () => {
  const form = useForm();

  const validateMessages = {
    required: '${label} cannot be null',
  };
  
  return (
     <FormRender 
      schema={schema} 
      form={form} 
      builtOperation={true}
      validateMessages={validateMessages}
      configProvider={{ locale: 'en-US'}}
    />
  )
};
```


### Default template content

- Chinese Template
```Js
const typeTemplate = '${label}的类型不是${label}';

const validateMessagesCN = {
  default: '${label}未通过校验',
  required: '${label}必填',
  whitespace: '${label}不能为空',
  date: {
    format: '${label}的格式错误',
    parse: '${label}无法被解析',
    invalid: '${label}数据不合法',
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: '${label}长度不是${len}',
    min: '${label}长度不能小于${min}',
    max: '${label}长度不能大于${max}',
    range: '${label}长度需在${min}与${max}之间',
  },
  number: {
    len: '${label}不等于${len}',
    min: '${label}不能小于${min}',
    max: '${label}不能大于${max}',
    range: '${label}需在${min}与${max}之间',
  },
  array: {
    len: '${label}长度不是${len}',
    min: '${label}长度不能小于${min}',
    max: '${label}长度不能大于${max}',
    range: '${label}长度需在${min}与${max}之间',
  },
  pattern: {
    mismatch: '${label}未通过正则判断${pattern}',
  },
};
```

- 英文模版
```Js
const typeTemplate = "'${label}' is not a valid ${type}";
const validateMessages = {
  default: "Validation error on field '${label}'",
  required: "'${label}' is required",
  enum: "'${label}' must be one of [${enum}]",
  whitespace: "'${label}' cannot be empty",
  date: {
    format: "'${label}' is invalid for format date",
    parse: "'${label}' could not be parsed as date",
    invalid: "'${label}' is invalid date",
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: "'${label}' must be exactly ${len} characters",
    min: "'${label}' must be at least ${min} characters",
    max: "'${label}' cannot be longer than ${max} characters",
    range: "'${label}' must be between ${min} and ${max} characters",
  },
  number: {
    len: "'${label}' must equal ${len}",
    min: "'${label}' cannot be less than ${min}",
    max: "'${label}' cannot be greater than ${max}",
    range: "'${label}' must be between ${min} and ${max}",
  },
  array: {
    len: "'${label}' must be exactly ${len} in length",
    min: "'${label}' cannot be less than ${min} in length",
    max: "'${label}' cannot be greater than ${max} in length",
    range: "'${label}' must be between ${min} and ${max} in length",
  },
  pattern: {
    mismatch: "'${label}' does not match pattern ${pattern}",
  },
};
```