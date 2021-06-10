## 在对象字面量中使用 "this"

这里 makeUser 函数返回了一个对象。

访问 ref 的结果是什么？为什么？

```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // 结果是什么？
```

## 创建一个计算器

创建一个有三个方法的 calculator 对象：

+ read() 提示输入两个值，并将其保存为对象属性。
+ sum() 返回保存的值的和。
+ mul() 将保存的值相乘并返回计算结果。

```js
let calculator = {
// ……你的代码……
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

```js
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

```

## 链式（调用）

有一个可以上下移动的 ladder 对象：

```js
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // 显示当前的 step
    alert( this.step );
  }
};
```

现在，如果我们要按顺序执行几次调用，可以这样做：

```js
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```

修改 up，down 和 showStep 的代码，让调用可以链接，就像这样：

```js

```