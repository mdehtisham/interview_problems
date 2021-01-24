// find the square of each digit of the number;
// eg 23 will become 2*2 + 3*3 = 4+9 = 13


function numSquared(num){
  let sum = 0
  while(num > 0){
    let digit = 0;
    digit = num % 10;
    sum += digit*digit;
    num = Math.floor(num/10)
  }
  return sum
}

console.log(numSquared(23))
console.log(numSquared(12))
console.log(numSquared(14))