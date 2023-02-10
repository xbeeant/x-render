---
order: 0
group: 
  title: Example
  order: 2
---

# Form Common Interactions
- Form Submit
- Asynchronous loading of form data
- Asynchronous loading of drop-down options
- Asynchronous loading of form protocols
- Form server side check error message backfill
- Form data field conversion

## Form Submit
```jsx
import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: 'input',
      type: 'string'
    },
    select1: {
      title: 'select',
      type: 'string',
      props: {
        options: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' }
        ]
      }
    }
  }
};

export default () => {
  const form = useForm();

  const onFinish = (data) => {
    message.info(JSON.stringify(data));
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type='primary' onClick={form.submit}>
        Submit
      </Button>
    </div>
  );
}
```

## Asynchronous loading of form data

Loading via the `form.setValues` method.
```jsx
import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: 'input',
      type: 'string'
    },
    select1: {
      title: 'select',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['a', 'b', 'c'],
    }
  }
}

export default () => {
  const form = useForm();

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  return (
    <div>
      <FormRender form={form} schema={schema} />
      <Button onClick={getRemoteData}>Loading server-side data</Button>
    </div>
  );
}
```

## Asynchronous loading of drop-down options
Display the option values of the drop-down options after getting the data through the server side.

### Individual loading
Loading via `form.setSchemaByPath` method.

```jsx
import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    select1: {
      title: 'select',
      type: 'string',
      widget: 'select',
    }
  }
};

export default () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('select1', {
      props: {
        options: [
          {label: 'east', value: 'east'},
          {label: 'west', value: 'west'},
          {label: 'south', value: 'south'},
          {label: 'north', value: 'north'}
        ]
      }
    });
  };
  
  return (
    <FormRender
      form={form}
      schema={schema}
      onMount={onMount}
    />
  );
}
```

### Multiple loading
Loading via `form.setSchema` method.

```jsx
import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    obj1: {
      type: 'object',
      title: 'object',
      description: 'It is an object type',
      properties: {
        select1: {
          title: 'select1',
          type: 'string',
          widget: 'select',
        },
        select2: {
          title: 'select2',
          type: 'string',
          widget: 'select',
        }
      }
    }
  }
};

export default () => {
  const form = useForm();

  const onMount = () => {
    form.setSchema({
      'obj1.select1': {
        props: {
          options: [
            {label: 'east', value: 'east'},
            {label: 'west', value: 'west'},
            {label: 'south', value: 'south'},
            {label: 'north', value: 'north'}
          ]
        }
      },
      'obj1.select2': {
        props: {
          options: [
            { label: 'a', value: 'a' },
            { label: 'b', value: 'b' },
            { label: 'c', value: 'c' }
          ]
        }
      }
    });
  };

  return (
    <FormRender
      form={form}
      schema={schema}
      onMount={onMount}
    />
  );
}
```

## Asynchronous loading of form protocols
Loading via `form.setSchema(schema, true)` method.

```jsx
import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();

  const getRemoteSchema = () => {
    fakeApi('xxx/getForm').then(_ => {
      const schema = {
        type: 'object',
        properties: {
          input1: {
            title: 'input',
            type: 'string',
            required: true,
          },
          select1: {
            title: 'select',
            type: 'string',
            props: {
              options: [
                { label: 'a', value: 'a' },
                { label: 'b', value: 'b' },
                { label: 'c', value: 'c' }
              ]
            }
          }
        }
      };
      form.setSchema(schema, true);
    });
  };

  
  
  return (
    <div>
      <FormRender form={form} />
      <Button onClick={getRemoteSchema}>Loading form schema</Button>
    </div>
  );
};

export default Demo;
```



## Form server side check error message backfill
Backfill the error message to the form externally via `beforeFinish`, note that `beforeFinish` needs to return the error to be backfilled.

```jsx
import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: 'input',
      type: 'string',
      required: true,
    },
    select1: {
      title: 'select',
      type: 'string',
      props: {
        options: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' }
        ]
      }
    }
  }
};

export default () => {
  const form = useForm();

  const onFinish = (data) => {
    message.info(JSON.stringify(data));
  };

  // Server-side checks are done here
  const beforeFinish = ({ data, schema }) => {
    return fakeApi('xxx/validation').then(_ => {
      if (data.select1) {
        return [{ name: 'select1', erros: []}];
      }
      return [{ name: 'select1', error: ['External check error, please make a selection'] }];
    });
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type='primary' onClick={form.submit}>
        Submit
      </Button>
    </div>
  );
}
```

## Form data field conversion
The server-side data often does not match the display, and is converted by configuring the `bind` field.

- For example, the date range component receives an array and the data on the server side is the startDate, endDate fields.

```jsx
import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: 'dateRange',
      type: 'range',
      format: 'date',
    },
  },
};

export default () => {
  const form = useForm();

  const onFinish = (data) => {
    message.info(JSON.stringify(data));
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2023-01-01', endDate: '2023-12-31' });
    });
  };

  return (
    <div>
      <FormRender 
        form={form} 
        schema={schema} 
        onFinish={onFinish} 
      />
      <Space>
        <Button onClick={getRemoteData}>Loading server-side data</Button>
        <Button type='primary' onClick={form.submit}>
          Submit
        </Button>
      </Space>
    </div>
  );
}
```
