//Sort the code below by color in descending order

const shirts = [
  { color: 'red', size: 'XL' },
  { color: 'white', size: 'XXL' },
  { color: 'black', size: 'M' }
];

shirts.sort((a, b) => (a.color < b.color) ? 1 : -1);