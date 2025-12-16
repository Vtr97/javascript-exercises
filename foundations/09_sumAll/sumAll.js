const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  if (a !== Math.floor(a) || b !== Math.floor(b)) {
    return "ERROR";
  }
  biggerNumber = Math.max(a, b);
  lowerNumber = Math.min(a, b);
  let sum = 0;
  for (let i = lowerNumber; i <= biggerNumber; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

