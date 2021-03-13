/* Write a function that checks if a string starts and ends with the same vowel i.e. {a, e, i, o, u}) */

function startsAndEndsWithSameVowel(str) {
    return Array.isArray(str.match(/^(a|e|i|o|u).*\1$/));
}

// Test
const testCase = () => {
 if(startsAndEndsWithSameVowel('adssea') === true) {
  console.info('Test PASSED');
  return;
 }
 console.info('Test FAILED');
}

testCase();
