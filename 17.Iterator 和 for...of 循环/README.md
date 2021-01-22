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

```
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

>Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环（详见下文）。当使用for...of循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。

一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。

> ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内（参见《Symbol》一章）。


