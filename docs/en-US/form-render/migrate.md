---
order: 0
toc: content
hide: true
group: 
  title: 其他
  order: 5
---

# V2 升级方案
本文档将帮助你从 1.x 升级到 2.x 版本，同时 2.x 将不在兼容 0.x 版本


## 特性

全新的 form-render 2.0 主要具备以下特性：

- 🚀 **更好的表单性能**：通过对 form-render 重构，底层接入 Antd Form 来实现表单的数据收集、校验等逻辑，提升表单的整体性能。有效的解决了表单数据改变表单全局刷新的问题。
- 🎨 **全新的UI样式**：通过对中后台表单业务梳理，定制了一套全新的 UI 样式和交互规范，提升表单整体美观度 。[最佳展示](/form-render/disaply-row)
- 🚥 **国际化**：国际化支持




## 二、有哪些不兼容的变化

### API 调整

#### 1. form.formData 弃用
改用 form.getValues() 方式获取
#### 2. onFinish 提交函数
只有校验通过 onFinish 才会被触发，不在返回错误信息参数，为了兼容1.0版本，错误信息默认返回 []


```diff
- const onFinish = (data, errors) => {

}

+ const onFinish = (data) => {

}

```
#### 3. validateFields
errorInfo 的出参名称发生变更

```diff
validateFields()
  .then(values => {
    /*
    values:{
      input1: 'input1 输入的值'
    }
    */
  })
  .catch(errorInfo => {
    /*
    errorInfo:
      {
-       data: {
-         input1: 'input1 输入的值',
-        },

+        values: {
+          input1: 'input1 输入的值',
+        },


-        errors: [
-          { name: 'input1', error: ['input1 的error信息'] },
-       ]
+        errorFields: [
+          { name: ['password'], errors: ['Please input your Password!'] },
+        ],

      }
    */
  });
```