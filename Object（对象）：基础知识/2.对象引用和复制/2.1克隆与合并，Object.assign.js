// 克隆(浅拷贝)
function clone(obj){
    let clone  = {}
    for (const objKey in obj) {
        clone[objKey] = obj[objKey]
    }
    return clone
}
// 合并
Object.assign(clone,obj)