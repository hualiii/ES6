function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));

function checkSpam(str) {
  let newStr = str.toLowerCase();
  return newStr.includes("viagra") || newStr.includes("xxx");
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
  return maxlength >= str.length ? str : str.slice(0, maxlength - 1) + "…";
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

function extractCurrencyValue(str) {
  return +str.slice(1);
}
