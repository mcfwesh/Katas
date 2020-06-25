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

//Flatten a nested array. You must account for varying levels of nesting.

//e.g steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

function steamrollArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(steamrollArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

//Return an English translated sentence of the passed binary string.

//The binary string will be space separated.

function binaryAgent(str) {
  let newWord = [];
  for (let char of str.split(" ")) {
    newWord.push(String.fromCharCode(parseInt(char, 2).toString()));
  }
  return newWord.join("");
}
binaryAgent(
  "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
);

//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

//In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

function truthCheck(collection, pre) {
  return collection.every((val) => val);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

function checkCashRegister(price, cash, cid) {
  const USNotes = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  let totalCash = cid.reduce((a, val, i) => a + val[1], 0);
  let change = Math.round((cash - price) * 100) / 100;

  let cidObject = Object.fromEntries(cid);
  let result = {
    status: "OPEN",
    change: {
      PENNY: 0,
      NICKEL: 0,
      DIME: 0,
      QUARTER: 0,
      ONE: 0,
      FIVE: 0,
      TEN: 0,
      TWENTY: 0,
      "ONE HUNDRED": 0,
    },
  };

  if (totalCash < change) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (totalCash === change) return { status: "CLOSED", change: cid };

  for (let i = cid.length - 1; i >= 0; i--) {
    const cashPerDenomination = cid[i][1];
    const denominationLabel = USNotes[cid[i][0]];
    let numberOfNotes = cashPerDenomination / denominationLabel;
    while (change >= denominationLabel && numberOfNotes) {
      result.change[cid[i][0]] = result.change[cid[i][0]] + denominationLabel;
      numberOfNotes--;
      change = Math.round((change - denominationLabel) * 100) / 100;
    }
  }

  //to convert it to array
  let resultChangeArray = Object.entries(result.change);
  let resultChangeArrayNoZeros = resultChangeArray
    .filter((val) => val[1])
    .sort((a, b) => b[1] - a[1]);
  result.change = resultChangeArrayNoZeros;

  //to check if the exact cash can be given, even when there is enough cash
  let totalCashSpent = result.change.reduce((a, val) => a + val[1], 0);
  return totalCashSpent >= change
    ? result
    : { status: "INSUFFICIENT_FUNDS", change: [] };
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
