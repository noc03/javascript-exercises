const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((accum, curr) => accum + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, curr) => accum * curr);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	if (num == 0 || num == 1) {
    return 1;
  }
  let accum = 1;
  for (let i = 1; i <= num; i++) {
    accum *= i;
  }
  return accum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
