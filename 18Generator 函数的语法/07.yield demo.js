function* inner() {
    yield "hello"
}

function* outer1() {
    yield "open"
    yield inner()//Object [Generator] {}
    yield "close"
}

function* outer2() {
    yield "open"
    yield inner()//hello
    yield "close"
}

// outer2使用了yield*，outer1没使用。结果就是，outer1返回一个遍历器对象，outer2返回该遍历器对象的内部值。

// yield×后面应该可以跟具有iterator接口的数据函数

// test

function* demo() {
    yield "open"
    yield* [1, 2, 3, 4, 5, 6, 7, 8, 9]
    yield "close"
}

for (const number of demo()) {
    console.log(number)
}

// 结论:yield*可以接具有iterator接口的数据函数
