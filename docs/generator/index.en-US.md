---
order: 1
title: How to use
toc: menu
---

## Install

```bash
npm i fr-generator
```

## Code Demo

```jsx
/**
 * transform: true
 * defaultShowCode: true
 */
import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: 'input',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;
```

## API

### Props

| Props               | Description                     | Type       | Default                                                                                                                     |
| ------------------ | ------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| getId              | Set how to generate new ids      | `Function` | name => `${name}_${nanoid(6)}`                                                                                             |
| hideId             | Hide Component ID              | `boolean`  | `false`                                                                                                                    |
| canDelete          | Component deletion control             | `boolean`  | `Function`                                                                                                                 |
| defaultValue       | Default form schema          | `object`   | `DEFAULT_SCHEMA`                                                                                                           |
| transformer        | schema Bidirectional conversion          | `object`   | `{ from, to, fromSetting, toSetting }`                                                                                     |
| extraButtons       | Action bar buttons               | `array`    | `extraButton[]`                                                                                                            |
| controlButtons     | Check item action button           | `array`    | `controlButton[]`                                                                                                          |
| preview     | Preview state control           | `boolean`    | -                                                                                                          |
| settings           | Left and right sidebar configuration             | `array`    | [`defaultSettings`](https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/settings/index.js)       |
| commonSettings     | General configuration                 | `object`   | [`defaultCommonSettings`](https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/settings/index.js) |
| globalSettings     | Global Configuration                 | `object`   | [`defaultGlobalSettings`](https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/settings/index.js) |
| widgets            | Customized Components               | `object`   | `{}`                                                                                                                       |
| mapping            | Mapping rules for components and schema | `object`   | `{}`                                                                                                                       |
| validation         | Whether to enable configuration form validation     | `boolean`  | `true`                                                                                                                     |
| fieldRender        | Custom component rendering functions       | `Function` | `(schema, widgetProps, children, originNode) => originNode`                                                                |
| fieldWrapperRender | Custom container component rendering functions   | `Function` | `(schema, isSelected, children, originNode) => originNode`                                                                 |
| locale            | International configuration           || `string`   | [`cn`](https://github.com/alibaba/x-render/blob/master/tools/schema-generator/src/i18next/locales/resources.ts)|

#### extraButton

| Prop    | Description             | Type              |
| ------- | ---------------- | ----------------- |
| text    | Button text         | `string`          |
| onClick | Button click callback function | `(event) => void` |

The first four items of the array are boolean values that determine whether the default button is displayed or not.
All other properties of the antd button component are supported https://ant.design/components/button-cn/#API

#### controlButton

| Prop    | Description            | Type                      |
| ------- | ---------------- | ------------------------- |
| text    | Button text         | `string`                  |
| onClick | Button click callback function | `(event, schema) => void` |

The first two items of the array are boolean values or functions that determine whether the default button is displayed or not, and the function input is the selected item schema.

### Events

| Event Name         | Description                 | Callback parameters        |
| -------------- | -------------------- | --------------- |
| onChange       | Form data change callback  | The form's data     |
| onSchemaChange | Form schema change callbacks | Exported schema   |
| onCanvasSelect | Canvas component selection callback     | The schema of the selected item |

### Methods

| Method Name         | Description                      | Parameters     |
| -------------- | -------------------------- | -------- |
| getValue       | Get the exported schema values       | -        |
| setValue       | Force a schema change from the outside      | `schema` |
| copyValue      | Copy existing schema to clipboard | -        |
| getErrorFields | Get configuration item validation error         | -        |

