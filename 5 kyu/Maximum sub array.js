//CHALLENGE
/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

//SOLUTION
var maxSequence = function (arr) {
  let currentSum = 0;
  let maxSum = 0;
  const positiveNumbers = (arr) => arr.every((v) => v > 0);
  const negativeNumbers = (arr) => arr.every((v) => v < 0);

  if (arr.length === 0 || negativeNumbers(arr)) return 0;
  if (positiveNumbers(arr)) return arr.reduce((a, v) => a + v);
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
