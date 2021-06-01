const name = "syaName"

class Point {
    constructor(name) {
        this.name = name
    }

    [name]() {
        console.log(this.name)
    }
}

const point = new Point("TOM")

point[name]()