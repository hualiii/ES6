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

// 父类的静态方法可以被继承
ColorPoint.staticFun()

const color = new ColorPoint(1, 2, "red")
color.say()
color.toString()