/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

//Solution 1
function findOutlier(integers){
  let Even = integers.filter(v => v%2 === 0)
  let Odd = integers.filter(v => v%2 !== 0)
  console.log('even->'+Even + 'odd->' +Odd)
  return Even.length===1 ? Even[0] : Odd[0]
}

// Solution 2
function findOutlier(integers){
  // here i have converted integers array into binary array
  // v => v & 1 -> it gives 1 for odd values and 0 for even values
  let binaryArr = integers.map(v => v & 1)
  // count is used to check if we have more than one zeros
  let count = 0
  for(let i=0; i< binaryArr.length; i++){
    if(binaryArr[i] === 0) count++
  }
  // if count>1 then we must have more zeros
  if(count>1) return integers[binaryArr.indexOf(1)]
  else return integers[binaryArr.indexOf(0)]  
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) //11
console.log(findOutlier([0, 1, 2])) //1
console.log(findOutlier([1, 2, 3])) //2
console.log(findOutlier([2,6,8,10,3])) //3
console.log(findOutlier([0,0,3,0,0])) //3
console.log(findOutlier([1,1,0,1,1])) //0



