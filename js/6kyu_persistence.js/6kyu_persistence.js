// Write a function, persistence, 
// that takes in a positive parameter num 
// and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num 
// until you reach a single digit.

// persistence(39) === 3  // because 3*9 = 27, 2*7 = 14, 1*4=4
                          // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                          // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0   // because 4 is already a one-digit number

// function persistence(num) {
//   // Input: array: an array of integers
//   // Output: Integer: Accumulation of multiplying array values iteratively.
//   function reducer(array) {
//     return array.reduce((accumulator, currentValue) => {
//       return accumulator * currentValue;
//     });
//   }

//   // Input: x: a positive integer
//   // Output: an array of the digits in x as integers
//   function getDigits(x) {
//     return x.toString().split('').map(n =>{
//       return parseInt(n, 10)
//     });
//   }

//   // Input: x: a positive integer
//   // Output: the number of digits in the integer
//   function numLength(x) {
//     return x.toString().length;
//   }

//   function recursiveReducer(num, count) {
//     // Set count to 0 by default
//     if (typeof(count) === 'undefined') { count = 0; };
    
//     // If/when num is now single-digit
//     if (numLength(num) <= 1) {
//       return console.log(count);
//     }

//     let newNum = reducer(getDigits(num));
//     return recursiveReducer(newNum, count+1);
//   }

//   recursiveReducer(num);
// }


function persistence(num) {

  function reducer(array) {
    return array.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    });
  }

  function getDigits(num) {
    return num.toString().split('').map(n =>{
      return parseInt(n, 10)
    });
  }

  function recursiveReducer(num, count) {
    if (typeof(count) === 'undefined') { count = 0; };

    if (num.toString().length <= 1) { return count; }

    let newNum = reducer(getDigits(num));

    return recursiveReducer(newNum, count+1);
  }

  return recursiveReducer(num);
}

console.log(persistence(11));
console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
console.log(persistence(811));
