const convertToCelsius = function (temp) {
  let celsiusTemp = (temp - 32) * (5 / 9);
  if (celsiusTemp === Math.round(celsiusTemp)) return celsiusTemp;
  return +celsiusTemp.toFixed(1);
};

const convertToFahrenheit = function (temp) {
  let fahrenheitTemp = temp * (9 / 5) + 32;
  if (fahrenheitTemp === Math.round(fahrenheitTemp)) return fahrenheitTemp;
  return +fahrenheitTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

