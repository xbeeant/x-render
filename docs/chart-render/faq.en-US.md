---
order: 4
title: FAQ
---

# FAQ

### 1、Is it possible to not render the `<Search />` component？

1. `<Search hidden />`
2. `<Search style={{ display: 'none' }} />`
1. `<Search className="hide" />` + `.hide { display: none }`

### 2、How to solve the problem of introducing a Line component with the same name?

```js
import { Line as AntLine } from '@ant-design/charts';
```
