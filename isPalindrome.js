function isPalindrome(str) {
  str = str.toLowerCase();
  let characterArr = str.split(' ');

  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(' ');

  let stringArr = [];
  characterArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) {
      stringArr.push(char);
    }
  });

  if (stringArr.join('') === stringArr.reverse().join('')) {
    return true;
  }
  else {
    return false;
  }

}

isPalindrome("race car");