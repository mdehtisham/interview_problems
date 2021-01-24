function findMissingNumbers(nums){
  // find the maximum number first
  // max will be our count
  let maxCount = Math.max(...nums),
      missingNums = []
  for(let i=1; i<=maxCount; i++){
    if(!nums.includes(i))  missingNums.push(i)
  }
  return missingNums
}

console.log(findMissingNumbers([1,2,2,2,5,7,10]))
// Output: [3,4,6,8,9]




// const findMissingNumbers = function(nums){
//   for(let i=0; i<nums.length;i++){
//     let q = Math.abs(nums[i]) - 1
//     nums[q] = Math.abs(nums[q]) * -1
//   }

//   let results = []

//   for(let i=0; i<nums.length; i++){
//     if(nums[i] > 0){
//       results.push(i+1)
//     }
//   }
//   return results;
// }

// function findMissingNumbers(nums){
//   // find the maximum number first
//   // max will be our count
//   let maxCount = Math.max(...nums),
//       missingNums = []
//   for(let i=1; i<=maxCount; i++){
//     if(nums.indexOf(i) === -1)  missingNums.push(i)
//   }
//   return missingNums
// }