/* 
A company has decided to create a mobile phone application to convert numbers between different bases. 
Binary numbers are converted to decimals by successively multiplying each binary digit by increaing powers of 2; 
starting at the least significant bits, as shown in the example below: 1011 (binary) = (1 * 2˘3) + (0 * 2˘2) + (1 * 2˘1) + (1 * 2˘0) = 11 (decimal)

Write an algorithm in pseudocode to input a binary number (most significant bit first) and to output its decimal equivalent. 
You will need to read in the number of binary digits first
*/

function binaryToDecimal(binary) {
 const binaryToString = String(binary); // convert the binary to string
 const binaryLength = binaryToString.length; // get the length
 let decimal = 0; // initialize deciaml to 0

 for(let i = 0; i < binaryLength; i++) { // loop throuh the string to get each bit
  const power = binaryLength - (i + 1); // calculate the current power
  const currentDecimal = Number(binaryToString[i]) * Math.pow(2,  power); // convert bit to decimal
  decimal += currentDecimal; // add the current decimal to the initial decimal
 }
 return decimal; // return the decimal 
}

binaryToDecimal(1011);
