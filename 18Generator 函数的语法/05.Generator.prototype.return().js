function* gen() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

let g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.return('d'))
console.log(g.next())
console.log(g.next())
