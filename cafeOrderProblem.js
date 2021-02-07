/* Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 3, 5, 4, 6]
would be first-come, first-served.

*/

let takeOut = [1,3,5],
    dineIn = [2,4,6],
    served1 = [1,2,4,6,5,3],
    served2 = [1,2,3,5,4,6]
    served3 = [1,2,3,4,5,6]
    served4 = [1,5,3,2,4,6]

function fcfs(takeOut, dineIn, served){
  let takeOutPointer = 0,
      dineInPointer = 0

  for(let i=0; i<served.length; i++){
    console.log(takeOutPointer + '<-T D-> ' + dineInPointer)
    if(served[i] === takeOut[takeOutPointer]){
      takeOutPointer++
    } else if(served[i] === dineIn[dineInPointer]){
      dineInPointer++
    } else return false
  }
  return true
}
console.log(fcfs(takeOut, dineIn, served1)) // false
console.log(fcfs(takeOut, dineIn, served2)) // true
console.log(fcfs(takeOut, dineIn, served3)) // true
console.log(fcfs(takeOut, dineIn, served4)) // false