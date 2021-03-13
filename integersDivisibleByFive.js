function integersDivisibleByFive(num) {
  let integers;
  let sum = 0;

  for(let i = 1; i <= num; i++){
    integers += i;
    
    if(i % 5 === 0){
      sum += i;
    }
  }
  return sum;
}

const testCase = () => {
 if(integersDivisibleByFive(100) === 1050) {
  console.info('Test PASSED');
  return;
 }
 console.info('Test FAILED');
}

testCase();
