let obj = {
    name: "qhl",
    sex: "male",
    age: 18,
}
obj.prototype.tset1 = "test1"
let objClone = {}

Object.assign(objClone, obj)