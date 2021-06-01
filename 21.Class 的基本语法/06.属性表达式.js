class Foo {
    bar = "bar"
    baz = "baz"

    constructor() {
    }

    say() {
        console.log(this.baz)
    }
}

const foo = new Foo()
foo.say()