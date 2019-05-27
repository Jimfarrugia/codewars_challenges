// function sumMix(x){
//   numbers = x.map(e => {return +e;})
//   total = numbers.reduce((accumulation, currentValue) => {
//     return accumulation + currentValue;
//   });
//   return total;
// }
// console.log(sumMix([4,"1",3]));

function sumMix(x){
  numbers = x.map(e => +e)
  total = numbers.reduce((accumulation, currentValue) => {
    return accumulation + currentValue;
  });
  return total;
}
console.log(sumMix([4,"1",3]));