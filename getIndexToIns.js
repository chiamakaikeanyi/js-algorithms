/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1)
*/

// Soln 1:
const getIndexToIns = (array, element) => [...array, element].sort((a, b) => a - b).indexOf(element);

// Soln 2:
function getIndexToIns(arr, num) {
  const sortedArr = arr.sort((a, b) => a - b);
  let index;
  index = sortedArr.findIndex(element => element >= num);
  return index === -1 ? sortedArr.length : index;
}