let obj = {
  name: "jack",
  age: 18,
};
for (const objKey of Object.keys(obj)) {
  console.log(objKey);
}
// name
// age

for (const objVal of Object.values(obj)) {
  console.log(objVal);
}
// jack
// 18
for (const objEntries of Object.entries(obj)) {
  console.log(objEntries);
}

// [ 'name', 'jack' ]
// [ 'age', 18 ]

// Object.keys/values/entries 会忽略 symbol 属性
// 就像 for..in 循环一样，这些方法会忽略使用 Symbol(...) 作为键的属性。