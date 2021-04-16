/*
  Write a function solution that, given an array A of N integers, 
  returns the largest integer K > 0 such that both values K and -K (the opposite number) exists in array A.
  If there is no such integer, the function should return 0.
  
  Examples:
    1. GIven A = [3,2,-2,5,-3], the function should return 3 (both 3 and -3 exist in array A)
    2. GIven A = [1,1,2,-1,2,1,-1], the function should return 1 (both 1 and -1 exist in array A)
    3. GIven A = [1,2,3,-4], the function should return 0 (there is no such K for which  both values K and -K exist in array A).
    
  Write an efficient algorithm for the following assumptions:
    - N is an integer withing the range [1..100000];
    - each element of array A is an integer within the range [-1,000,000,000..1,000,000,000].
*/

function solution(A) {
  if(A.length > 100000) {
    return;
  }

 const tempValues = [];
 let largest = A[0];

 for(let i = 0; i < A.length; i++) {
  if(A[i] < -1000000000 || A[i] > 1000000000) {
    return;
  }

  tempValues.push(A[i]);

  if(largest <= A[i]) {
    largest = A[i];   
  }

  if(Math.sign(A[i]) === -1 && tempValues.includes(Math.abs(A[i]))) {
      largest = Math.abs(A[i]);
    }
    else {
      largest = 0;
    }
 }

 return largest;
}

solution([3,2,-2,5,-3])
solution([1,1,2,-1,2,1,-1])
solution([1,2,3,-4])
