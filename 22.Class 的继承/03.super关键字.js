// super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    say() {
        console.log("x:" + this.x + "; y:" + this.y)
    }
}


class Son extends Father {
    constructor(x, y, foo) {
        super(x, y)//super当函数使用
        this.foo = foo
    }

    sonFun() {
        super.say()
    }
}

const son = new Son(1, 2, 3)

son.sonFun()