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
console.log([...obj])