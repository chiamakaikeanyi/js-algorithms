/*
 Given a string, check if it contains matching pair
*/

function isValidBracketPair(s) {
  // It isn't balanced so, no need to continue
   if (s.length <= 1) {
    return false
  }
  
  const openingBrackets = ['[', '{', '('];
  const closingBrackets = [']', '}', ')'];

  let matchingOpeningBracket;
  const stack = [];

  let result;

  for (let i = 0; i < s.length; i++) {
    // String is contained in closing brackets array
    if (closingBrackets.indexOf(s[i]) > -1) {
      // Get the opening equivalent
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(s[i])];
      // Check if the last added bracket equals to the matchingOpeningBracket   
      if (stack.pop() != matchingOpeningBracket) {
        result = 'NO';
        return result;
      }
    } else {
      // Should be an opening bracket, so push to stack
      stack.push(s[i]);
    }
  }
  // If stack is empty, all bracket pairs have been found and removed from the stack
  result = stack.length === 0 ? 'YES' : 'NO';;
  return result;;
};

isValidBracketPair('{[()]}'); // YES
isValidBracketPair('{[(])}'); // NO
isValidBracketPair('{{[[(())]]}}'); // YES
isValidBracketPair('{{([])}}'); // YES
isValidBracketPair('{{)[](}}'); // NO
isValidBracketPair('{(([])[])[]}'); // YES
isValidBracketPair('{(([])[])[]]}'); // NO
isValidBracketPair('{(([])[])[]}[]'); // YES
isValidBracketPair("([)]")) // NO
isValidBracketPair("()")) // YES
isValidBracketPair("{}[]()")) // YES
isValidBracketPair("{[}]")) // NO
isValidBracketPair("{[}]") // NO
isValidBracketPair("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]") // true
isValidBracketPair("{}[]()") // YES
