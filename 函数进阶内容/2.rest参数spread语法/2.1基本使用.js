// rest参数,只能放在最后
function restFun(a, b, ...args) {
  console.log(args);
}
restFun(1, 2, 3, 4, 5, 6, 7);

// spread语法
function spreadFun(a, b, c) {
  console.log(a + b + c);
}
spreadFun(...[1, 2, 3]);
