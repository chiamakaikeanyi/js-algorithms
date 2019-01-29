const sum = a => {
  return function (b) {
    if (b) {
      return (a + b);
    }
  }
}
sum(10)(30)