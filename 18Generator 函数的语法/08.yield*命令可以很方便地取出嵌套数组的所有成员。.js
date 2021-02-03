function* getArr(array) {
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            yield* getArr(array[i])
        }
    } else {
        yield array
    }
}

let array = [1, [2, 3, 4, [5, 6, 7]], 8, 9, [10, 11, 12, [13, 14, 15]]]

console.log([...getArr(array)])