function* helloWorld() {
    console.log(1)
    yield 'hello'
    console.log(2)
    yield 'world'
    console.log(3)
    return 'ending'
}

const hw = helloWorld()

console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())