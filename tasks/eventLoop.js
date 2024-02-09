console.log("apple");

setTimeout(() => console.log("pear"), 0);

Promise.resolve("melon").then((res) => console.log(res));

new Promise((resolve, reject) => {
  console.log("orange");
  resolve("pineapple");
}).then((res) => console.log(res));

console.log("lime");

//apple, orange, lime, melon, pineapple, pear

setTimeout(() => {
  console.log("timeOut");
});

console.log(1);

new Promise((res) => {
  console.log("Promise");
  setTimeout(() => {
    console.log("777");
    res();
  }, 0);
})
  .then(() => {
    console.log("then1");
  })
  .then(() => {
    console.log("then2");
  });

console.log(4);

setTimeout(() => {
  console.log("timeOut2");
});
//1,Promise,4,timeOut,777,then1,then2,timeOut2

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
