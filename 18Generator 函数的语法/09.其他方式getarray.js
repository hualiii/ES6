let array = [1, [2, 3, 4, [5, 6, 7]], 8, 9, [10, 11, 12, [13, 14, 15]]]

function getArr(array) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            return getArr(array[i])
        } else {
            return array[i]
        }
    }
}