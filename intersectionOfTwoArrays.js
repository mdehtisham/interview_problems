

// Find Intersection of two arrays
// find common elements between two arrays.

let array1 = [1,3,5,5,3,9]
let array2 = [9,3,7,8,1]

const intersection = (arr1, arr2) => {
  let firstSet = new Set()
  for(let val of arr1){
    // .add method adds the value in a set
    firstSet.add(val)
  }
  let intersectionSet = new Set()
  for(let val of arr2){
    // .has method checks for the value in a set
    firstSet.has(val)? intersectionSet.add(val):null;
  }
  // Array.from converts a set into an array
  return Array.from(intersectionSet);
}
console.log(intersection(array1,array2))


