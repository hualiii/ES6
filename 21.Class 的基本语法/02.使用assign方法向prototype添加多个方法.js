class Car {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    sayPrice() {
        console.log(this.price)
    }
}

Object.assign(Car.prototype, {
    sayName() {
        console.log(this.name)
    },
    sayDemo() {
        console.log("demo")
    }
})

const car = new Car("BMW", 2000000)
car.sayPrice()
car.sayDemo()
car.sayName()
