let animal = {
    sayName() {
        console.log(this.name)
    }
}
Rabbit.prototype = animal

function Rabbit(name) {
    this.name = name
}

let rabbit = new Rabbit('TOM')
let rabbit1 = new rabbit.constructor("JACK")
console.log(rabbit)