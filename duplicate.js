/*
You are given a string S, in which one letter occurs twice. Every other letter occurs at most once.

Write a function:
  function(S);
  
which, given a string S, returns a single-character string: the letter that occurs twice. 

Examples:
1. Given S='aba', the function should return 'a'.
2. Given S='zz', the function should return 'z'.
3. Given S='codility', the function should return 'i'.

Assume that:
 - the length of the string S is wthin range [2..27];
 - string S consists only of lowercase letters (a-z);
 - all letters in S are distinct except one, which occurs twice.
*/

function solution(S) {
  const tempValues = [];
  let duplicate;

  for(let i = 0; i < S.length; i++) {
    if(tempValues.indexOf(S[i]) > -1) {
      duplicate = S[i];
      return duplicate;
    }
    tempValues.push(S[i]);
  }

  return duplicate;
}

solution('aba');
solution('zz');
solution('codility');
