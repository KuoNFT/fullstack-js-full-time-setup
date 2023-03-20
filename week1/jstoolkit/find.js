function findPositiveValue(values) { 
  // Insert your code here
  const posValue = values.filter(num => num > 0);
  return posValue

  }
;
 


function findNegativeValue(values) {
  // Insert your code here
  const negValue = values.filter(num => num < 0);
  return negValue

}

console.log(findPositiveValue([-54, -82, 2, -10, -9]));
// Expected: 2

console.log(findNegativeValue([54, 82, 2, -10, 9]));
// Expected: -10


// Do not edit/remove code under this line
module.exports = { findPositiveValue, findNegativeValue };
