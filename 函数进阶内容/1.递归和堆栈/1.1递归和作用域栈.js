function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

function pow2(x, n) {
  return n === 0 ? 1 : x * pow2(x, n - 1);
}