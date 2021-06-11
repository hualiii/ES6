## 你好，对象

按下面的要求写代码，一条对应一行代码：

创建一个空的对象 user。

为这个对象增加一个属性，键是 name，值是 John。

再增加一个属性，键是 surname，值是 Smith。

把键为 name 的属性的值改成 Pete。

删除这个对象中键为 name 的属性。

```js
let user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name
```

## 检查空对象

写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。

应该像这样：

```js
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
```

```js
function isEmpty(obj){
    for (const objKey in obj) {
        return true;
    }
    return false;
}
```

## 对象属性求和

我们有一个保存着团队成员工资的对象：

```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```
写一段代码求出我们的工资总和，将计算结果保存到变量 sum。从所给的信息来看，结果应该是 390。

如果 salaries 是一个空对象，那结果就为 0。

```js
let sum = 0;
for (const key in salaries){
    sum += salaries[key];
}
console.log(sum)
```

## 将数值属性值都乘以 2

创建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性值都乘以 2。

例如：

```js
// 在调用之前
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// 调用函数之后
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```

```js
function multiplyNumeric(obj){
    for (const objKey in obj) {
        if (typeof obj[objKey] == "number"){
            obj[objKey] *= 2;
        }
    }
}
```