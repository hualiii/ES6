// 正则定义
// 正则字面表达式
let reg1 = /abc/i
let reg2 = new RegExp('abc','i')
// 方法
// RegExp.test(str)
// RegExp.exex(str)
let str = 'aasdsagABC'
console.log(reg1.test(str))
console.log(reg2.exec(str))