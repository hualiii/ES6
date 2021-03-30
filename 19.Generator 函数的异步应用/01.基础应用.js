function* gen(x) {
    let y = yield x + 2
    return y
}

let g = gen(2)

console.log(g.next())
console.log(g.next())
console.log(g.next())