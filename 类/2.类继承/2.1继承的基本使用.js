class Animal {
    constructor(name) {
        this.speed = 0
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(this.name + "speed is " + this.speed)
    }

    stop() {
        this.speed = 0
        console.log(this.name + "is stop.and speed is  " + this.speed)
    }
}

let dog = new Animal("dog")
dog.run(5)
dog.stop()