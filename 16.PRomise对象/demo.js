let flag = true
const promise = new Promise(((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        if (flag) {
            resolve('hello promise')
        } else {
            reject('go back promise ')
        }
    })
}))
console.log(3)
promise.then((value => {
    console.log(4)
    console.log(value)
    let json = {
        name: 'qhl',
        age: 18
    }
    return json
})).then((json) => {
    console.log(json)
})