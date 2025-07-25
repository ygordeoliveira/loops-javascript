function minMaxSum(arr) {
  arr.sort((a,b) => a - b);
  let minMaxSum = [];
  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
     minSum += arr[i];
     maxSum += arr[i + 1]; 
  }  
     minMaxSum.push(minSum);
     minMaxSum.push(maxSum);

    return minMaxSum;
}

console.log(minMaxSum([1, 2, 3, 4, 5])) // return [10, 14] 
console.log(minMaxSum([5, 4, 3, 2, 1])) // return [10, 14]
console.log(minMaxSum([5, 1, 4, 2, 3])) // return [10, 14]
console.log(minMaxSum([3, 4, 5, 6, 7])) // return [18, 22]
console.log(minMaxSum([7, 6, 5, 4, 3])) // return [18, 22]
console.log(minMaxSum([3, 10, 20, 2, 1])) // return [16, 35]
console.log(minMaxSum([1, 2, 3, 10, 20])) // return [16, 35]
console.log(minMaxSum([20, 10, 3, 2, 1])) // return [16, 35]