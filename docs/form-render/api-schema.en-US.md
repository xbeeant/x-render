---
order: 1
toc: content
group: 
  title: API
  order: 4
---

# Protocol Configuration Items

`schema` is used to describe the basic information, structure and checks of the form.`schema` follows [JSON Schema International Specification](https://json-schema.org/understanding-json-schema/) in its structure。
There are three types of form elements in total: `item`, `object`, and `list`.

## Form configuration items
```js
{
  type: 'object', 
  displayType: 'column', 
  column: 1, 
  properties: {}
}
```
### type
type: 'object'（Fixed Configuration）

### displayType
Form item label Layout: row | column | inline

### column
Form layout: one row, multiple columns

### properties
Collection of form elements

### labelWidth
Fixing the width of form labels






## Nested control configuration items
A block containing other elements that can be used to sort form items.

```js
detail: { // detail is the field name
  title: 'Basic Info',
  type: 'object',
  column: 1,
  widget: 'collapse',
  props: {},
  properties: {}
}
```
### type
type: 'object'（Fixed Configuration）

### title
Title

### widget
Component name, the built-in components are: collapse | card | lineTitle | subInline

### properties
Collection of form elements

### column
Nested internal layout, multiple columns in a row

### description
Subtitle Description

### tooltip
Air bubble tip

### props
Additional Properties



## 三、List control configuration items
Dynamically add and subtract form entries

```js
list: { // list is the field name
  title: 'People List',
  type: 'array',
  widget: 'card', 
  items: {
    title: 'Basic Info',
    type: 'object',
    properties: {}
  },
  min: 1,
  max: 5
}
```
### type
type: 'array'（Fixed Configuration）

### title
Title

### widget
Component names, built-in components are: cardList | simpleList | tableList | drawerList | virtualList

### items
Dynamic item configuration, which can be a nested control
```js
{
  title: 'Basic Info', // Title
  type: 'object', // Fixed Configuration
  properties: {} // Form elements
  // widget: 'collapse', Supports configuration of nested controls
},
```
### max
Maximum length

### min
Minimum length


## Basic control configuration items
`item`：the most basic input boxes, selection boxes, etc.

Basic
```js
url: {
  title: 'urlInput',
  type: 'string',
  widget: 'input'
}
```

### type
Data Type：'string' | 'number' | 'boolean' | 'array' | 'range' | 'html' | 'block'

### title 
Title

### placeholder
Input content prompt

### description
Subtitle Description

### tooltip
Air bubble tip
```js
tooltip: {
  title: ''
}
```
### descWidget
Custom subtitle hint component

### extra
More explanatory information: extra can be an html string or plain text that will be displayed on the line immediately below the element.

### required
Required field

### min
string type is the minimum length of a string; number type is the minimum length; array type is the minimum length of an array

### max
string type is the maximum length of a string; number type is the maximum length; array type is the maximum length of an array

### format
`'image' | 'textarea' | 'color' | 'email' | 'url' | 'dateTime' | 'date' | 'time' | 'upload'`

### Rules
```js
rules: [
  { pattern: '^[\u4E00-\u9FA5]+$', message: 'Please enter Chinese!' }
]
```

### hidden
Hidden

### disabled
Disabled

### readOnly
ReadOnly

### readOnlyWidget
Specify read-only rendering components

### props
Additional properties, if the antd component is used, correspond to the other properties of the antd component

### options
```js
props: {
  options: [
    lable: '',
    value: '',
    // disabled: '',
  ]
}
```

### dependencies
[path]： Triggers re-rendering of this element when a dependent element is updated, for complex form linkage

### className
Element class name

