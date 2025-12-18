const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (!Array.isArray(arr)) return;
  return arr.reduce((acc, num) => (acc += num), 0);
};

const multiply = function (arr) {
  if (!Array.isArray(arr)) return;
  return arr.reduce((acc, num) => (acc *= num), 1);
};

const power = function (a, b) {
  let pow = 1;
  if (b === 0) return 1;
  for (let i = 1; i <= b; i++) {
    pow *= a;
  }
  if (b < 0) {
    return 1 / pow;
  }
  return pow;
};

const factorial = function (a) {
  let factorial = 1;
  if (a === 0) return 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

