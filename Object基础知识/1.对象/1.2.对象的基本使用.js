let obj = {
  name: "tom",
  sayName() {
    console.log(this.name);
  },
};
delete obj.name; //返回 true or false
obj["tom age"] = 18; //添加或者修改属性值
obj.name; //获取属性值
obj["tom age"]; //获取属性值