## 总结:

数组是一种特殊的对象，适用于存储和管理有序的数据项。

声明:

```js
// 方括号 (常见用法)
let arr = [item1, item2...];
```

```js
// new Array (极其少见)
let arr = new Array(item1, item2...);
```

调用 `new Array(number)` 会创建一个给定长度的数组，但不含有任何项。

length 属性是数组的长度，准确地说，它是数组最后一个数字索引值加一。它由数组方法自动调整。

如果我们手动缩短 length，那么数组就会被截断。

我们可以通过下列操作以双端队列的方式使用数组：

- push(...items) 在末端添加 items 项。
- pop() 从末端移除并返回该元素。
- shift() 从首端移除并返回该元素。
- unshift(...items) 从首端添加 items 项。

遍历数组的元素：

- `for (let i=0; i<arr.length; i++) `— 运行得最快，可兼容旧版本浏览器。

- `for (let item of arr`) — 现代语法，只能访问 items。

- `for (let i in arr) `— 永远不要用这个。

比较数组时，不要使用 == 运算符（当然也不要使用 > 和 < 等运算符），因为它们不会对数组进行特殊处理。它们通常会像处理任意对象那样处理数组，这通常不是我们想要的。

但是，我们可以使用 for..of 循环来逐项比较数组。

## 数组操作。

我们试试下面的 5 个数组操作。

创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。

将 “Rock-n-Roll” 从数组末端添加进去。

用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。

去掉数组的第一个值并显示它。

在数组前面添加 Rap 和 Reggae。

过程中的数组：

```js
Jazz, Blues
Jazz, Bues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
```

```js
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let mid = Math.floor(1 + styles.length / 2);
styles[mid - 1] = "Classics";
const first = styles.shift();
console.log(first);
styles.unshift("Rap", "Reggae");
console.log(styles);
```

## 最大子数组

输入是以数字组成的数组，例如 arr = [1, -2, 3, 4, -9, 6].

任务是：找出所有项的和最大的 arr 数组的连续子数组。

写出函数 getMaxSubSum(arr)，用其找出并返回最大和。

例如：

```js
getMaxSubSum([-1, 2, 3, -9]) == 5（高亮项的加和）
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6（所有项的和）
```
如果所有项都是负数，那就一个项也不取（子数组是空的），所以返回的是 0：
```js
getMaxSubSum([-1, -2, -3]) = 0
```