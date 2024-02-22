function add(a, b) {
  if (typeof a === "undefined") return add;
  if (typeof b === "undefined") {
    return function sum(c) {
      if (typeof c === "undefined") {
        return sum;
      }
      return a + c;
    };
  }
  return a + b;
}

function careerSum(a) {
  console.log(a);
  return function (b) {
    return careerSum(a + b);
  };
}

function careerCall(a) {
  let sum = a;

  return function fun(b) {
    if (b) {
      sum += b;
      return fun;
    } else {
      return sum;
    }
  };
}

console.log(add(20, 22)); // -> 42
console.log(add(20)(22)); // -> 42
console.log(add(20)()(22)); // -> 42
console.log(add(20)()()()(22)); // -> 42
console.log(add(20)()()()()()()()()()()()(22)); // -> 42
console.log(add()(20)(22)); // -> 42
console.log(careerCall(1)(2)()); //3
console.log(careerCall(1)(2)(3)()); //
