function* helloWorld() {
    yield "hello"
    yield "world"
    return 'ending'
}

const hw = helloWorld()

