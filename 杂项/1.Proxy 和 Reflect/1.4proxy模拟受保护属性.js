let user = {
    name: "John",
    _password: "secret"
};

user = new Proxy(user, {
    get(target, p, receiver) {
        if (p.startsWith("_")) {
            throw new Error("get fail");
        }
        let value = target[p];
        return typeof value == "function" ? value.bind(target) : value;
    },
    set(target, p, value, receiver) {
        if (p.startsWith("_")) {
            throw new Error("set fail");
        } else {
            target[p] = value;
            return true;
        }
    },
    deleteProperty(target, p) {
        if (p.startsWith("_")) {
            throw new Error("delete fail");
        } else {
            delete target[p];
            return true;
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => {
            return !key.startsWith("_");
        })
    }
})