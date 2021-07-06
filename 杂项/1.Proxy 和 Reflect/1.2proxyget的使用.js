let dictionary = {
    'Hello': '你好',
    'Bye': '拜拜'
};
dictionary = new Proxy(dictionary,{
    get(target, p, receiver) {
        if (p in target){
            return target[p];
        }else {
            return "未翻译";
        }
    }
})

console.log(dictionary["Hello"]);
console.log(dictionary["HelloWorld"]);