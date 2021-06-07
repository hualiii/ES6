let obj1 = {
    "45":"demo45",
    "1":"demo1",
    "22":"demo22",
    "4":"demo4"
}
for (const obj1Key in obj1) {
    console.log(obj1Key);
    // 1
    // 4
    // 22
    // 45
}
let obj2 = {
    "+45":"demo45",
    "+1":"demo1",
    "+22":"demo22",
    "+4":"demo4"
}
for (const obj2Key in obj2) {
    console.log(obj2Key);
    // +45
    // +1
    // +22
    // +4
}

// 排序:数字属性按照数字大小遍历，非数字属性按照创建时间排序