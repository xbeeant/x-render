---
order: 0
title: Getting Started
---

<div style="display:flex;align-items:center;margin-bottom:24px">
  <img src="https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png" alt="logo" width="48px"/>
  <span style="font-size:30px;font-weight:600;display:inline-block;margin-left:12px">FormRender</span>
</div>
<p style="display:flex;justify-content:space-between;width:440px">
  <a href="https://www.npmjs.com/package/form-render?_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/form-render.svg?maxAge=3600&style=flat-square">
  </a>
  <a href="https://npmjs.org/package/form-render">
    <img alt="NPM downloads" src="https://img.shields.io/npm/dm/form-render.svg?style=flat-square">
  </a>
  <a href="https://npmjs.org/package/form-render">
    <img alt="NPM all downloads" src="https://img.shields.io/npm/dt/form-render.svg?style=flat-square">
  </a>
  <a>
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
  </a>
</p>

Alibaba - Middle and backend form solution, rendering forms via JsonSchema protocol


```shell
npm i form-render --save
```
## Usage

**Function Component**

Use `useForm` hooks to create form instances.
```jsx
import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

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

  const onFinish = (formData) => {
    console.log('formData:', formData);
  };

  const configProvider = {
    locale: 'en-US'
  }

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} configProvider={configProvider}/>
      <Button type="primary" onClick={form.submit}>
        submit
      </Button>
    </div>
  );
}
```

**Class Component**

If you use a class component, You can use `connectForm` instead of `useForm` hooks.

```jsx
import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';

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
      enum: ['a', 'b', 'c'],
      enumNames: ['a', 'b', 'c'],
    },
  },
};

class Demo extends React.Component {
  onFinish = (formData) => {
    console.log('formData:', formData);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} configProvider={{ locale: 'en-US'}}/>
        <Button type="primary" onClick={form.submit}>
          submit
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);
```
## Fast choreography Schema

It is not easy for beginners to remember all the fields of schema and how to use them. To get you started quickly, we recommend trying them in the following order.

1. Go to [Playground](/playground), which has all the schema samples from basic gameplay to advanced features to complete samples.
2. Play the [form designer](https://xrender.fun/generator), drag, and drop the exported schema into your code to generate usable forms. This is essentially a visual form generator that supports schema import & export.

<div>
  <img src="https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*4QYNTbKU6xAAAAAAAAAAAABkARQnAQ?raw=true" width="500px"/>
  <img src="https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*FfTuRYjRd1AAAAAAAAAAAABkARQnAQ?raw=true" alt="schema编辑器" width='500px' />
</div>