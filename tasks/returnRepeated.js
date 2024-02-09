function returnRepeated(arr) {
  const result = [];
  const dict = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    dict[item] = dict[item] ? dict[item] + 1 : 1;
  }

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (dict[item] === 1) continue;
    result.push(item);
  }
  return Array.from(new Set(result));
}

function getDoublicates(arr) {
  const dict = {};

  return arr.reduce((acc, item) => {
    if (dict[item] > 1) {
      acc.push(item);
      return acc;
    } else {
      dict[item] = dict[item] ? dict[item] + 1 : 1;
      return acc;
    }
  }, []);
}

console.log(returnRepeated([1, 2, 3, 4, 2, 3, 2]));
console.log(getDoublicates([1, 2, 3, 4, 2, 3, 2]));
