//Функция, которая меняет слова в строке местами

function nameShufflerByArray(str) {
  return str.split(" ").reverse().join(" ");
}

function nameShuffler(str) {
  let first = "";
  let last = "";
  let space = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      space = true;
      continue;
    }
    if (space) last += str[i];
    else first += str[i];
  }

  return `${last} ${first}`;
}

console.log(nameShufflerByArray("Jhon McClane"));
console.log(nameShuffler("Jhon McClane"));
