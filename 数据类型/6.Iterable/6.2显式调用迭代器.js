const str = "hello world";
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) {
    break;
  } else {
    console.log(result.value);
  }
}
