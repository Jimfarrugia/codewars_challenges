// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // get num's digits as array of integers
  const digits = num
    .toString()
    .split("")
    .map(digit => {
      return parseInt(digit, 10);
    });
  // highest exponent of 10 that has a value less than num
  const largestExponent = digits.length - 1;
  // array of expanded numbers
  const result = digits
    .map((digit, index) => {
      return digit * 10 ** (largestExponent - index);
    })
    .filter(num => num > 0) // remove any zeroes
    .join(" + "); // join with seperator
  return result;
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
console.log(expandedForm(30030));
console.log(expandedForm(11111));
console.log(expandedForm(11041));
console.log(expandedForm(9999941));

/*
  Cleaner solution from codewars.com:

  const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

*/
