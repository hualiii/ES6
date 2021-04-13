let a = Symbol("getName")
let b = Symbol()
let obj = {
    [a](){
        console.log("getName")
    },
    [b](){
        console.log(undefined)
    }
}
console.log(obj[a].name)//[getName]
console.log(obj[b].name)//