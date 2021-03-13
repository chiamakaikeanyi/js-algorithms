/*
Implement a function which does run-length encoding.
This means that, given a string, it replaces repeated characters with the number of times they are repeated and the character.

For example: `runlength_encode("aabbbcaa")` should return `"2a3b1c2a"`.
*/

// Solution 1
function encodeWord(word) {
  // Variables that data gets stored into.
  let currentLetter, lastLetter, currentCount
  
  // We end up appending everything to this string.
  let output = ''
  
  for (let i = 0; i < word.length; i++) {
    // Initial character case.
    if (typeof lastLetter === 'undefined') {
      lastLetter = word[i];
      currentCount = 1;
      
      continue;
    }
    
    /* If the current character isn't the last character, 
      then we know it's a new word and we should start over.
    */
    if (word[i] !== lastLetter) {
      // Appends the character count and the last character to the output string.
      output += currentCount + lastLetter;
      lastLetter = word[i];
      currentCount = 1;
      
      continue;
    }

    currentCount++;
  }
  
  return (output + (currentCount + lastLetter))
}

encodeWord('aaabbcdd')


// Solution 2
class RunLengthEncode {
    encode(str) {
      str=str.toLowerCase();
        if (/\s/.test(str)) {
            return str;
        }
        let counter = 0, encriptMsg = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == str[i+1]) {
                counter++;
            }   else if (str[i] !== str[i+1] && counter > 0) {
                counter++;
                encriptMsg += counter;
                encriptMsg += str[i];
                counter = 0;
            }   else {
                encriptMsg += str[i];
            }
        }
        return encriptMsg;
    }

    decode(str) {
        if (str == "") {
            return "";
        }   else if (/\s/.test(str)) {
            return str;
        }
        let decriptMsg = "";
        let encriptArr = str.match(/[a-zA-Z]|[0-9]+/g).map(el => {
            if (/[0-9]/.test(el)) {
                return parseInt(el);
            } return el;
        });
        for (let i = 0; i < encriptArr.length; i++) {
            if (typeof encriptArr[i] == "number") {
                for (let j = 0; j < encriptArr[i] - 1; j++) {
                    decriptMsg += encriptArr[i+1];
                }
            } else {decriptMsg += encriptArr[i]};
        }
        return decriptMsg;
    }
}

const RLE = new RunLength();
 RLE.encode('aaabbcdd')
 RLE.decode('3a2bc2d')
