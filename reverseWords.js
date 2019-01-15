function reverseWords(str) {
  let strArr = str.split(' ');
  let reversedWordArr = [];

  strArr.forEach(word => {
    let reversedWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordArr.push(reversedWord);
  })

  return reversedWordArr.join(' ')
}

reverseWords('Everybody in this country should learn to program a computer, because it teaches you how to think');