## 解构赋值

我们有一个对象：

```js
let user = {
  name: "John",
  years: 30,
};
```

写一个解构赋值语句使得：

- name 属性赋值给变量 name。
- years 属性赋值给变量 age。
- isAdmin 属性赋值给变量 isAdmin（如果属性缺失则取默认值 false）。

下面是赋值完成后的值的情况：

```js
let user = { name: "John", years: 30 };

// 等号左侧是你的代码
// ... = user

alert(name); // John
alert(age); // 30
alert(isAdmin); // false
```

```js
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
```

## 最高薪资

这儿有一个 salaries 对象：

```js
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
```

新建一个函数 topSalary(salaries)，返回收入最高的人的姓名。

- 如果 salaries 是空的，函数应该返回 null。
- 如果有多个收入最高的人，返回其中任意一个即可。

P.S. 使用 Object.entries 和解构语法来遍历键/值对。

```js
function topSalary(salaries) {
  let result = [null, 0];
  for (const entries of Object.entries(salaries)) {
    if (entries[1] >= result[1]) {
      result = entries;
    }
  }
  return result[0];
}
```