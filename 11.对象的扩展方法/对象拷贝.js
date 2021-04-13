// 浅拷贝
let obj = {
    a: [1, 2, 3, {
        foo: "foo",
        bar: "bar",
        baz: "baz"
    }, 4, 5, 6],
    b: 2,
    c: 3,
    d: {
        x: 11,
        y: 22,
        c: 33
    }
}

// 1.遍历

function clone(obj) {
    let target = {}
    for (const key in obj) {
        target[key] = obj[key]
    }
    return target
}

// 2.Object.assign()
function assignClone(obj) {
    return Object.assign({}, obj)
}

// 3. ...展开运算符

function cloneObj(obj) {
    return {...obj}
}

// 深拷贝

// 1.递归

function deepClone(obj) {
    let target = Array.isArray(obj) ? [] : {}
    for (const objKey in obj) {
        if (typeof obj[objKey] === 'object') {
            target[objKey] = deepClone(obj[objKey])
        } else {
            target[objKey] = obj[objKey]
        }
    }
    return target
}

// 2. JSON.parse
function parseDeepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

// 浅拷贝拷贝原型

// 方法一:
function getClone(obj) {
    return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)
}