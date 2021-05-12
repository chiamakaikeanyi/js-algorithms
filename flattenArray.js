// Flatten the array[[1], [2,3], 4, [[5], 6], [[7]]] 

function flatten(array, result = []) {
  for(const value of array) {
   if(Array.isArray(value)) {
    flatten(value, result) // recursion
   } else {
    result.push(value) 
   }
  }
  return result;
}

flatten([[1], [2,3], 4, [[5], 6], [[7]]]) // [1, 2, 3, 4, 5, 6, 7]
