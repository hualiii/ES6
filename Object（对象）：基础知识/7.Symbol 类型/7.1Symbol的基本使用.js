const id = Symbol("id");
let obj = {
  [id]: 123,
  name: "jack",
  age: 18,
};
// for in不会遍历Symbol属性键
for (const objKey in obj) {
  console.log(obj[objKey]);
}
// jack
// 18


