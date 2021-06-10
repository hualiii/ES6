// 数组的队列方法
let arr1 = [1, 2, 3, 4];
arr1.push(5);
console.log(arr1);
arr1.shift();
console.log(arr1);

// 数组的栈方法
let arr2 = ["a", "b", "c", "d"];
arr2.push("e");
console.log(arr2);
arr2.pop();
console.log(arr2);

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let mid = Math.floor(1 + styles.length / 2);
styles[mid - 1] = "Classics";
const first = styles.shift();
console.log(first);
styles.unshift("Rap", "Reggae");
console.log(styles);

function sumInput() {
  let arr = [],
    sum = 0;
  while (true) {
    let value = prompt("A number please?", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    arr.push(+value);
  }
  for (const arrElement of arr) {
    sum += arrElement;
  }
  return sum;
}

function getMaxSubSum(arr) {
  let max = 0;
  let partMax = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? (partMax = 0) : (partMax += arr[i]);
    max = Math.max(partMax, max);
  }
  return max;
}
