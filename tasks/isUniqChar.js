function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (str.lastIndexOf(char) !== i) {
      return false;
    }
  }

  return true;

  //   return new Set(str).size === str.length;
}

console.log(isUnique("abcdef")); //true
console.log(isUnique("12345")); //true
console.log(isUnique("abcABC")); //true
console.log(isUnique("abcadef")); //false
