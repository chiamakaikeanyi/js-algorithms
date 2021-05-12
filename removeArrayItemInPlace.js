function removeArrayItemInPlace(array, index) {
  for(let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  
  array.length -= 1;
  
  return array;
}

removeArrayItemInPlace([2, 14, 5, 20, 3], 2)
