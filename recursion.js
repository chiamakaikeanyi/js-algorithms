const factorial = (num) => {
  // base case
  if (num === 1) {
    return num;
  }
  else {
    // recursive case
    return num * factorial(num - 1);
  }
}

factorial(7);