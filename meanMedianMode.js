const getMean = (arr) => {
  let sum = 0;

  arr.forEach(num => {
    sum += num;
  });

  let mean = sum / arr.length;
  return mean;
}

const getMedian = (arr) => {
  arr.sort((a, b) => a - b);
  let median;

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  }
  else {
    let middleEmemntOne = arr[(arr.length / 2)];
    let middleEmemntTwo = arr[(arr.length / 2) - 1];

    median = (middleEmemntOne + middleEmemntTwo) / 2;
  }
  return median;
}

const getMode = (arr) => {

}

const meanMedianMode = (arr) = (
  {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
)

meanMedianMode([1, 2, 3, 4, 5, 6, 7]);