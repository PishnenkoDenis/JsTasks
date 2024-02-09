//Функция, которая сравнивает аргументы по регистру и возвращает определ.значения

function sameCase(a, b) {
  if (
    (a === a.toUpperCase() && a === a.toLowerCase()) ||
    (b === b.toLowerCase() && b === b.toUpperCase())
  )
    return -1;
  else if (
    (a === a.toUpperCase() && b === b.toUpperCase()) ||
    (a === a.toLowerCase() && b === b.toLowerCase())
  )
    return 1;
  else return 0;
}

console.log(sameCase("a", "b"));
console.log(sameCase("A", "B"));
console.log(sameCase("a", "B"));
// console.log(sameCase(1, 2));
console.log(sameCase("@", "7"));
console.log(sameCase("@", "A"));
