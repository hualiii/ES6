let user = {
    name:"jack",
    sayName(){
        console.log("hello," + this.name)
    }
}
let tom = {
    name: "tom"
}
let say = user.sayName.bind(user)

say.call(tom)