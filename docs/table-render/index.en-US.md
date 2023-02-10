---
order: 1
title: Use Tutorial
---

<div style="display:flex;align-items:center;margin-bottom:24px">
  <img src="https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png" alt="logo" width="48px"/>
  <span style="font-size:30px;font-weight:600;display:inline-block;margin-left:12px">TableRender</span>
</div>

<p style="display:flex;justify-content:space-between;width:440px">
  <a href="https://www.npmjs.com/package/table-render?_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/table-render.svg?maxAge=3600&style=flat-square">
  </a>
  <a href="https://npmjs.org/package/table-render">
    <img alt="NPM downloads" src="https://img.shields.io/npm/dm/table-render.svg?style=flat-square">
  </a>
  <a href="https://npmjs.org/package/table-render">
    <img alt="NPM all downloads" src="https://img.shields.io/npm/dt/table-render.svg?style=flat-square">
  </a>
  <a href="https://github.com/alibaba/x-render" >
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
  </a>
</p>

> Easy to use and lightweight middle and backend **listing solution**, commonly used for **search listings page** quick generation

## Introduction

1. **True Out-of-the-Box**: Generate a great search list with the simplest API configuration of the request and fields in the form header.
2. **XRender Eco**: Search filtering capabilities are provided with FormRender to quickly generate top-side search panels with minimal cost.
3. **Seamless habit usage**: The table capability is provided with Ant Design Table to reduce user usage cost.

## Install

table-render depends on ant design, don't forget to install antd If use it alone ~

```sh
npm i table-render --save
```

## Code Demo

```jsx
/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */
import React from 'react';
import { Table, Search, withTable } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: `Title${i + 1}`,
    created_at: new Date().getTime(),
  });
}

// Details can be found in the use of form-render
const schema = {
  type: 'object',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      width: '30%',
      labelWidth: 45,
    },
    created_at: {
      title: 'Create Time',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// 配置完全透传 antd table
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Create Time',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: 'Operate',
    render: (row, record) => <a onClick={() => alert(row.title)}>Edit</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="Simple Table" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);
```

## API

### WithTable

TableRender uses Context at the bottom to manage internal state, `withTable` is syntactic sugar in the form of higher-order components of the Context Provider, and the user needs to wrap the table component with `withTable`.

```js
import { withTable，useTable } from 'table-render';

const Page = () => {
  const { refresh } = useTable();
}

export default withTable(Page)
```

### Search

We put the search-related abilities into the `<Search />` configuration, including the rendering of the corresponding search filter form.

