let user = {
    _name: 'jack',
    age: 18,
    get name() {
        return this._name
    }
}

user = new Proxy(user, {
    get(target, p, receiver) {
        return Reflect.get(target, p, receiver); // (*)
    }
})

let admin = {
    __proto__: user,
    _name: "admin"
}
console.log(admin.name);