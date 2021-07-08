let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, p, receiver) {
        if (p >= 0) {
            return Reflect.get(target,p,receiver);
        } else {
            return Reflect.get(target,target.length + parseInt(p),receiver)
        }
    }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
