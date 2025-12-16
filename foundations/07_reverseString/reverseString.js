const reverseString = function (str) {
  if (typeof str != "string") {
    return "Input is not a string";
  }
  let str_array = str.split("");
  return str_array.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

