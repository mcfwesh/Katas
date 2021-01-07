// CHALLENGE:
// Given an integral number, determine if it's a square number:

// SOLUTION

const isSquare = (n) =>
  Math.sqrt(n).toString().includes(".") || Math.sign(n) === -1 ? false : true;
