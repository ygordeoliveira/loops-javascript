function SumOfElements(arr, n){
   let sum = 0;

   for(let i = 0; i < n; i++){
      sum += arr[i];
 }
    return sum;
}

console.log(SumOfElements([1],0));  // 0 //
console.log(SumOfElements([2,3,4],1)); // 2 //
console.log(SumOfElements([2,3,4,5],3)); // 9//
console.log(SumOfElements([1,2,3],20)); // 6 ///

