## 将 border-left-width 转换成 borderLeftWidth

编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。

即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。

示例：

```js
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
```

```js
function camelize(str) {
  const strArr = str.split("-");
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join("");
}
```

优化:

```js
function camelize(str) {
  return str
    .split("-")
    .map((item, index) => {
      return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
    })
    .join("");
}
```

## 原位（in place）过滤范围

写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。

该函数应该只修改数组。它不应该返回任何东西。

例如：

```js
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

alert( arr ); // [3, 1]
```


