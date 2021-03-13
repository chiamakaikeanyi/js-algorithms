/*
 Given an array with empty strings, remove all empty strings and return a new array
 [' ', ' ', 'e', 'x', ' ', 'a', 'm', 'p', ' ', ' ', 'l', ' ', ' ', ' ', 'e', 'd'] should return [ 'e', 'x', 'a', 'm', 'p', 'l', 'e', 'd']
*/

function removeExtraSpaces(arr) {
  const result = [];

  for(i = 0; i < arr.length; i++) {
    if(arr[i] !== ' ') {
      result.push(arr[i])
    }
  }
  
  return result;
}

// functional approach
function removeExtraSpaces(arr) {
  return arr.filter(str => str !== ' ');
}

removeExtraSpaces([' ', ' ', 'e', 'x', ' ', 'a', 'm', 'p', ' ', ' ', 'l', ' ', ' ', ' ', 'e', 'd']);
