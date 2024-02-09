//Функция принимает массив и должна вернуть масив с элементами массива, разбитыми каскадно на подмасcивы

function cascadeSubset(arr, n) {
  const result = [];

  for (let i = 0; i <= arr.length - n; i++) {
    let chunk = [];
    for (let j = i; j < i + n; j++) {
      chunk.push(arr[j]);
    }

    result.push(chunk);
  }

  return result;
}

console.log(cascadeSubset([3, 5, 8, 10], 2));
