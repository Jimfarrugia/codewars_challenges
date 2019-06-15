// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

const plusOne = (arr) => {
  let evaluation = +arr.join('');
  return (evaluation+1).toString().split('');
}

console.log(plusOne([2,3,9])); // => [2,4,0]
console.log(plusOne([4,3,2,5])); // => [4,3,2,6]