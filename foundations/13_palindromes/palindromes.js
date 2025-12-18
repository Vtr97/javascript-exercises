const palindromes = function (string) {
  if (typeof string != "string") return;
  const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseString = cleanedString.split("").reverse().join("");
  return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;

