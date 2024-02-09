function sumItems(arr) {
  return arr.reduce((acc, current) => {
    return acc + current;
  }, 0);
}

function maxItem(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function maxItemReduce(arr) {
  return arr.reduce((acc, cur) => {
    return acc < cur ? cur : acc;
  });
}

function maxItemMath(arr) {
  return Math.max(...arr);
}

console.log(sumItems([1, 2, 3, 4, 5]));
console.log(maxItem([1, 2, 3, 4, 5]));
console.log(maxItemReduce([1, 2, 3, 4, 5, 100]));
console.log(maxItemMath([1, 2, 3, 4, 5, 100]));
