let array1 = [1,2,3,4,5,5,6]
let array2 = [2,4,6,6,9,0,8]

// we will use Set data structure to solve the problem
const union = (arr1, arr2) => {
  let firstSet = new Set(arr1);

  for( let val of arr2){
    firstSet.add(val)
  }
  let union = Array.from(firstSet)
  return union
}

console.log(union(array1, array2))
// Output: [1, 2, 3, 4, 5, 6, 9, 0, 8]


