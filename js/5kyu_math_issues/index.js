Math.round = function(number) {
  const decimal = number.toString().slice(Math.floor(number).toString().length + 1);
  return (decimal[0] >= 5) ? Math.ceil(number) : Math.floor(number);
};

Math.ceil = function(number) {
  return (number % 1 === 0) ? number : Math.floor(number) + 1;
};

Math.floor = function(number) {
  let numString = number.toString();
  let digits = [];
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] === '.') break;
    digits.push(numString[i]);
  }
  return +digits.join('');
};

console.log(Math.ceil(17.5));
console.log(Math.ceil(321.123));
console.log(Math.ceil(123.49));
console.log(Math.ceil(17));
console.log(Math.ceil(321));
console.log(Math.ceil(0));