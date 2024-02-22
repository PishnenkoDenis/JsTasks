function allAnagrams(array) {
  const sorted = array.map((str) => str.split("").sort().join());

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) return false;
  }
  return true;
}

function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join() === str2.split("").sort().join();
}

function isArrayAnagrams(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i].split("").sort().join();
    if (result[key]) result[key].push(arr[i]);
    else {
      result[key] = [];
      result[key].push(arr[i]);
    }
  }

  return Object.values(result);
}

console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false
console.log(isAnagrams("abcd", "bdac"));
console.log(isArrayAnagrams(["abcd", "dcba", "erty", "ytre"]));
