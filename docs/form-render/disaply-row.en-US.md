---
order: 0
group: 
  title: Best Use Case
  order: 3
---

# Horizontal layout

## 1、Basic Controls

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input1: {
      title: 'input',
      type: 'string',
      props: {},
    },
    number1: {
      title: 'numberInput',
      type: 'number',
    },
    switch1: {
      title: 'switch',
      type: 'boolean',
      widget: 'switch',
    },
    select1: {
      title: 'select',
      type: 'string',
      widget: 'select',
      props: {
        options: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' },
        ],
      },
    },
    multiSelect1: {
      title: 'multiSelect',
      description: 'multi-selection',
      type: 'array',
      items: {
        type: 'string',
      },
      widget: 'multiSelect',
      props: {
        options: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' },
          { label: 'd', value: 'd' },
        ],
      },
    },
    radio1: {
      title: 'radio',
      type: 'string',
      widget: 'radio',
      props: {
        options: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' },
        ],
      },
    },
    checkboxes1: {
      title: 'checkbox',
      type: 'array',
      widget: 'checkboxes',
      items: {
        type: 'string',
      },
      props: {
        options: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' },
          { label: 'd', value: 'd' },
        ],
      },
    },
    textarea1: {
      title: 'textarea',
      type: 'string',
      format: 'textarea',
      props: {},
    },
    html_1: {
      title: 'HTML',
      type: 'string',
      widget: 'html',
      props: {},
    },
    date1: {
      title: 'date',
      type: 'string',
      format: 'date',
    },
    dateRange1: {
      title: 'dateRange',
      type: 'range',
      format: 'dateTime',
      props: {
        placeholder: ['startDate', 'endDate'],
      },
    },
    time1: {
      title: 'time',
      type: 'string',
      format: 'time',
    },
    timeRange1: {
      title: 'timeRange',
      type: 'range',
      format: 'time',
      props: {
        placeholder: ['startTime', 'endTime'],
      },
    },
    checkbox1: {
      title: 'checkbox',
      type: 'boolean',
      widget: 'checkbox',
    },
    slider1: {
      title: 'slider',
      type: 'number',
      widget: 'slider',
    },
    image1: {
      title: 'image',
      type: 'string',
      format: 'image',
    },
    color1: {
      title: 'color',
      type: 'string',
      format: 'color',
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

## 2、Nested Controls

For nested forms, we have four built-in themes, collapse | card | tile | flex, the default is collapse theme.

### Collapse

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    obj: {
      type: 'object',
      title: 'Object Theme',
      description: 'It is an object type',
      widget: 'collapse',
      column: 3,
      properties: {
        input1: {
          title: 'input A',
          type: 'string',
        },
        input2: {
          title: 'input B',
          type: 'string',
        },
        input3: {
          title: 'input C',
          type: 'string',
        },
        input4: {
          title: 'input D',
          type: 'string',
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

### Card

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    obj: {
      type: 'object',
      widget: 'card',
      title: 'Card Theme',
      description: 'It is an object type',
      column: 3,
      properties: {
        input1: {
          title: 'input A',
          type: 'string',
        },
        input2: {
          title: 'input B',
          type: 'string',
        },
        input3: {
          title: 'input C',
          type: 'string',
        },
        input4: {
          title: 'input D',
          type: 'string',
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

### LineTitle

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    obj: {
      type: 'object',
      title: 'LineTitle Theme',
      widget: 'lineTitle',
      description: 'It is an object type',
      column: 3,
      properties: {
        input1: {
          title: 'input A',
          type: 'string',
        },
        input2: {
          title: 'input B',
          type: 'string',
        },
        input3: {
          title: 'input C',
          type: 'string',
        },
        input4: {
          title: 'input D',
          type: 'string',
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

### SubInline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    obj: {
      type: 'object',
      title: 'SubInline Theme',
      widget: 'subInline',
      description: 'It is an object type',
      column: 3,
      properties: {
        input1: {
          title: 'input A',
          type: 'string',
        },
        input2: {
          title: 'input B',
          type: 'string',
        },
        input3: {
          title: 'input C',
          type: 'string',
        },
        input4: {
          title: 'input D',
          type: 'string',
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

## 3、List Control

The display of the list takes up too much space for simple requirements and not enough customization for complex requirements has been a pain point. So we give 5 kinds of displays to fully satisfy all needs from minimal to complex.
Default use widget: 'cardList', card type

### SimpleList

For displaying only 1-3 simple controls per row, in a compact arrangement.

#### simpleList：Label line feed

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Event Template',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### simpleList：Label line feed - with background

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Event Template',
      type: 'array',
      widget: 'simpleList',
      props: {
        hasBackground: true,
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### simpleList：Label inline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Event Template',
      type: 'array',
      widget: 'simpleList',
      display: 'inline',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### simpleList：Label line feed - with background

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Event Template',
      type: 'array',
      widget: 'simpleList',
      display: 'inline',
      props: {
        hasBackground: true,
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

### CardList

Used to display lists with complex structure, but not too much content.

#### cardList：Collapse - Label line feed

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'cardList',
      items: {
        type: 'object',
        title: 'Card Theme',
        description: 'It is an object type',
        column: 3,
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input B',
            type: 'string',
          },
          input4: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### cardList：Card - Label line feed

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'cardList',
      items: {
        type: 'object',
        title: 'Card Theme',
        description: 'It is an object type',
        column: 3,
        widget: 'card',
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input B',
            type: 'string',
          },
          input4: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### cardList：LineTitle - Label line feed

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'cardList',
      items: {
        type: 'object',
        title: 'LineTitle Theme',
        description: 'It is an object type',
        column: 3,
        widget: 'lineTitle',
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input B',
            type: 'string',
          },
          input4: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### cardList：Collapse - Label inline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      display: 'inline',
      widget: 'cardList',
      items: {
        type: 'object',
        title: 'Collapse Theme',
        description: 'It is an object type',
        column: 3,
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input B',
            type: 'string',
          },
          input4: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### cardList：Card - Label inline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      display: 'inline',
      widget: 'cardList',
      items: {
        type: 'object',
        title: 'Card Theme',
        description: 'It is an object type',
        column: 3,
        widget: 'card',
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input B',
            type: 'string',
          },
          input4: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### cardList：LineTitle - Label inline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      display: 'inline',
      widget: 'cardList',
      items: {
        type: 'object',
        title: 'LineTitle Theme',
        description: 'It is an object type',
        column: 3,
        widget: 'lineTitle',
        properties: {
          input1: {
            title: 'input A',
            type: 'string',
          },
          input2: {
            title: 'input B',
            type: 'string',
          },
          input3: {
            title: 'input B',
            type: 'string',
          },
          input4: {
            title: 'input C',
            type: 'string',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();

  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

### DrawerList

For displaying complex elements such as lists over lists, lists over objects, etc.

#### drawerList：Label line feed

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input1',
            type: 'string',
            required: true,
          },
          input2: {
            title: 'input2',
            type: 'string',
          },
          input3: {
            title: 'input3',
            type: 'string',
          },
          select1: {
            title: 'select',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['a', 'b', 'c'],
            widget: 'select',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();
  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### drawerList：Label inline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'drawerList',
      display: 'inline',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input1',
            type: 'string',
            required: true,
          },
          input2: {
            title: 'input2',
            type: 'string',
          },
          input3: {
            title: 'input3',
            type: 'string',
          },
          select1: {
            title: 'select',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['a', 'b', 'c'],
            widget: 'select',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();
  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

### TableList

Used to show only 3 - n elements per row, especially when there is a large amount of data that needs to be paged.

#### tableList：Label line feed

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input',
            type: 'string',
            required: true,
          },
          input2: {
            title: 'input2',
            type: 'string',
          },
          input3: {
            title: 'input3',
            type: 'string',
          },
          select1: {
            title: 'select',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['a', 'b', 'c'],
            widget: 'select',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();
  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### tableList：Label inline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'tableList',
      display: 'inline',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input',
            type: 'string',
            required: true,
          },
          input2: {
            title: 'input2',
            type: 'string',
          },
          input3: {
            title: 'input3',
            type: 'string',
          },
          select1: {
            title: 'select',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['a', 'b', 'c'],
            widget: 'select',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();
  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

### VirtualList

For displaying only 3 - n elements per row, use scroll loading for large amounts of data.

#### virtualList：Label line feed

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'virtualList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input',
            type: 'string',
            required: true,
          },
          input2: {
            title: 'input2',
            type: 'string',
          },
          input3: {
            title: 'input3',
            type: 'string',
          },
          select1: {
            title: 'select',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['a', 'b', 'c'],
            widget: 'select',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();
  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### virtualList：Label inline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'virtualList',
      display: 'inline',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input',
            type: 'string',
            required: true,
          },
          input2: {
            title: 'input2',
            type: 'string',
          },
          input3: {
            title: 'input3',
            type: 'string',
          },
          select1: {
            title: 'select',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['a', 'b', 'c'],
            widget: 'select',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();
  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

### TabList

For multi-tabbed presentation of forms.

#### tabList：Label line feed

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'tabList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input',
            type: 'string',
            required: true,
          },
          input2: {
            title: 'input2',
            type: 'string',
          },
          input3: {
            title: 'input3',
            type: 'string',
          },
          select1: {
            title: 'select',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['a', 'b', 'c'],
            widget: 'select',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();
  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```

#### tabList：Label inline

```jsx
import React from 'react';
import FormRender, { useForm } from 'form-render';
const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    list: {
      title: 'Object Arrays',
      description: 'Object array nesting function',
      type: 'array',
      widget: 'tabList',
      display: 'inline',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: 'input',
            type: 'string',
            required: true,
          },
          input2: {
            title: 'input2',
            type: 'string',
          },
          input3: {
            title: 'input3',
            type: 'string',
          },
          select1: {
            title: 'select',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['a', 'b', 'c'],
            widget: 'select',
          },
        },
      },
    },
  },
};

export default () => {
  const form = useForm();
  
  return <FormRender schema={schema} form={form} configProvider={{ locale: 'en-US'}} />;
};
```