| Prop               | Description                                                                                  | Type                                   | Default  |
| ------------------ | ------------------------------------------------------------------------------------- | -------------------------------------- | ------- | 
| schema             | **Required** for rendering query forms, see [form-render documentation](en-US/form-render/api-schema) | [SchemaBase](https://github.com/alibaba/x-render/blob/master/packages/form-render/src/index.d.ts#L16)                               | -       | 
| api                | **Required**, initialize & click on the function executed on query, see [Api](#api-1) for details                                                         | [ApiType](https://github.com/alibaba/x-render/blob/master/packages/table-render/src/interface.ts#L94)                 | -       | 
| onSearch           | Perform some additional operations on table queries                                                        | `(params) => void`                             | -       |
| afterSearch        | Perform some additional operations at the end of the form query                                                    | `(params) => void`                             | -       |
| searchOnMount      | Whether the query action is executed by default when the component is first mounted                                                  | `boolean`                              | true  | 
| hidden             | Whether to hide the `<Search />` component                                                             | `boolean`                              | false |
| searchBtnRender    | Custom form query button                                                                    | `(refresh,clearSearch) => ReactNode[]` | -       | 
| searchBtnStyle     | Customize the style of the form action button group                                                           | `CSSProperties`                  | -      | 
| searchBtnClassName | ClassName of the custom form action button group                                                     | `string`                               | -      | 
| searchWithError    | Whether to continue the query operation when the form validation fails                                                  | `boolean`                              | true    |
| searchText         | Customize the text of the query button                                                                  | `string`                               | Search  | 
| resetText          | Customize the text of the reset button                                                                  | `string`                               | Reset  | 
| debug              | Turn on debug mode to show the internal status at all times, **it is highly recommended when developing**                        | `boolean`                              | false |

#### Api

`api` has two input parameters: `params`, `sorter`, which are the values of the form filter items, and the sorting parameters, respectively. `api` needs to return an object that must have `rows` and `total` in it.
The `api` will be called automatically when the form is queried, bringing in the latest form values and other query parameters.
 
```jsx | pure
const searchApi = async (params, sorter) => {
  const result = await getTableData(params, sorter);

  return {
    rows: result.list,    // rows corresponds to the tableSource of the table and must return
    total: result.total,  // total Total number of corresponding data, used for paging, must be returned
  }
}

<Search api={searchAPi} />
```

You can pass in multiple `api` functions as an array, and Table-Render will automatically generate the corresponding tabs.

```jsx | pure

const searchHotel = async (params) => {
  const result = await getHotelData(params);
  return {
    rows: result.list,
    total: result.total,
  }
}

const searchPeople = async (params) => {
  const result = await getPeopleData(params);
  return {
    rows: result.list,
    rows: result.totla,
  }
}

// requires an additional name attribute, which is the name of the tab
<Search 
  api={[
    { name: 'Hotel Data', api: searchHotel },
    { name: 'People Data', api: searchPeople },
  ]}
/>

```

### Table

Supports [props](https://ant-design.antgroup.com/components/table-cn/#Table) for all antd tables, but the parameters `dataSource`, `loading`, `pagination` are internal states. You don't need to fill in.

| Prop                  | Description                                                                      | Type                | Default     |
| --------------------- | ------------------------------------------------------------------------- | ------------------- | ----------- |
| headerTitle           | Table Title                                                                  | `string \| ReactNode`| - | -   |
| toolbarRender         | Controls at the top right of the form body, such as the "Add" button                                      | `() => ReactNode[]` | false     |
| toolbarAction         | Icon list displayed at the top right of the table body, with built-in functions for refreshing, adjusting density, full-screen display, etc. | `boolean`           | false     |
| pageChangeWithRequest | Whether to request an interface when switching paging                                                | `boolean`           | true      |
| columns               | Column Definition                                                                    | [ProColumnsType](#columns)    | -     |
| debug                 | Turn on debug mode to show the internal status at all times, **it is highly recommended when developing**            | `boolean`           | false     |

### Columns

columns is the existing props of antd, supporting all the [columns](https://ant.design/components/table-cn/#Column) configurations of antd, and also providing some more convenient api to speed up the writing

| Prop      | Description                                                | Type                                                  | Default |
| --------- | --------------------------------------------------- | ----------------------------------------------------- | ------ |
| ellipsis  | Whether to auto-abbreviate                                        | `boolean`                                               | -      |
| copyable  | Whether to support replication                                        | `boolean`                                               | -      |
| valueType | The type of the value, see [ValueType](#valuetype)                 | `'text' \| 'money' \| 'date' \| 'dateTime'` | text |
| enum      | For an enumeration of current values, see [Enum](#enum) | `object`.                                              | -      |

#### ValueType

TableRender encapsulates some common value types to reduce repetitive render operations, and configures a valueType to display the formatted response data.

  | Prop     | Description                                                               |
  | -------- | ------------------------------------------------------------------ |
  | text     | Common text type                                                     |
  | date     | When data is returned as a date type, the format is automatically converted to `YYYY-MM-DD`.          |
  | dateTime | When data is returned as a date type, the format is automatically converted to `YYYY-MM-DD HH:mm:ss` |
  | money    | When the data is an amount, the format will be automatically converted to `¥0,0.00`              |

  ```js
  const columns = [
    {
      title: 'Hotel GMV',
      dataIndex: 'money',
      valueType: 'money', // Automatically convert the format to '¥0,0.00'  
    },
    {
      title: 'Create Time',
      dataIndex: 'created_at',
      valueType: 'date', // Automatically convert the format to 'YYYY-MM-DD' 
    },
    // ...
  ]
  ```

#### Enum

Enumeration of current column values to facilitate the mapping of table values.

```js
const columns = [
  {
    title: 'Hotel Status'
    dataIndex: 'state',
    enum: {
      open: 'In business',   // Automatically converts open to In business
      closed: 'Closed', // Automatically converts close to Closed
    },
  },
  // ...
]
```

### UseTable

The context of `table-render` can be obtained via `useTable` as follows

| Prop       | Description                                                                                                                 | Type       |
| ---------- | -------------------------------------------------------------------------------------------------------------------- | ---------- |
| tableState | These are global states and are used as needed                                                                                       | [TableStateType](#tablestate)   |
| refresh    | Refresh the table data, see [Refresh] for details(#refresh)                                                                                                         | `(config, search) => Promise<void>` |
| setTable   | Tool function for modifying the global state, setTable is the same as tableState, setState is the same as state                                       | `(tableState) => void` |
| changeTab  | Functions for manually switching tabs, e.g. the two current search tabs: "My Activity", "All Activity" (corresponding to tab values 0 and 1 respectively), see [ChangeTab](#changetab)                      | `(tab) => void` |
| form       | The Search component is generated by form-render and can fetch the form instance of the search form and the methods hanging on it, e.g. `form.resetFields` to clear the search items | `object`   |

Export the useTable and the corresponding methods:

  ```js
  import { useTable } from 'table-render';
  const { refresh, tableState, setTable } = useTable();
  ```

#### TableState
The global state of a form `tableState` contains the following data.

  ```js
  {
    loading: false, // Whether the table is loading or not
    search: {},     // Option Data
    searchApi,      // api for search
    tab: 0,         // If searchApi is multiple, it will automatically generate the corresponding number of tabs, here is the key of the current tab
    dataSource: [], // Table Data
    extraData: { }, // Customized extended information
    pagination: {
      current: 1,   // Current page
      pageSize: 10, // Current pageSize
      total: 100,   // Total
    },
  }
  ```

#### Refresh

Methods for actively triggering form refreshes.

```ts
type Refresh = (
  config?: { 
    stay: boolean, // Whether to stay on the current page after refresh, default false, back to the first page
    tab: number    // When there are multiple searchApi, it is used to force the searchApi corresponding to a certain tab to be searched.
  },
  search?: any     // Additional parameters to be passed to searchApi
) => Promise<void>;


const { refresh } = useTable();

const onClick = () => {
  refresh({ stay: true }); // Refresh the data, but stay at the existing page number
}

```

#### ChangeTab

Manually switch the current tab

  ```ts
  type ChangeTab = (
    tab: number
  ) => Promise<void>;


  const { changeTab } = useTable();

  const onClick = () => {
    changeTab(1);   // Manually switch to the corresponding tab
  };
  ```
