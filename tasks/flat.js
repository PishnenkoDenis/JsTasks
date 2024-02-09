function flat(arr) {
  if (arr.length === 0) return arr;

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flat(arr[i]));
    } else result.push(arr[i]);
  }

  return result;
}

console.log(flat([1, [2, 3], 4, [5, 6, 7], [8, [9, 10]]]));
