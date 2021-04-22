## Set

> Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

属性和方法:

1. `Set.prototype.constructor`：构造函数，默认就是Set函数。
2. `Set.prototype.size`：返回Set实例的成员总数。
3. `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
4. `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
5. `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为Set的成员。
6. `Set.prototype.clear()`：清除所有成员，没有返回值。

```js
let set1 = new Set([1,1,2,3,4,5,6,6,6,5,2,3])
set1.add(12)
set1.delete(1)
set1.has(12)
set1.size
set1.clear()
```

  