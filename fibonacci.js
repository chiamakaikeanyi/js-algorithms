const fibonacci = (value) => {
  if (value < 1) {
    return 1;
  }
  else {
    return fibonacci(value - 1) + fibonacci(value - 2);
  }
}

fibonacci(7)