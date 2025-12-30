/* Reverse a string. e.g. Given the string “Hello World”, return “dlrow olleh”. Ensure that the input is a string.
NB: Don’t use reverse method
*/

// Soln 1:
const reverseString = (str) => {
  if (str && typeof str !== "string") {
    return "Argument must be a string";
  }
  const splittedStr = [...str];
  let reversedString = "";
  for (let index = splittedStr.length - 1; index >= 0; index--) {
    reversedString += splittedStr[index];
  }
  return reversedString;
};

// Soln2:
const reverseString = (str) => {
  if (typeof str !== "string") {
    return "Please pass a string argument";
  }
  let reversed = "";
  for (let i = 0; i < [...str].length; i++) {
    reversed = [...str][i] + reversed;
  }
  return reversed.trim();
};

// Soln3:
function reverseString(str) {
  var reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(str[i]);
  }
  return reversedString;
}

// Soln4:
function reverseString(str) {
  if (typeof str !== "string") {
    return "Please pass a string argument";
  }
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

// Soln5:
function reverseString(str) {
  if (typeof str !== "string") {
    return "Please pass a string argument";
  }

  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Test
const testCase = () => {
  if (reverseString("Hello World") === "dlroW olleH") {
    console.info("Test PASSED");
    return;
  }
  console.info("Test FAILED");
};

testCase();

//  TESTS
test("Reverse reverses a string", () => {
  expect(reverseString("abcd")).toEqual("dcba");
});

test("Reverse reverses a string", () => {
  expect(reverseString("  abcd")).toEqual("dcba  ");
});
