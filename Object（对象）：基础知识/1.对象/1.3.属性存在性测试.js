// 使用 in 操作符
let obj = {
    name: "tom",
    sayName() {
        console.log(this.name);
    },
};
console.log( "name" in obj);