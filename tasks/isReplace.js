function getReplace(source, candidate) {
  if (source.length !== candidate.length) return false;

  const arr = source.split("");
  let count = 0;
  for (let i = 0; i < candidate.length; i++) {
    if (arr.includes(candidate[i])) count++;
  }

  return count === candidate.length;
}

function isSame(str1, str2) {
  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join() === str2.split("").sort().join();
}

console.log(isSame("dog", "dgo"));
console.log(isSame("dog", "dfo"));
console.log(isSame("doog", "ddgo"));
