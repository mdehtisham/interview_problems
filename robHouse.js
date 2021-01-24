// robHouse will receive array of non negative integers
// each value of the array holds max price of the house 
// we can not rob house next to each other.

// solution we will follow the greedy approach.

let arr1 = [8,1,3,10,7]
let arr2 = [2,5,7,9,1,0,17,20,1]
let arr3 = [1,2,3,4,5,6,7,8,9]
let arr4 = 'hi'
let arr5 = [9]
const robHouse = (arr) => {
  if(!Array.isArray(arr) || arr.length === 0){
    return 0
  }

  let checkPrices = [arr[0]]
  for(let i=1; i<arr.length; i++){
    if(arr[i]+checkPrices[i-2] > checkPrices[i-1]) checkPrices.push(arr[i]+checkPrices[i-2])
    else if(arr[i] > checkPrices[i-1]) checkPrices.push(arr[i])
    else checkPrices.push(checkPrices[i-1])
  }

  return checkPrices[checkPrices.length-1]
}

console.log(robHouse(arr1))
console.log(robHouse(arr2))
console.log(robHouse(arr3))
console.log(robHouse(arr4))
console.log(robHouse(arr5))