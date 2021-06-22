// 受保护的属性通常以下划线 _ 作为前缀。
class CoffeeMachine {
    _waterAmount = 0;

    constructor(power) {
        this._power = power
    }

    set waterAmount(value) {
        if (value < 0) {
            throw new Error("小于0")
        } else {
            this._waterAmount = value
        }
    }

    get waterAmount() {
        return this._waterAmount
    }
}

let coffeeMachine = new CoffeeMachine(100)
console.log(coffeeMachine.waterAmount = 10)