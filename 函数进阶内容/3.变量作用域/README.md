## 通过函数筛选

我们有一个内建的数组方法 arr.filter(f)。它通过函数 f 过滤元素。如果它返回 true，那么该元素会被返回到结果数组中。

制造一系列“即用型”过滤器：

```
inBetween(a, b) —— 在 a 和 b 之间或与它们相等（包括）。
inArray([...]) —— 包含在给定的数组中。
用法如下所示：

arr.filter(inBetween(3,6)) —— 只挑选范围在 3 到 6 的值。
arr.filter(inArray([1,2,3])) —— 只挑选与 [1,2,3] 中的元素匹配的元素。
```

```js
/* .. inBetween 和 inArray 的代码 */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(min, max) {
    return function (item) {
        return item >= min && item <= max;
    }
}

function inArray(arr) {
    return function (item) {
        return arr.includes(item);
    }
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
```

## 按字段排序

我们有一组要排序的对象：

```
let users = [
{ name: "John", age: 20, surname: "Johnson" },
{ name: "Pete", age: 18, surname: "Peterson" },
{ name: "Ann", age: 19, surname: "Hathaway" }
];
```

通常的做法应该是这样的：

```
// 通过 name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// 通过 age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1); 我们可以让它更加简洁吗，比如这样？

users.sort(byField('name')); users.sort(byField('age')); 这样我们就只需要写 byField(fieldName)，而不是写一个函数。

```
编写函数 byField 来实现这个需求。

```js
let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];

function byField(type) {
    if (type == "name") {
        return function (n1, n2) {
            return n1.name > n2.name ? 1 : -1;
        }
    } else if (type == "age") {
        return function (n1, n2) {
            return n1.age > n2.age ? 1 : -1;
        }
    }
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
```


## 函数大军

下列的代码创建了一个 shooters 数组。

每个函数都应该输出其编号。但好像出了点问题……

```
function makeArmy() {
let shooters = [];

let i = 0;
while (i < 10) {
let shooter = function() { // 创建一个 shooter 函数，
alert( i ); // 应该显示其编号
};
shooters.push(shooter); // 将此 shooter 函数添加到数组中
i++;
}

// ……返回 shooters 数组
return shooters;
}

let army = makeArmy();

// ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
army[0](); // 编号为 0 的 shooter 显示的是 10
army[1](); // 编号为 1 的 shooter 显示的是 10
army[2](); // 10，其他的也是这样。
```
为什么所有的 shooter 显示的都是同样的值？

修改代码以使得代码能够按照我们预期的那样工作。

```js
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let type = i;
        let shooter = function () {
            console.log(type);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}
let army = makeArmy();

army[0]();
army[1]();
army[2]();
```