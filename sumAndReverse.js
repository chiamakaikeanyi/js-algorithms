function sumAndReverse(arr) {
  let sum = 0;
  const reverseArr = [];

  for(let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i];
    reverseArr.push(arr[i]);
  }
  
  return `Sum: ${sum}, Reverse order: ${reverseArr.join(' ')}`
}

sumAndReverse([1,2,3,4,5]);
