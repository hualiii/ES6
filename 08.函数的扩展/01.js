function add(...values) {
    let sum = 0;
    for (const value of values) {
        sum += value;
    }
    return sum;
}
console.log(add(1,2,3,4,5));//15