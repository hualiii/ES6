// let [a,b,c] = [1,2,3]//a:1,b:2,c:3
//
// let [foo,...bar] = [1,2,3,4,5,6]//foo:1,bar:[2,3,4,5,6]
//
// let [x,y,z] = ["foo","bar"]//x:"foo",y:"bar",z:undefined
//
// console.log(a,b,c,foo,bar,x,y,z)

//没想到的

// let [a,[[b]],c] = [1,[[2]],3]//a:1,b:2,c:3
//
// let [x,[[y]],z] = [1,[[2,3,4]],3]//a:1,b:2,c:3
//
// let [foo,[[...bar]],baz] = [1,[[2,3,4]],3]//foo:1,bar:[2,3,4],c:baz

// 扩展

// let [a, b, c] = new Set([1, 2, 3])//a:1,b:2,c:3
// let [d = true] = []//d:true
// let [e ="foo",f = "bar"] = [1,undefined]//e:1,f:bar
//
// // 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// // 对象的解构赋值
// // 简写形式
// let {foo, bar, baz} = {foo: "foo", bar: "bar"}//foo:"foo",bar:"bar",baz:undefined
// // 非简写形式
// let {foo: foo, bar: bar, baz: baz} = {foo: "foo", bar: "bar"}//foo:"foo",bar:"bar",baz:undefined
// let {foo: a, bar: b, baz: c} = {foo: "foo", bar: "bar"}//a:"foo",b:"bar",c:undefined
// // foo是模式，a是变量，赋值的是a

// 延伸
// function* fibs() {
//     let a = 0;
//     while (true) {
//         yield a;
//         a++;
//     }
// }
//
// let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(first, second, third, fourth, fifth, sixth);//0,1,2,3,4,5

// 对象解构添加默认值
// let {foo = "foo", bar} = {foo: undefined, bar: "bar"};//foo:"foo",bar:"bar"
// let {foo: a = "foo", bar: b} = {foo: undefined, bar: "bar"};//foo:"foo",bar:"bar"

// // 对象解构嵌套
// let obj = {
//     p: {
//         a: 2,
//         b: [1, 2, 3]
//     }
// };
// let {p, p: {a, b}} = obj;
// // p:{
// //     a: 2,
// //         b: [1, 2, 3]
// // }
// // a:2
// // b:[1,2,3]

// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// };
//
// let {loc, loc: {start}, loc: {start: {line}}} = node;
//
// console.log(loc, start)
// // loc:{
// //     start: {
// //         line: 1,
// //             column: 5
// //     }
// // }
// // start:{
// //         line: 1,
// //         column: 5
// // }
//
// let obj = {};
// let arr = [];
//
// ({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true});//obj.prop:123,arr[0]:true
// // obj:{ prop: 123 }
// // arr:[ true ]

// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// };
//
// let { loc:loc,  loc: { start: { line ,column}} } = node;

// let arr = [1, 2, 3];
// let {0: foo, [arr.length - 1]: bar} = arr;//foo:1,bar:3
// console.log(foo, bar)

// 字符串解构

// let [a, b, c, d, e] = "hello";//a:1,b:2,c:3,d:4,e:5
// let {length: len} = "hello";//len:5
// console.log(len, a, b, c, d, e)

// // 函数参数的解构赋值
// function add([x, y]) {
//     return x + y;
// }
//
// add([3, 4]);
//
// // 函数解构默认赋值
// function arr({x: x = 2, y: y = 3} = {}) {
//     return [x, y];
// }
//
// const a = arr({x: 5});//[5,3]
//
// // 函数解构默认参数
// function arr2({x, y} = {x: 2, y: 3}) {
//     return [x, y];
// }
//
// const a2 = arr2();//[2,3]
// const a3 = arr2({x: 4});//[4,undefined]
//

// 解构的作用:

// // 1.交换值
// let x = 4;
// let y = 8;
// [x, y] = [y, x];//x:8,y:4
//
// console.log(x, y);

// 2.返回多个值

// // 通过数组返回
// function arr() {
//     return [1, 2, 3];
// }
//
// let [x, y, z] = arr();//x:1,y:2,z:3
//
// // 通过对象返回
// function obj() {
//     return {
//         foo: "foo",
//         bar: "bar"
//     }
// }
//
// let {foo, bar} = obj();//foo:"foo",bar:"bar"
//
//
// console.log(x, y, z, foo, bar);

// 解构json数据
let json = {
    "name": "demo",
    "age": 19,
    "data": [1, 2, 3, 4, 5]
}
let {name, age, data: number} = json;//name:"demo",age:19,number:[1,2,3,4,5]

console.log(name, age, number)