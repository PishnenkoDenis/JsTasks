var x = 10;

function someFn() {
  console.log(x);
}

someFn();

(function () {
  var x = 20;
  someFn();
})();

(function (innerFunc) {
  var x = 30;
  innerFunc();
})(someFn);

//10, 10, 10

console.log("5 3 2 11".split(" ").sort()); //[ '11', '2', '3', '5' ]
console.log("5 3 2 11".split(" ").sort((a, b) => a - b)); //[ '2', '3', '5', '11' ]
