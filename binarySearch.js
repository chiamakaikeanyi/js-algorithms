const binarySearch = (numArray, keyToFind) => {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];

  if (middleElem === keyToFind) {
    return true;
  }
  else if (middleElem < keyToFind && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), keyToFind);
  }
  else if (middleElem > keyToFind && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), keyToFind);
  }
  else return false;
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);