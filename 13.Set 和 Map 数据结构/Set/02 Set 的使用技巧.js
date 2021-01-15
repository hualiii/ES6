// 1.数组去重
let arr1 = [11, 22, 11, 22, 3, 3, 2, 1, 2, 3, 4, 4, 5, 6, 6, 7, 432, 243, 5]
arr1 = [...new Set(arr1)]
console.log(arr1)

// 2.数组的map和filter方法也可以间接用于 Set

let arr2 = new Set([...arr1].map(value => value * 2))
console.log(arr2)

let arr3 = new Set([...arr1].filter(value => value % 2 == 0))
console.log(arr3)

// 3.求集合的 交 并 差
let aggregate1 = new Set([1, 2, 3, 5, 7])
let aggregate2 = new Set([1, 3, 4, 8, 9, 5])
// 交集
let intersect = new Set([...aggregate1].filter(value => aggregate2.has(value))) //Set { 1, 3, 5 }
// 并集
let union = new Set([...aggregate1, ...aggregate2]) //Set { 1, 2, 3, 5, 7, 4, 8, 9 }
// 差集
let dif = new Set([...union].filter(value => !intersect.has(value)))//{ 2, 7, 4, 8, 9 }

