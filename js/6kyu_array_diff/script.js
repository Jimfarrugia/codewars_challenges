// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.


function array_diff(a, b) {
  return a
  .map(num => {
    if (b.indexOf(num) === -1) return num;
  })
  .filter(num => num !== undefined);
}
console.log(array_diff([1,2],[1])); // ==> [2]
console.log(array_diff([1,2,3,4,5],[1,3,5])); // ==> [2, 4]
console.log(array_diff([1,2,5,6,7,8,8],[1,7,8])); // ==> [2, 5, 6]