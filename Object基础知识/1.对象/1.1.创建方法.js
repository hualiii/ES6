// 1.构造函数
let obj1 = new Object();
obj1.name = "tom";
obj1.sayName = function () {
  console.log(this.name);
};
// 字面量
let obj2 = {
  name: "tom",
  sayName() {
    console.log(this.name);
  },
};
