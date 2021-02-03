/* Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
Output => returns "(123) 456-7890" */

function createPhoneNumber(numbers){
  //returns "(123) 456-7890"
  let [one, two, three, four, five, six, seven, eight, nine, ten] = numbers
  return `(${one}${two}${three}) ${four}${five}${six}-${seven}${eight}${nine}${ten}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
//Output: (123) 456-7890






