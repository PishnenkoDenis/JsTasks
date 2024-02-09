// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
  return str
    .split(" ")
    .map((word) => `${word.slice(1)}${word[0]}ay`)
    .join(" ");
}

const regex = new RegExp(/(\w)(\w*)(\s|$)/g);

function pigItByRegExp(str) {
  return str.replace(regex, "$2$1ay$3");
}
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigItByRegExp("Pig latin is cool")); // igPay atinlay siay oolcay

function replace(str, index, char) {
  return str.replace(str.at(index), char);
}

console.log(replace("string", 3, "$"));
console.log(replace("string", 2, "%"));

function getIndex(arr, search) {
  if (typeof search === "string") {
    return arr.indexOf(search);
  } else return arr.findIndex((item) => item.a === search.a);
}

function deleteItem(arr, item) {
  return arr.splice(arr.indexOf(item), 1);
}

console.log(getIndex(["222", "555"], "555"));
console.log(getIndex(["222", "555", { a: 1 }], { a: 1 }));
console.log(deleteItem(["222", "555"], "555"));
