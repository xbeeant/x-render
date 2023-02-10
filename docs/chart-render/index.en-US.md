---
order: 1
title: Use Tutorial
---

<div style="display:flex;align-items:center;margin-bottom:24px">
  <img src="https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png" alt="logo" width="48px"/>
  <span style="font-size:30px;font-weight:600;display:inline-block;margin-left:12px">ChartRender</span>
</div>

<p style="display:flex;justify-content:space-between;width:500px">
  <a href="https://www.npmjs.com/package/chart-render?_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/chart-render.svg?maxAge=3600&style=flat-square">
  </a>
  <a href="https://npmjs.org/package/chart-render">
    <img alt="NPM downloads" src="https://img.shields.io/npm/dm/chart-render.svg?style=flat-square">
  </a>
  <a href="https://npmjs.org/package/chart-render">
    <img alt="NPM all downloads" src="https://img.shields.io/npm/dt/chart-render.svg?style=flat-square">
  </a>
  <a href="https://github.com/alibaba/x-render" >
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
  </a>
</p>

> Note: ChartRender is currently under development and there may be breaking updates, please follow the changelog.

> Easy to use and lightweight middle and backend **charting solution**, commonly used for **chart display pages** quick generation

## Introduction

1. **Real out-of-the-box**: Generate a great search chart with the simplest API configuration request.
2. **XRender Eco**: Search filtering capabilities are provided with [FormRender](/en-US/form-render) to provide fast search panel generation with minimal cost.
3. **Seamless Custom Usage**: Form capabilities are provided with [Ant Design Charts](https://charts.ant.design/), reducing user usage costs.

## Install

```sh
npm i chart-render --save
```

## Code Demo

```jsx
/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */
import React from 'react';
import { Column, Search, withChart } from 'chart-render';
import { Card } from 'antd';

const schema = {
  type: 'object',
  properties: {
    os: {
      type: 'string',
      enum: ['Windows', 'MacOS', 'Android', 'iOS'],
      enumNames: ['Windows', 'MacOS', 'Android', 'iOS'],
      props: { placeholder: 'Operating System' },
      required: true,
    },
    location: {
      type: 'string',
      enum: ['Hang Zhou', 'Ning Bo', 'Jia Xing', 'Jing Hua'],
      enumNames: ['Hang Zhou', 'Ning Bo', 'Jia Xing', 'Jing Hua'],
      props: { placeholder: 'IP Location' },
    },
  },
};

const api = ({ filters }) => {
  console.log('filters >>> ', filters);
  return new Promise((resolve) => setTimeout(() => {
    const meta = [
      { id: 'ds', name: 'Date', isDim: true },
      { id: 'pv', name: 'PV' },
      { id: 'uv', name: 'UV' },
    ];
    const data = [...new Array(24)].map((_, index) => ({
      ds: `2022-01-${String(index + 1).padStart(2, 0)}`,
      pv: Math.floor(Math.random() * 100) + 100,
      uv: Math.floor(Math.random() * 100),
    }));
    resolve({ meta, data });
  }, 1000));
};

const App = () => {
  return (
    <Card title="Visit Trends" extra={<Search searchOnChange api={api} schema={schema} />}>
      <Column />
    </Card>
  );
};

export default withChart(App);
```

## API

### withChart

ChartRender uses Context to manage the internal state, `withChart` is the syntactic sugar of the Context Provider's higher-order component form, you need to use `withChart` to wrap the chart component

```js
import { withChart, useChart } from 'chart-render';

const App = () => {
  const { refresh } = useChart();
};

export default withChart(App);
```

### Search

We put the search-related capabilities into the `<Search />` configuration, including the rendering of the corresponding search filter form.

| Prop               | Description                                                                                                           | Type                                              | Default  |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------- | 
| schema             | **Required** for rendering query forms                                                                                       | [`FormRender.Schema`](/en-US/form-render/api-schema)    | -       | 
| api                | **Required**, initialize & click on the function to be executed on query, see [Api](#api-1) for details                                                           | `({ filters }) => ({ meta, data })`               | -      | 
| hidden             | Whether to hide                                                                                                       | `boolean`                                         | `false` |
| size               | Size of components                                                                                                       | `'small'`                                         | -      |
| searchButton       | Whether to show the query button and support pass-through of more Button properties                                                                          | `boolean` / [`Button.API`](https://ant.design/components/button-cn/#API) | `true`       | 
| searchOnMount      | Whether the query action is executed by default when the component is first mounted                                                                                | `boolean`                                         | `true`      | 
| searchOnChange     | Whether the query action is executed by default when the form value changes, or you can specify which form fields are triggered when they change                                                      | `boolean` / `string[]`                           | `true`      | 
| filters            | Fixed filter items, when the change will retrigger the data request, the request will be merged with the form filter items passed to the api                                                | `object`                                          | `{}`      | 
| ...rest            | Extra component parameters are passed through to `FormRender`, which supports `watch`, `widgets`, etc., see [FormRender.Props](/en-US/form-render/api-props)    | `object`                                          | `{}`      | 

#### Api

- The input to `api` is an object with `filters` inside it, which is the value of the filter item that contains the fixed filter item + the form filter item. `api` needs to return an object that must have `meta` and `data` in it.
- The `api` will be called automatically when the form is queried, bringing in the latest form values and other query parameters.
 
```jsx | pure
const api = async ({ filters }) => {
  const result = await requestData(filters);

  return {
    meta: result.meta, // The meta corresponds to the descriptive information for each field of the data and must return
    data: result.data, // data corresponds to the data and must return
  };
};

<Search api={api} />
```

#### data

is an ordinary array of objects, such as：

```js
[
  { date: '20200101', pv: 100, uv: 50 },
  { date: '20200102', pv: 120, uv: 60 },
  { date: '20200103', pv: 140, uv: 70 },
  { date: '20200104', pv: 160, uv: 80 },
]
```

#### meta

Something to describe the various fields of data, such as：

```js
/**
 * id: The key name corresponding to a single data item
 * name: Description of the key corresponding to a single data item
 * isDim: whether it is a dimension, `true`-dimension, `false`-indicator
 * isRate: Whether it is a percentage or not, for indicators only, when enabled, the value `0.5` will be rendered as `50%`
 */
[
  { id: 'date', name: 'Date', isDim: true, isRate: false },
  { id: 'pv', name: 'PV', isDim: false, isRate: false },
  { id: 'uv', name: 'UV', isDim: false, isRate: false },
]
```

### useChart

The context of `chart-render` can be obtained via `useChart` and can be called anywhere inside `withChart`.

| Prop       | Description                                                                                                                 | Type       |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | ---------- |
| form       | The Search component is generated by form-render and can fetch the form instance of the search form and the methods hanging on it, e.g. `form.resetFields` to clear the search items | `FormInstance`   |
| refresh    | Refresh table data                                                          | `() => void`       |
| loading    | Whether it is loaded or not                                                       | `boolean`          |
| dataSource | Data source, consisting of meta and data                                          | `{ meta, data }`   |
| setChart   | Tool function for modifying global state, can set state values other than `setChart` and `form`  | `(store) => void`  |

When getting a single state value via `useChart`, it is recommended to use slicing to reduce unnecessary rendering.

```js
import { useChart, withChart } from 'chart-render';

const App = () => {
  const { loading } = useChart(); // ❎ It can be written this way, but it is not recommended, it will cause the component to update every time the state changes
  const loading = useChart(state => state.loading); // ✅ Recommended writing method to detect changes with strict equality (old === new)
  const loading = useChart(state => state.loading, compareFn); // ✅ To better control the re-rendering, you can provide any custom equality function
};

export default withChart(App);
```

#### refresh

A method to actively trigger a chart refresh.

Since `refresh` is put into the state synchronously when the `Search` component is loaded, make sure that the `Search` component is already loaded when you call `refresh`!!!

> As in the following example, you need to call `refresh` in `CustomChart`.
> In `App1`, `Search` is loaded first and then `CustomChart` is loaded, so there is no problem to call `refresh`.
> In `App2`, after loading `CustomChart` and then `Search`, calling `refresh` at this point will report an error!

```js
const CustomChart = () => {
  const refresh = useChart(state => state.refresh);

  useEffect(() => {
    refresh();
  }, []);

  return <XXX />;
};

const App1 = () => {
  return (
    <div>
      <Search />
      <CustomChart /> // ✅ In this case, the internal refresh can be called normally
    </div>
  );
};

const App2 = () => {
  return (
    <div>
      <CustomChart /> // ❎ The internal refresh is undefined
      <Search />
    </div>
  );
};
```
