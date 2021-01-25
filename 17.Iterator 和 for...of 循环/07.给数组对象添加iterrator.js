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