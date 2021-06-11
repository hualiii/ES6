function aclean(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i].toLowerCase().split("").sort().join("");
    map.set(item, arr[i]);
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
