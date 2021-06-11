function camelize(str) {
  const strArr = str.split("-");
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join("");
}
console.log(camelize("background-color") == "backgroundColor");
console.log(camelize("list-style-image") == "listStyleImage");
console.log(camelize("-webkit-transition") == "WebkitTransition");

// 优化

function camelize1(str) {
  return str
    .split("-")
    .map((item, index) => {
      return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
    })
    .join("");
}

console.log(camelize1("background-color") == "backgroundColor");
console.log(camelize1("list-style-image") == "listStyleImage");
console.log(camelize1("-webkit-transition") == "WebkitTransition");
