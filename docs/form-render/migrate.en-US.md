---
order: 0
toc: content
hide: true
group: 
  title: Other
  order: 5
---

# V2 Upgrade Program
**2.x Currently in beta, please install alpha version to experience**

This document will help you to upgrade from version 1.x to 2.x, while 2.x will not be compatible with version 0.x.

## Characteristics

The new form-render 2.0 has the following key features：

- 🚀 **Better form performance**：By refactoring form-render, the bottom layer is connected to Antd Form to realize the logic of data collection and verification of the form and improve the overall performance of the form. Effectively solves the problem of global refresh of form data change.
- 🎨 **New UI style**：Customized a new set of UI styles and interaction specifications to improve the overall aesthetics of the form by sorting out the business of the middle and back office forms. [Best Display](/form-render/disaply-row)
- 🚥 **Internationalization**：International support 【In progress】
- 💎 **Antd V5**：Compatible with antd V5 version 【In progress】





## What are the incompatible changes

### API Adjustments

#### 1. form.formData Deprecated
Instead, use form.getValues() to get.
#### onFinish commit function
Only if the check passes onFinish will be triggered and no error message parameter will be returned, for compatibility with version 1.0, error messages are returned by default [].

```diff
- const onFinish = (data, errors) => {

}

+ const onFinish = (data) => {

}

```
#### 3. validateFields
The name of the errorInfo reference has changed.

```diff
validateFields()
  .then(values => {
    /*
    values:{
      input1: 'input1 value'
    }
    */
  })
  .catch(errorInfo => {
    /*
    errorInfo:
      {
-       data: {
-         input1: 'input1 value',
-        },

+        values: {
+          input1: 'input1 value',
+        },


-        errors: [
-          { name: 'input1', error: ['input1 error info'] },
-       ]
+        errorFields: [
+          { name: ['password'], errors: ['Please input your Password!'] },
+        ],

      }
    */
  });
```