/* Maximum Sum Subarray of Size K
Problem Statement #
Given an array of positive numbers and a 
positive number ‘k’, find the maximum sum 
of any contiguous subarray of size ‘k’. */

function maxSumSubArray(arr, sizeK){
  let maxSum=0,
      windowSum = 0,
      left=0,
      right=0
  while(right < arr.length){
    windowSum += arr[right]
    if(right === left+sizeK-1){
      maxSum < windowSum? maxSum = windowSum: null
      windowSum -= arr[left]
      // windowSum += arr[right]
      left++
    }
    right++
  }
  return maxSum
}
console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 3))
//Output: 9





