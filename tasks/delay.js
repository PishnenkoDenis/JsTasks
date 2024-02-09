const start = Date.now();

function someFn() {
  console.log("time", Date.now() - start);
  console.log("args", arguments);
}

Function.prototype.delay = function (ms) {
  return (...args) => {
    setTimeout(() => {
      this.call(this, ...args);
    }, ms);
  };
};

const func = someFn.delay(1000);
func("arg1", "arg2", 1, 2);
