function sum(a, b) {
  if (b) return a + b;
  else {
    return function (b) {
      return a + b;
    };
  }
}

function sum2(a) {
  let result = a;

  console.log(result);

  return function func() {
    const args = arguments;
    result = result + args[0];
    console.log(result);
    return func;
  };
}

console.log(sum(1, 2));
console.log(sum(1)(2));

sum2(1);
sum2(1)(2)(3);
