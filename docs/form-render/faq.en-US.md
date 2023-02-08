---
order: 1
toc: content
group: 
  title: Other
  order: 5
nav:
  title: FormRender
  order: -1
---



<!-- ---
order: 11
toc: false
--- -->
# FAQ

### 1、What are the rules for passing the content I write in the schema to the custom component?

The base properties are passed according to fixed rules, generally only the properties related to the rendering component will be passed in, and of course the whole schema will be passed in as a field. The props will be directly expanded to facilitate the direct and smooth use of antd's components, so the structure of the props will be similar to： `props = {...schema, ...schema.props}`.

### 2、What is the difference between format and widget, for example, is there a difference between using format: color to specify a color selection component and using widget: color？

In the example in the question, the effect is the same. But format is also a validation keyword. For example, both `format: url` and `widget: url` will specify that the link component is used for rendering, but the former will check the validity of the link. In general, `date, dateTime, time, url, image`, which declare both data validation format and rendering component, use format, while all others can use widget. Historical compatibility issues.

### 3、Does FormRender 1.0 include antd as a strong dependency, and does it retain the ability to keep the original pure form core package and then register third-party component libraries through custom components？

FormRender 1.0 is the same as before, the mouth of the component library is open, external use can be injected through widgets & mapping two props, internal can also be convenient to mention pr. dependency on antd is peerdependency, form-render itself is still pure, just write a very thin It is not necessary to split the wrapper for antd components. After that, the component library access is the same pattern: the wrapper is built directly into the core code, and the component library itself peerdependency.

### 4、The drop-down selection box options are expected to be available from the server side. Is there a simple way to implement？

This can be done with `form.setSchemaByPath` in `onMount`, reference [Sample Documentation](/form-render/advanced/form-methods#%E4%BE%8B-4%EF%BC%9A%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8A%A0%E8%BD%BD%E9%80%89%E6%8B%A9%E6%A1%86%E7%9A%84%E9%80%89%E9%A1%B9)

### 5、 Read-only mode, the default rendering does not meet the requirements I want to customize, what can I do？

Reference [Custom components in read-only mode](/form-render/advanced/widget#%E5%8F%AA%E8%AF%BB%E6%A8%A1%E5%BC%8F%E4%B8%8B%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)

### 6、 I tried to use form.setValues, but the set value is still empty？

Form-render has the concept of life cycle, please set value in onMount 。

### 7、 The data of the custom component is JSON data, when the type is specified as string, the check prompts "xxx type is not string", if the type is changed to "object", the UI display will change again, what should we do？

{ type: 'any' }
