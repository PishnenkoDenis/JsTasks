//Функция, которая принимая аргументами два целых числа, возвращает массив чисел от первого аргумента до второго

function between(a, b) {
  const result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

console.log(between(2, 8));
