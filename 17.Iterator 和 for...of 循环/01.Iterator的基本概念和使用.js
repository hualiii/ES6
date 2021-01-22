// 模拟iterator
function makeIterator(array) {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {value: undefined, done: true}
        }
    }
}

const mt = makeIterator([1, 2, 3, 4, 5, 6, 7])
console.log(mt.next())
console.log(mt.next())
console.log(mt.next())
console.log(mt.next())
console.log(mt.next())
console.log(mt.next())
console.log(mt.next())
console.log(mt.next())
