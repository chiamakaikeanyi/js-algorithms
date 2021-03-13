/*
 Given a string, check if it contains matching pair
*/

function isValidBracketPair(str) {
  if (str.length <= 1)
    return false

  let matchingOpeningBracket, character
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    character = str[i]

    if (closingBrackets.indexOf(character) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(character)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(character)
    }
  }

  return (stack.length === 0)
};

console.log(isValidBracketPair("([)]")) // false
console.log(isValidBracketPair("()")) // true
console.log(isValidBracketPair("{}[]()")) // true
console.log(isValidBracketPair("{[}]")) // false
console.log(isValidBracketPair("{[}]")) // false
console.log(isValidBracketPair("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")) // true
console.log(isValidBracketPair("{}[]()")) // true
