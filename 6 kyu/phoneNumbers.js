//CHALLENGE
/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123 */

//SOLUTION
function createPhoneNumber(numbers) {
  let firstArr = numbers.slice(0, 3);
  let secArr = numbers.slice(3, 6);
  let thirdArr = numbers.slice(6, 10);
  return `(${firstArr.join("")}) ${secArr.join("")}-${thirdArr.join("")}`;
}
