function reverseArray(arr) {
  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function reverseArrayMap(arr) {
  return [...arr].map(arr.pop, arr);
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayMap([1, 2, 3, 4, 5]));
