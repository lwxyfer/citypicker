# datePicker

提供中国的省份，市级，区级的级联选择器。

# USAGE

## 安装

`npm install --save citypicker` 或者直接下载这个仓库.

## 具体使用

1.直接引用`dist/picker.min.js`

```js
<script src="dist/picker.min.js"></script>
<script>
// init this plugin
 picker()

// get selected data
var data = picker()
</script>
```
2.使用模块化加载

```js
var picker = require('picker');
picker()

// recommend to use ES2015
import { picker } from 'picker';
picker()
```

# MIT license
