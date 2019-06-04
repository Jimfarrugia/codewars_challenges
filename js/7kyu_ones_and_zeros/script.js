const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
}

console.log(binaryArrayToNumber([0,0,0,1]));
console.log(binaryArrayToNumber([0,0,1,0]));
console.log(binaryArrayToNumber([0,1,0,1]));
console.log(binaryArrayToNumber([1,0,0,1]));
console.log(binaryArrayToNumber([1,0,0,1,0,1]));