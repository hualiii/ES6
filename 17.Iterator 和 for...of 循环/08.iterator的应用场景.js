// 解构赋值
let set = new Set(['a', 'b', 'c'])
let [x, y] = set
console.log(x, y)//a ,b

let [foo, ...bar] = set
console.log(foo, bar)//a,['b','c']