let obj = {
    a: 1,
    b: [1, 2, 3],
    c: {
        demo: 'hello'
    }
}

function deepClone(obj) {
    let result = undefined
    if (typeof obj === 'object') {
        result = obj.constructor === Array ? [] : {}
        for (const objKey in obj) {
            result[objKey] = typeof obj[objKey] === 'object' ? deepClone(obj[objKey]) : obj[objKey]
        }
    } else {
        result = obj
    }
    return result
}

let deepCloneObj = deepClone(obj)

console.log(deepCloneObj.b === obj.b)