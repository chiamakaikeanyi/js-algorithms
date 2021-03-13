/* Reverse a string. e.g. Given the string “Hello World”, return “dlrow olleh”. Ensure that the input is a string.
NB: Don’t use reverse method
*/

// Soln 1:
const reverseString = (str) => {
  if (str && typeof (str) !== 'string') {
    return "Argument must be a string";
  }
  const splittedStr = [...str];
  let reversedString = '';
  for (let index = splittedStr.length - 1; index >= 0; index--) {
    reversedString += splittedStr[index];
  }
  return reversedString;
}

// Soln2:
const reverseString = (str) => {
  if (typeof str !== 'string') {
    return "Please pass a string argument"
  }
  let reversed = '';
  for (let i = 0; i < [...str].length; i++) {
    reversed = [...str][i] + reversed;
  }
  return reversed.trim()
}

// Soln23:
function reverseString(str){
  var reversedString = "";
  for(let i = str.length-1; i >= 0; i--){
    reversedString = reversedString.concat(str[i]);
  }
  return reversedString;
}

// Test
const testCase = () => {
 if(reverseString('Hello World') === 'dlroW olleH') {
  console.info('Test PASSED');
  return;
 }
 console.info('Test FAILED');
}

testCase();
