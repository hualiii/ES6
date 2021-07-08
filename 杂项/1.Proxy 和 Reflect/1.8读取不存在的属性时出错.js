let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, p, receiver) {
            if (p in target) {
                return Reflect.get(target, p, receiver);
            } else {
                throw new ReferenceError(`Property doesn't exist: "${p}"`);
            }
        }
    });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // ReferenceError: Property doesn't exist: "age"