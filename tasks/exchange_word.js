//Функция, которая принимает строку и возвращает строку с количеством одинаковых слов, равным кол-ву слов в исходной строке

function exchangeWord(str) {
  return !str ? str : new Array(str.split(" ").length).fill("string").join(" ");
}

function exchangeWordByMap(str) {
  return !str
    ? str
    : str
        .split(" ")
        .map((el) => "string")
        .join(" ");
}

console.log(exchangeWord("Some test sentence"));
console.log(exchangeWordByMap("Some test sentence"));
console.log(exchangeWord(""));
