// canJump function take an array of non negative integers.
// It returns true if we can jump reach to the last element of array by jumping.
// constraints: we can only jump the maximum number of times i.e the each value of element.
// [3,1,2,1,4] : here we can reach to 4 by jumping 3 index and then 1 index.
// [3,2,1,0,4] : here we can not reach to 4 beacause we will be stuck at 0.

let arr1 = [3,1,2,1,4]
let arr2 = [3,2,1,0,4]
let arr3 = [2,0,0]
let arr4 = [0,0,4,0,5]

const canJump = (arr) => {
  // set the valid index equal to the arr.length
  let validIndex = arr.length-1;

  // now we will traverse from the reverse 
  for(let i = arr.length-2; i>=0; i--){
    if(arr[i] + i >= validIndex) validIndex =  i;

  }
  return validIndex === 0? true: false;
}

console.log(canJump(arr1))
console.log(canJump(arr2))
console.log(canJump(arr3))
console.log(canJump(arr4))