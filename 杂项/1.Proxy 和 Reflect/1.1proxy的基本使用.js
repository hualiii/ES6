let dictionary = {
    'Hello': '你好',
    'Bye': '拜拜'
};

console.log(dictionary['Hello']); // 你好
console.log(dictionary['Welcome']); // undefined

dictionary = new Proxy(dictionary, {
    get(target, p, receiver) {
        if (p in target) {
            return target[p];
        }else {
            return "未翻译";
        }
    }
})

console.log(dictionary['Hello']); // 你好
console.log(dictionary['Welcome']); // undefined
