class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    set h(value) {
        console.log(value)
    }

    get h() {
        console.log("getter x :" + (this.x + 1))
        return this.x + 1
    }
}

const point = new Point(1, 2)

console.log(point.h = 8)