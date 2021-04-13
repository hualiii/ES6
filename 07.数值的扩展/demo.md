## 二进制和八进制表示法(0B/0b or OO/0o)
```js
console.log(0B1010)//10
console.log(0O11)//9
```

## Number.isFinite(), Number.isNaN()

```js
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
```

```js
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
```
```js
isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false
```

## Number.parseInt(), Number.parseFloat()

> ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
 
```js
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
```
减少全局方法,使语言逐渐模块化

## Number.isInteger()
>Number.isInteger()用来判断一个数值是否为整数。
```js
Number.isInteger(25) // true
Number.isInteger(25.1) // false
```
>JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
```js
Number.isInteger(25) // true
Number.isInteger(25.0) // true
```
>如果参数不是数值，Number.isInteger返回false。

```js
Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
```
