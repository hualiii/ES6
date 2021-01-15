let set1 = new Set([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9])//接受参数为数组或者具有iterable接口的其他数据函数作为参数,进行初始化

console.log(set1)//Set { 1, 2, 3, 4, 5, 6, 7, 8, 9 }  但是成员的值都是唯一的

// Set的实例属性方法

// 1.Set.prototype.constructor：构造函数，默认就是Set函数。

// 2.Set.prototype.size：返回Set实例的成员总数(返回值int 总数)。
set1.size

// Set 基础方法

// 1.Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
set1.add(90)

// 2.Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
set1.delete(2)

// 3.Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
let a = set1.has(4) // a:true

// 4.Set.prototype.clear()：清除所有成员，没有返回值。(set实例对象还在,成员为空)
set1.clear()

// Set 遍历方法

let set2 = new Set([1, 2, 3])

// 1.Set.prototype.keys()：返回键名的遍历器
// 2.Set.prototype.values()：返回键值的遍历器
// 3.Set.prototype.entries()：返回键值对的遍历器

// 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

for (const item of set2.keys()) {
    console.log(item)
}
console.log('------------------------')
for (const item of set2.values()) {
    console.log(item)
}
console.log('------------------------')
for (const item of set2.entries()) {
    console.log(item)
}
// Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
console.log('------------------------')
for (const item of set2) {
    console.log(item)
}

// Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。
console.log('------------------------')
set2.forEach((key, value) => {
    console.log('key:' + key + ',value:' + value)
})