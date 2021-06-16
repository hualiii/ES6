function makeCounter() {
    counter.count = 0

    function counter() {
        return counter.count++
    }

    counter.set = function (value) {
        this.count = value
    }
    counter.decrease = function () {
        counter.count--
    }
    return counter
}

const counter = makeCounter();
console.log(counter())
console.log(counter())
counter.set(8)
console.log(counter())