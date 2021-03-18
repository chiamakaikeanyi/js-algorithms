/*
Return the length of the longest word in the provided sentence.
e.g findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
*/

// Soln 1:
const findLongestWordLength = (string) => string.split(' ').reduce(
  (maxLength, currentStr) => (
    maxLength = currentStr.length > maxLength ? currentStr.length : maxLength),
  0);

// Soln 2:
const findLongestWordLength = (string) => {
  const splittedStr = string.split(' ');
  let max = splittedStr[0].length;
  for (let i = 0; i < splittedStr.length; i++) {
    if (max === splittedStr[i].length) {
      continue;
    }
    if (max < splittedStr[i].length) {
      max = splittedStr[i].length;
    }
  }
  return max;
}

// Soln 3:
function findLongestWordLength(string){
 return string.split(' ').sort((a,b) => b.length -  a.length)[0].length
}

function testCase() {
    if (findLongestWordLength("The quick brown fox jumped over the lazy dog") === 6) {
      console.log("Correct result - Test PASSED");
      return;
    }

    console.log("Test FAILED", arguments[0]);
}

testCase();
