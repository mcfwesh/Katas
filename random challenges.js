//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(...args) {
  let arr = [].concat(...args);
  let newSet = new Set(arr);
  return [...newSet];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  let arr = [1, 1];
  for (let i = 2; i < num; i++) {
    let nextNum = arr[i - 1] + arr[i - 2];
    arr.push(nextNum);
  }
  return arr.filter((val) => val % 2 && val <= num).reduce((a, v) => a + v, 0);
}
sumFibs(75025);

//A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num;
}

function sumPrimes(num) {
  let arr = [];
  for (let i = 2; i <= num; i++) {
    if (typeof isPrime(i) === "number") {
      arr.push(isPrime(i));
    }
  }
  return arr.filter((val) => val <= num).reduce((a, v) => a + v, 0);
}
sumPrimes(977);

/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.*/

function smallestCommons(arr) {
  //Euclidean Greatest Common Divisior
  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  // Least Common Multiple function
  function lcm(a, b) {
    return a * (b / gcd(a, b));
  }
  let sort = arr.sort((a, b) => a - b);
  let currentLCM = sort[0];

  while (sort[0] <= sort[1]) {
    currentLCM = lcm(currentLCM, sort[0]++);
  }
  return currentLCM;
}

/* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func, s = false) {
  let b = arguments[1];
  let newArr;
  for (let i = 0; i < arr.length; i++) {
    if (b(arr[i])) {
      newArr = arr.slice(i);
      return newArr;
    }
  }
  return [];
}
