let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function reversePrintList(list) {
  let result = [];
  result.push(list.value);
  while (list.next) {
    list = list.next;
    result.push(list.value);
  }
  result.reverse();
  result.forEach((item) => console.log(item));
}
reversePrintList(list);
