//Функция, которая возвращает массив с уникальными элементами

const array = [1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8];

function withoutRepeatSet(arr) {
  return Array.from(new Set(arr));
}

function withoutRepeat(arr) {
  const store = [];

  for (let i = 0; i < arr.length; i++) {
    if (store.includes(arr[i])) continue;

    store.push(arr[i]);
  }

  return store;
}

function sortArray(a, b) {
  const dict = {};
  const concat = a.concat(b);

  for (let i = 0; i < concat.length; i++) {
    dict[concat[i]] = concat[i];
  }

  return Object.values(dict);
}

function onlyUnique(arr) {
  const result = [];
  const dict = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    dict[item] = dict[item] ? dict[item] + 1 : 1;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (dict[item] > 1) continue;
    result.push(item);
  }
  return result;
}

console.log(withoutRepeatSet(array));
console.log(withoutRepeat(array));
console.log(onlyUnique(array));

const a = [1, 3, 5, 6, 7];
const b = [2, 4, 6, 7];

console.log("sortArray", sortArray(a, b));

///
let boolean = true;
console.log(4);
const p = new Promise((res) => {
  console.log(3);

  setTimeout(() => res(2), 5000);

  res(1);
});

while (boolean) {
  setTimeout(() => {
    console.log(6);
    boolean = false;
  }, 1000);
}

p.then((data) => console.log(data));

//4, 3,
