function flattern(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flattern(arr[i]));
    } else res.push(arr[i]);
  }

  return res;
}

function flatByReduce(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...flatByReduce(item)];
    }
    return [...acc, item];
  }, []);
}

console.log(flattern([1, [2, 3], [4, [5]]]));
console.log(flatByReduce([1, [2, 3], [4, [5]]]));
//1,7,3,5,2,4,6
