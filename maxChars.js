// Given a string, return the character that is most commonly used in the string.
// Examples:
//  maxChar("abcccccccd") === "c"
//  maxChar("apple 1231111") === "1"

//  Soln 1
function maxChar(str) {
  const map = new Map();
  let maxCombination = { key: "", count: 0 };

  for (const char of str) {
    if (map.has(char)) {
      let charCount = map.get(char) + 1;
      map.set(char, charCount);

      if (charCount > maxCombination.count) {
        maxCombination.key = char;
        maxCombination.count = charCount;
      }
    } else {
      map.set(char, 1);
      if (maxCombination.count === 0) {
        maxCombination.key = char;
        maxCombination.count = 1;
      }
    }
  }

  return maxCombination.key;
}

//  Soln 2
function maxChar(str) {
  const freq = {};
  let maxChar = "";
  let maxCount = 0;

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxChar = char;
    }
  }

  return maxChar;
}

//  Test cases
test("maxChar function exists", () => {
  expect(typeof maxChar).toEqual("function");
});

test("Finds the most frequently used char", () => {
  expect(maxChar("a")).toEqual("a");
  expect(maxChar("abcdefghijklmnaaaaa")).toEqual("a");
});

test("Works with numbers in the string", () => {
  expect(maxChar("ab1c1d1e1f1g1")).toEqual("1");
});
