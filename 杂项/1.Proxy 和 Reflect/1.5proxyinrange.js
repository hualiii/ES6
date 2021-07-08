let range = {
    start: 1,
    end: 10
}
range = new Proxy(range, {
    has(target, p) {
        return p >= target.start && p <= target.end;
    }
})

console.log(1 in range);
console.log(10 in range);
console.log(11 in range);
console.log(8 in range);
