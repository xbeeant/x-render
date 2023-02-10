---
order: 3
group: 
  title: Advanced Usage
  order: 1
---

# Path Writing Tutorial

When you need to call setSchemaByPath, you need to write the path corresponding to the changed form element; how can you write the correct path if the element structure is very deep?

## Basic path
form.setSchemaByPath('radio', { enum: [1, 2, 3] });
```jsx
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    setTimeout(() => {
      form.setSchemaByPath('radio', { enum: [1, 2, 3] });
    }, 1000);
  };

  const schema = {
    type: 'object',
    displayType: 'row',
    properties: {
      radio : {
        title: 'select',
        type: 'string',
        widget: 'radio',
        enum: []
      }
    }
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      onMount={onMount}
      configProvider={{ locale: 'en-US'}}
    />
  );
};

export default Demo;

```

## Nesting path
form.setSchemaByPath('x.radio', { enum: [1, 2, 3] });
```jsx
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    displayType: 'row',
    properties: {
      x: {
        type: 'object',
        properties: {
          radio: {
            title: 'select',
            type: 'string',
            widget: 'radio',
            enum: []
          }
        }
      }
    }
  };

  const onMount = () => {
    setTimeout(() => {
      form.setSchemaByPath('x.radio', { enum: [1, 2, 3] });
    }, 1000);
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      onMount={onMount}
      configProvider={{ locale: 'en-US'}}
    />
  );
};

export default Demo;

```



## List path
form.setSchemaByPath('x[].radio', { enum: [1, 2, 3] });
```jsx
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    displayType: 'row',
    properties: {
      x: {
        title: 'Object Arrays',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            radio : {
              title: 'select',
              type: 'string',
              widget: 'radio',
              enum: []
            }
          }
        }
      }
    }
  };

  const onMount = () => {
    setTimeout(() => {
      form.setSchemaByPath('x[].radio', { enum: [1, 2, 3] });
    }, 1000);
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      onMount={onMount}
      configProvider={{ locale: 'en-US'}}
    />
  );
};

export default Demo;

```

## Complex nesting path
 form.setSchemaByPath('x.y[].radio', { enum: [1, 2, 3] });
```jsx
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    displayType: 'row',
    properties: {
      select1: {
        title: 'inputA',
        type: 'string',
      },
      select2: {
        title: 'inputB',
        type: 'string',
      },
      x: {
        type: 'object',
        title: 'Complex Type',
        widget: 'lineTitle',
        properties: {
          y: {
            title: 'Object Arrays',
            type: 'array',
            display: 'inline',
            items: {
              type: 'object',
              properties: {
                radio : {
                  title: 'select',
                  type: 'string',
                  widget: 'radio',
                  enum: []
                }
              }
            }
          }
        }
      }
    }
  };

  const onMount = () => {
    setTimeout(() => {
      form.setSchemaByPath('x.y[].radio', { enum: [1, 2, 3] });
    }, 1000);
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      onMount={onMount}
      configProvider={{ locale: 'en-US'}}
    />
  );
};

export default Demo;

```

