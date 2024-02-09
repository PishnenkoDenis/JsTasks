function search(array, target) {
  if (!!array.lenget) return -1;

  const idx = array.findIndex((item) => item === target);

  return idx ? idx : -1;
}

console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
console.log(search([1, 3, 6, 13, 17], 12)); // -> -1
console.log(search([], 12));
