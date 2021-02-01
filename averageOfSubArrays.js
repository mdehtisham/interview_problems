function averageOfSubArrays(arr, k){
  let windowSum = 0, windowStart = 0, averages = []

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd]
    if(windowEnd >= k -1){
      averages.push(windowSum/k)
      windowSum -= arr[windowStart++]      
    }
  }
  return averages
}
let array = [1,3,2,6,-1,4,1,8,2]
console.log(averageOfSubArrays(array, 5))
// Output: [ 2.2, 2.8, 2.4, 3.6, 2.8 ]







