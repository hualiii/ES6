let numbers = [];
numbers = new Proxy(numbers,{
    set(target, p, value, receiver) {
        if (typeof value == "number"){
            target[p] = value;
            return true;
        }else {
            return false;
        }
    }
})

numbers.push(1);
numbers.push(2);
numbers.push("3");


