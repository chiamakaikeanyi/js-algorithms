function getFirstNonRepeatingCharacter(string) {
  var splittedStr = string.split('');
  var result = '';
  var count = 0;
 
  for (let i = 0; i < splittedStr.length; i++) {
    count = 0;

    for (let j = 0; j < splittedStr.length; j++) {
      if (splittedStr[i] === splittedStr[j]) {
        count += 1;
      }
    }
 
    if (count === 1) {
      result = splittedStr[i];
      break;
    }
  }
  
  return result;
}

getFirstNonRepeatingCharacter("abacddbec");
