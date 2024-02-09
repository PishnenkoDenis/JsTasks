//Написать функцию сжатия по принципу RLE.
//'AAAABBCAAA' -> 'A4B2CA3'

function getRle(str) {
  let res = "";

  for (let i = 0, count = 0; i < str.length; i++) {
    if (str.at(i) === str.at(i + 1)) count++;
    else {
      res += str.at(i) + (count ? count + 1 : "");
      count = 0;
    }
  }

  return res;
}

console.log(getRle("AAAABBCAAA"));

const input = [
  { value: "abcd", order: 4, exp: false },
  { value: "qwer", order: 2, exp: true },
  { value: "xyz1", order: 1, exp: false },
  { value: "abx2", order: 3, exp: false },
];

let res = input
  .filter((item) => !item.exp)
  .sort((a, b) => a.order - b.order)
  .map((item) => {
    return item.value.split("").reverse().join("");
  })
  .join(" ");
console.log(res);
