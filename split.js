// Implement JS split function

function split(string, separator) {
  // check performance
  console.time('split');

  const output = [];
  let tempValue = '';

  for(let i = 0; i < string.length; i++) {
    // The char is the separator
    if(string[i] === separator) {
      // Push the word in temp value to output array
      output.push(tempValue); 
      // Reset temp value
      tempValue = ''; 
    }
    else {
      // The string is not the separator so, the char should be added to the temp value to form a word 
      tempValue = `${tempValue}${string[i]}`
    }
  }

  if( tempValue !== ''){
    output.push(tempValue); 
  }

  // End of performance check
  console.timeEnd('split');

  return output;
}

split('The quick brown fox jumped over the lazy dog', ' ')
split('string, separator', ',')
split(',string, separator', ',')
