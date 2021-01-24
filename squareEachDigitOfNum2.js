// find the square of each digit of the number;
// eg 23 will become 2*2 + 3*3 = 4+9 = 13


function numSquared(num){
 let numStr = `${num}`
 sum = 0
 for(let val of numStr){
   sum += (+val) **2
 }
  return sum
}

console.log(numSquared(23))
console.log(numSquared(12))
console.log(numSquared(14))