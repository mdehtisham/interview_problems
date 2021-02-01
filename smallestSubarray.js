/* Problem Statement #
Given an array of positive numbers and a positive number ‘S’,
find the length of the smallest contiguous subarray whose 
sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
Example 1:
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:
Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or  equal to '7' is [8]. */

function smallestSubArray(arr, givenSum){
  let smallestLength = Infinity, tempLength = 0,
      left = 0, 
      right = 0,
      windowSum = 0

      while(right < arr.length){
        windowSum += arr[right]
        tempLength++
        // check if window sum is greater that given sum 
        // if greater then reduce the window size
        while(windowSum >= givenSum){
          smallestLength > tempLength? smallestLength = tempLength--: tempLength--
          windowSum -= arr[left++]
        }
        right++
      }
      return smallestLength===Infinity? 0 : smallestLength
}
console.log(smallestSubArray([2, 1, 5, 2, 8],7)) // Output:1
console.log(smallestSubArray([2, 1, 5, 2, 3, 2],7)) // Output:2
console.log(smallestSubArray([2, 1, 5, 2, 3, 2],15)) // Output:6
console.log(smallestSubArray([2, 1, 5, 2, 3, 2],16)) // Output:0