function defer(fn, ms) {
    return new Proxy(fn, {
        apply(target, thisArg, argArray) {
            setTimeout(() => {
                target.apply(thisArg, argArray);
            }, ms)
        }
    })
}

function log(name) {
    console.log(name);
}

let log2 = defer(log,2000);
log2("hello world")