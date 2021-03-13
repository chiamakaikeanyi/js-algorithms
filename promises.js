const {performance} = require('perf_hooks');

function getNumber(value) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value);
    }, 2000);
  });
};

// resolves in 4 seconds
async function sum(arg) {
  const executionStart = performance.now();

  const first = await getNumber(20);
  const second = await getNumber(30);

  const executionEnd = performance.now();
  console.log(executionEnd-executionStart);
  
  const sum = first + second + arg;
  console.log(`${arg} + 20 + 30 = ${sum}`);
};

// optimized approach resolves in 2 seconds
async function sum(arg) {
  const executionStart = performance.now();

  const [first, second] = Promise.all(getNumber(20), getNumber(30));

  const executionEnd = performance.now();
  console.log(executionEnd-executionStart);  

  const sum = first + second + arg;
  console.log(`${arg} + 20 + 30 = ${sum}`);

}

sum(10);
