function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  let magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;

      if (magazineObj[word] < 0) {
        noteIsPossible = false;
      }
    }
    else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

harmlessRansomNote('this is', 'this is all the magazine text in the magazine');