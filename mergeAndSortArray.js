//  Given two array of integers. Write a function to merge our arrays into one sorted array.
const arr1 = [1, 3, 2];
const arr2 = [7, 4, 5];

// O(n)2 
function bubbleSort(arr) { // O(n)2 
  console.time('bubbleSort');

  for(let i = 0; i < arr.length; i++ ) {
    for(let j = 1; j < arr.length; j++ ) {
      if(arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.timeEnd('bubbleSort');
  
  return arr;
}

// O(n)
function efficientBubbleSort(arr) { // O(n)
  console.time('efficientBubbleSort');

  let swapped;

  do{
     swapped = false;

      for(let i = 0; i < arr.length; i++ ) {
        for(let j = 0; j < arr.length; j++ ) {
          if(arr[j] > arr[j + 1]) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j+1]];
            swapped = true;
          }
        }
      }
  }
  while(swapped);
  
  console.timeEnd('efficientBubbleSort');

  return arr;
}

// O(n)
function sortArray(arr) {
  console.time('sortArray');
  let swapped;
  for (let i = 0; i < arr.length; i++) {
      swapped = false;
      for (let j = 1; j < arr.length; j++) {
        if (arr[j + 1] < arr[j]) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            swapped = true;
        }
      }
      if (!swapped) {
        break;
      }
  }
  console.timeEnd('sortArray');
  return arr;
}

sortArray([...arr1, ...arr2]);

