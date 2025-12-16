const repeatString = function (str, repeatNum) {
  if (repeatNum < 0) {
    return "ERROR";
  }
  let returnStr = "";
  for (let i = 0; i < repeatNum; i++) {
    returnStr = returnStr.concat(str);
  }
  return returnStr;
};

// Do not edit below this line
module.exports = repeatString;

