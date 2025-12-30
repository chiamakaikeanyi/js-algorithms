// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Soln1:
function isPalindrome(str) {
  str = str.toLowerCase();
  let characterArr = str.split(" ");

  let validCharacters = "abcdefghijklmnopqrstuvwxyz".split(" ");

  let stringArr = [];
  characterArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) {
      stringArr.push(char);
    }
  });

  if (stringArr.join("") === stringArr.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

// Soln2:
function isPalindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// Soln3:
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

// Test
isPalindrome("race car");
isPalindrome("hannah");
