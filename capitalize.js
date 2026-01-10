// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let splittedStr = str.split(" ");
  let wordsArr = [];

  for (const word of splittedStr) {
    let firstChar = word.charAt(0).toUpperCase();
    let rest = word.slice(1); // Get everything from index 1

    wordsArr.push(firstChar.concat(rest));
  }

  return wordsArr.join(" ");
}

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// Test Cases
test("Capitalize is a function", () => {
  expect(typeof capitalize).toEqual("function");
});

test("capitalizes the first letter of every word in a sentence", () => {
  expect(capitalize("hi there, how is it going?")).toEqual(
    "Hi There, How Is It Going?"
  );
});

test("capitalizes the first letter", () => {
  expect(capitalize("i love breakfast at bill miller bbq")).toEqual(
    "I Love Breakfast At Bill Miller Bbq"
  );
});
