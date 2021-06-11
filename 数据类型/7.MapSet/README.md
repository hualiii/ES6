## 过滤数组中的唯一元素

定义 arr 为一个数组。

创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。

例如：

```js
function unique(arr) {
  /* 你的代码 */
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // Hare, Krishna, :-O
```

```js
function unique(arr) {
  return [...new Set(arr)];
}
```

## 过滤字谜（anagrams）

Anagrams 是具有相同数量相同字母但是顺序不同的单词。

例如：

```js
nap - pan;
ear - are - era;
cheaters - hectares - teachers;
```

写一个函数 aclean(arr)，它返回被清除了字谜（anagrams）的数组。

例如：

```js
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
```

对于所有的字谜（anagram）组，都应该保留其中一个词，但保留的具体是哪一个并不重要。

```js
function aclean(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i].toLowerCase().split("").sort().join("");
    map.set(item, arr[i]);
  }
  return Array.from(map.values());
}
```

## 