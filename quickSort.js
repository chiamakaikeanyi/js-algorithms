// Using quick sort (most efficient) technique, sort the array [10, 5, 12, 4, 2, 26, 6, 0, 10]

// Pseudocode 
// [10, 5, 12, 4, 2, 26, 6, 0, 10]
// Pivot element (the first) = 10
// left = [5,4,2,6,0]
// right = [12,26,10]

function quickSort(array) {
  if(array.length < 2) {
    return array;
  }
  
  const first = array[0];
  const left = [];
  const right = [];
  
  for(let i = 1; i < array.length; i++) {
    if(array[i] < first) {
     left.push(array[i]); 
    } else {
      right.push(array[i]); 
    }
  }
  
  return [...quickSort(left), first, ...quickSort(right)]; // recursion
}

quickSort([10, 5, 12, 4, 2, 26, 6, 0, 10]); // [0, 2, 4, 5, 6, 10, 10, 12, 26]
