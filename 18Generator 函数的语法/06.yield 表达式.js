// 在一个Generator函数中调用另一个Generator函数

// 方法一：遍历另一个Generator函数，麻烦
function* foo() {
    yield "a"
    yield "b"
}

function* bar() {
    yield "x"
    for (const item of foo()) {
        console.log(item)
    }
    yield "y"
}

for (const item of bar()) {
    console.log(item)
}

console.log("---------------------------------")

// 方法二：使用yield×

function* baz() {
    yield "baz"
    yield* bar()
    yield "ending"
}

for (const item of baz()) {
    console.log(item)
}

