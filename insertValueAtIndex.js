// Given an array, a value, and an index, insert the value at the given index 

// pseudocode
// i = 5; [12,4,58,10,3,3]
// i = 4; [12,4,58,10,10,3]
// i = 3; [12,4,58,58,10,3]
// i = 2; 

// array[index] = value;
// [12, 4, 6, 58, 10, 3]

function insert(array, value, index) {
  if(index > array.length || index < 0) {
    return null;
  }
  
  for(let i = array.length; i > index; i--){
    array[i] = array[i - 1];
  }
  
  array[index] = value;
  
  return array;
}


insert([12,4,58,10,3], 6, 2); // [12, 4, 6, 58, 10, 3] 

