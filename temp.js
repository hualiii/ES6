function fib(n) {
    if (n < 0) {
        throw new Error("数字不能小于0!");
    } else if (n < 2) {
        return n;
    }
    let result = 0;
    let first = 0;
    let second = 1;
    for (let i = 2; i < n; i++) {
        result = first + second;
        second = first;
        first = result;
    }
    return result;
}

function fib2(n) {
    if (n < 0) {
        throw new Error("数字不能小于0!");
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(19));
console.log(fib2(19));