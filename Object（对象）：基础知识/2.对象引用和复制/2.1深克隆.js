function deepClone(obj){
    let clone = obj instanceof Array ? [] : {};
    for (const key in obj) {
        if (typeof obj[key] == 'object'){
            clone[key] = deepClone(obj[key]);
        }else {
            clone[key] = obj[key];
        }
    }
    return clone;
}