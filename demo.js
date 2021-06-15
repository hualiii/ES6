function topSalary(salaries) {
  let result = [null, 0];
  for (const entries of Object.entries(salaries)) {
    if (entries[1] >= result[1]) {
      result = entries;
    }
  }
  return result[0];
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));