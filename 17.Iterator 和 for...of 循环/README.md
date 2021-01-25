## iterator 的基本概念和使用

JavaScript中表示集合的有 array object map set 四种数据集合 所以需要一个统一的接口处理不同的数据结构，iterator就是这个接口

iterator的作用

1. 为不同的数据集合提供一个统一的接口
2. 使数据结构以某种顺序排序
3. ES6新增for ... of ... iterator接口主要供 for of 消费

iterator的遍历过程

1. 创建一个指针对象，指向当前数据集合的初始位置。也就是说遍历器的本质是一个指针对象。
2. 第一次调用next方法指向数据结构的第一个值
3. 第二次调用next方法指向数据结构的第二个值
4. 第n次调用next方法指向数据结构的第n个值
5. 最后指向undefined

eg: 每次调用next方法 会返回`{value:value,done:false/true}`。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

> 模拟实现iterator接口

```js
function makeIterator(array) {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {value: undefined, done: true}
        }
    }
}

const mt = makeIterator([1, 2, 3, 4, 5, 6, 7])
```

## 默认iterator接口

> Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环（详见下文）。当使用for...of循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。

一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。

> ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有`Symbol.iterator`属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内（参见《Symbol》一章）。

```js
const obj = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};
```

上面代码中，对象obj是可遍历的（iterable），因为具有Symbol.iterator属性。执行这个属性，会返回一个遍历器对象。该对象的根本特征就是具有next方法。每次调用next方法，都会返回一个代表当前成员的信息对象，具有value和done两个属性。

ES6 的有些数据结构原生具备 Iterator
接口（比如数组），即不用任何处理，就可以被for...of循环遍历。原因在于，这些数据结构原生部署了Symbol.iterator属性（详见下文），另外一些数据结构没有（比如对象）。凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。

原生具备 Iterator 接口的数据结构如下。

+ Array
+ Map
+ Set
+ String
+ TypedArray
+ 函数的 arguments 对象
+ NodeList 对象

下面的例子是数组的Symbol.iterator属性。

```js
let arr = [1, 2, 3, 4, 5, 6]
let it = arr[Symbol.iterator]()

console.log(it.next())//{ value: 1, done: false }
console.log(it.next())//{ value: 2, done: false }
console.log(it.next())//{ value: 3, done: false }
console.log(it.next())// { value: 4, done: false }
console.log(it.next())// { value: 5, done: false }
console.log(it.next())// { value: 6, done: false }
console.log(it.next())// { value: undefined, done: true }
```

数据原生具备iterator接口，调用Symbol.iterator属性可以生成遍历器

对于原生部署 Iterator 接口的数据结构，不用自己写遍历器生成函数，for...of循环会自动遍历它们。除此之外，其他数据结构（主要是对象）的 Iterator
接口，都需要自己在Symbol.iterator属性上面部署，这样才会被for...of循环遍历。

```js
let array = [1, 2, 3, 4, 5, 6, 7]
for (const number of array) {
    console.log(number)
}
```

对象(Object)没有默认部署`Symbol.iterator`接口，因为对象属性的遍历顺序是不确定的，需要手动设置

eg:

```js
let obj = {
    a1: 1,
    a2: 2,
    a3: 3
}
for (const objElement of obj) {
    console.log(objElement)
}
```

`throw:TypeError: obj is not iterable`

本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换

一个对象如果要具备可被`for...of`循环调用的 Iterator 接口，就必须在`Symbol.iterator`的属性上部署遍历器生成方法（原型链上的对象具有该方法也可）。

手写rangeIterator

```js
class RangeIterator {
    constructor(start, stop) {
        this.value = start
        this.stop = stop
    }

    [Symbol.iterator]() {
        return this
    }

    next() {
        let value = this.value
        if (value < this.stop) {
            this.value++
            return {
                value: value,
                done: false
            }
        } else {
            return {
                value: undefined,
                done: true
            }
        }
    }
}

function range(start, stop) {
    return new RangeIterator(start, stop)
}

for (const number of range(5, 9)) {
    console.log(number)
}
```

下面是通过遍历器实现指针结构的例子。

```js
function Obj(value) {
    this.value = value
    this.next = null
}

Obj.prototype[Symbol.iterator] = function () {
    let iterator = {next: next}
    let current = this

    function next() {
        if (current) {
            let value = current.value
            current = current.next
            return {done: false, value: value}
        } else {
            return {done: true}
        }
    }

    return iterator
}
let one = new Obj(1)
let two = new Obj(2)
let three = new Obj(3)

one.next = two
two.next = three

for (let i of one) {
    console.log(i) // 1, 2, 3
}
```

下面是另一个为对象添加 Iterator 接口的例子。

```js
let obj = {
    data: ['1', '2', '3', '4', '5', '6'],
    [Symbol.iterator]() {
        let _this = this
        let index = 0
        return {
            next() {
                if (index < _this.data.length) {
                    return {value: _this.data[index++], done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
}
for (const objElement of obj) {
    console.log(objElement)
}
```

类数组(存在数值键名和length属性)可以直接调用数组的遍历器

```js
let arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}
for (const arrObjElement of arrObj) {
    console.log(arrObjElement)
}
```

存在遍历器属性可以使用数组展开运算符

```
[...obj]//[ '1', '2', '3', '4', '5', '6' ]
[...arrObj]//['a','b','c']
```


## 调用 Iterator 接口的场合

> 有一些场合会默认调用 Iterator 接口（即Symbol.iterator方法），除了下文会介绍的for...of循环，还有几个别的场合。

### 结构赋值

```js
let set = new Set(['a', 'b', 'c'])
let [x, y] = set
console.log(x, y)//a ,b

let [foo, ...bar] = set
console.log(foo, bar)//a,['b','c']
```

### 扩展运算符

> 扩展运算符（...）也会调用默认的 Iterator 接口。

```js
// 例一
var str = 'hello';
[...str] //  ['h','e','l','l','o']

// 例二
let arr = ['b', 'c'];
['a', ...arr, 'd']
// ['a', 'b', 'c', 'd']
```

