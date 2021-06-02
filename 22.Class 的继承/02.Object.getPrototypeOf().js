class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static staticFun() {
        console.log("this is static function")
    }

    say() {
        console.log("x:" + this.x + "; y:" + this.y)
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y)
        this.color = color
    }

    toString() {
        console.log(this.color)
    }
}

// 因此，可以使用这个方法判断，一个类是否继承了另一个类。
console.log(Object.getPrototypeOf(ColorPoint) === Point)//true
