const twoSum = (numArray, sum) => {
  const pairs = [];
  const hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currentNum = numArray[i];
    let counterpart = sum - currentNum;

    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currentNum, counterpart]);
    }
    hashtable.push(currentNum);
  }
  return pairs;
}

twoSum([1, 2, 3, 4, 5, 6, 7], 7);



function findPairsThatAddUpToSum(array, sum) {
  const result = [];
  const map = {};
  
  for(const value of array) {
    if(value in map){
      result.push([value, map[value]]);
    } else {
      const counterpart = sum - value;
      map[counterpart] = value;
    }
  }
  
  return result;
}

findPairsThatAddUpToSum([1, 2, 3, 4, 5, 6, 7], 7);
