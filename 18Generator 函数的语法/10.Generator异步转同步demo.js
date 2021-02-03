function* gen() {
    console.log(1)
    yield fetch('http://192.168.10.114:8001/api/image/id/v1?id=7&width=124&height=124').then((res)=>{
        console.log(2)
    })
    console.log(3)
}

let g = gen()
g.next()

g.next()