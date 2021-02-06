// 1 return the nth fibonacci number's square

function squareNthFibonacci(num){
  let arr = [1,1]
  for(let i=2; i<num; i++){
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr[num-1]**2
}

console.log(squareNthFibonacci(6)) //output: 64
console.log(squareNthFibonacci(7)) //output: 169

