class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    logX() {
        console.log(this.x)
    }

    logY() {
        console.log(this.y)
    }
}

const point1 = new Point(2, 3)

console.log(point1.hasOwnProperty('x'))

console.log(point1.hasOwnProperty('y'))
console.log(point1.hasOwnProperty('logX'))
console.log(point1.hasOwnProperty('logY'))

// 上面代码中，x和y都是实例对象point自身的属性（因为定义在this对象上），所以hasOwnProperty()方法返回true，而toString()是原型对象的属性（因为定义在Point类上），所以hasOwnProperty()方法返回false。这些都与 ES5 的行为保持一致。

const point2 = new Point(1, 2)

// 实例共享原型
console.log(point1.__proto__ === point2.__proto__)