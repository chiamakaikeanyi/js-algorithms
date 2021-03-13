// Given a number and parts, create an array that sum up to the number and have same length with parts
// Given [20, 3], the result should be [7, 7, 6]

function createArrayFromInteger(num, parts) {
  const result = Math.floor(num / parts);
  const remainder = num % parts;
  const resultArr = new Array(parts).fill(result);

  if(remainder) {
    for(let i = 0; i < remainder; i++) {
      resultArr[i]++;
    }
  }

  return resultArr;
}

createArrayFromInteger(20, 3);
