const a = [1, 3, 5, 6, 7];
const b = [2, 4, 6, 7];

function concatArrays(a, b) {
  const result = Array.from(new Set(a.concat(b)));

  return result.sort((a, b) => a - b);
}

function concatArraysOpt(a, b) {
  const arr = a.concat(b);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) continue;

    result.push(arr[i]);
  }

  return result.sort((a, b) => a - b);
}

console.log(concatArrays(a, b));
console.log(concatArraysOpt(a, b));
