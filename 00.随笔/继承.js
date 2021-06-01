/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.k = k
    this.list = []
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.list.length < this.k) {
        this.list.push(value)
        return true
    } else {
        return false
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function (value) {
    if (value == undefined) {
        return true
    }
    for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] === value) {
            this.list.slice(i, 1)
            return true
        }
    }
    return false
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.list.length === 0) {
        return -1
    } else {
        return this.list[0]
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.list.length === 0) {
        return -1
    } else {
        return this.list[this.list.length - 1]
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    if (this.list.length === 0) {
        return true
    } else {
        return false
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    if (this.list.length === this.k) {
        return true
    } else {
        return false
    }
};

var obj = new MyCircularQueue(3)
var param_1 = obj.enQueue(2)
var param_2 = obj.deQueue()
var param_3 = obj.Front()
var param_4 = obj.Rear()
var param_5 = obj.isEmpty()
var param_6 = obj.isFull()

console.log(param_1, param_2, param_3, param_4, param_5, param_6)