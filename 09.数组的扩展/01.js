Grand.prototype.LastName = "Deng";

function Grand() {
    this.age = 19;
}

let grand = new Grand();
Father.prototype = grand;

function Father() {
    this.name = 'test1';
}

let father = new Father();
Son.prototype = father;

function Son() {
    this.s = "male";
}

let son = new Son();

console.log(son.LastName);

Object.prototype.toString()