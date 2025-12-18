const fibonacci = function (input) {
  let numInput = +input;
  if (numInput < 0) return "OOPS";
  if (numInput === 0) return 0;
  if (numInput === 1) return 1;
  if (numInput === 2) return 1;
  return fibonacci(numInput - 2) + fibonacci(numInput - 1);
};

// Do not edit below this line
module.exports = fibonacci;

