function ascendingSort(values) {
  const newValue = values.sort(function(a,b)
  {
    return a - b;
  });
  return newValue
  // Insert your code here
}


function descendingSort(values) {
  const newValue = values.sort(function(a,b)
  {
    return b - a;
  });
  return newValue}

console.log(ascendingSort([5, 2, 1, 3, 4]));
// Expected: [1, 2, 3, 4, 5]

console.log(descendingSort([5, 2, 1, 3, 4]));
// Expected: [5, 4, 3, 2, 1]


// Do not edit/remove code under this line
module.exports = { ascendingSort, descendingSort };
