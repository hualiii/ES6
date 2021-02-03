function* demo(obj) {
    for (const objItem in obj) {
        yield [objItem, obj[objItem]]
    }
}

let obj = {
    name: 'hua',
    age: 18
}
for (const [key, value] of demo(obj)) {
    console.log(key + ":" + value)
}