// ES5
function Car(name, price) {
    this.name = name
    this.price = price
}

Car.prototype.info = function () {
    return 'Car name: ' + this.name + ',Car price:' + this.price
}
let car = new Car('BMW', 99999999)
console.log(car.info())//Car name: BMW,Car price:99999999

class Person {
    constructor(name, sex, age) {
        this.name = name
        this.sex = sex
        this.age = age
    }

    sayHi() {
        console.log("Hello,my name is " + this.name)
    }

    info() {
        console.log("name:" + this.name + ",sex:" + this.sex + ",age:" + this.age)
    }
}
let p1 = new Person("tom","man",19)


class Test {
    constructor() {
    }
    get age(){
        return 1
    }
    set age(age){
        console.log("set age:" + age)
    }
}
let t1 = new Test()
console.log(t1.age =4)
console.log(t1.age)

