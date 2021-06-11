## 两个函数 — 一个对象

是否可以创建像 new A()==new B() 这样的函数 A 和 B？


```js
function A() {  }
function B() {  }

let a = new A;
let b = new B;

alert( a == b ); // true
```

```js
let obj = {}
function A(){
  return obj
}
function B(){
  return obj
}
```

## 创建 new Calculator

创建一个构造函数 Calculator，它创建的对象中有三个方法：

+ read() 使用 prompt 请求两个值并把它们记录在对象的属性中。
+ sum() 返回这些属性的总和。
+ mul() 返回这些属性的乘积。

例如：
```js
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

```js
function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
```

## 输入数字求和
写出函数 sumInput()，要求如下：

+ 使用 prompt 向用户索要值，并存在数组中。
+ 当用户输入了非数字、空字符串或者点击“取消”按钮的时候，问询结束。
+ 计算并返回数组所有项之和。

P.S. 0 是有效的数字，不要因为是 0 就停止问询。

```js
function sumInput() {
  let arr = [],
    sum = 0;
  while (true) {
    let value = prompt("A number please?", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    arr.push(+value);
  }
  for (const arrElement of arr) {
    sum += arrElement;
  }
  return sum;
}
```
