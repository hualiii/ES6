function Father(x, y) {
    this.x = x
    this.y = y
}

Father.prototype = {
    say() {
        console.log("x:" + this.x + "; y:" + this.y)
    }
}
Son.prototype = Object.create(Father.prototype)

function Son(x, y, z) {
    Father.call(this, x, y)
    this.z = z
}

const son = new Son(1, 2, 3,)