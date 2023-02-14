module.exports = function toReadable (number) {
  let arr = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
  ];
  let arr2 = [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
  ];
  let lastNum = number % 10;
  if (number < 20) {
      return arr[number];
  }
  if (number < 100) {
      return (
          arr2[Math.trunc(number / 10) - 2] +
          (lastNum ? " " + arr[lastNum] : "")
      );
  }
  return (arr[Math.trunc(number / 100)] + " hundred" + (number % 100 == 0 ? "" : " " + toReadable(number % 100)));
}