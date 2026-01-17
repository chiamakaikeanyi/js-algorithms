// > compress(["a", "b", "b", "b", "c"])
// > ["a", "b", "3", "c"]

// > compress(["a", "a", "b", "b", "c", "c", "c"])
// > ["a", "2", "b", "2", "c", "3"]

const compress = (chars: string[]) => {
  const result = [];
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      result.push(chars[i]);
      if (count > 1) {
        result.push(String(count));
      }
      count = 1;
    }
  }

  return result;
};
