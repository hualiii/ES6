class RangeIterator {
    constructor(start, stop) {
        this.value = start
        this.stop = stop
    }

    [Symbol.iterator]() {
        return this
    }

    next() {
        let value = this.value
        if (value < this.stop) {
            this.value++
            return {
                value: value,
                done: false
            }
        } else {
            return {
                value: undefined,
                done: true
            }
        }
    }
}

function range(start, stop) {
    return new RangeIterator(start, stop)
}

for (const number of range(5, 9)) {
    console.log(number)
}