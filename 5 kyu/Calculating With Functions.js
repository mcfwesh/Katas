//CHALLENGE
/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

//SOLUTION

function zero(x) {
  if (arguments.length) {
    return Math.floor(eval(`0${x}`));
  }
  return 0;
}
function one(x) {
  if (arguments.length) {
    return Math.floor(eval(`1${x}`));
  }
  return 1;
}
function two(x) {
  if (arguments.length) {
    return Math.floor(eval(`2${x}`));
  }
  return 2;
}
function three(x) {
  if (arguments.length) {
    return Math.floor(eval(`3${x}`));
  }
  return 3;
}
function four(x) {
  if (arguments.length) {
    return Math.floor(eval(`4${x}`));
  }
  return 4;
}
function five(x) {
  if (arguments.length) {
    return Math.floor(eval(`5${x}`));
  }
  return 5;
}
function six(x) {
  if (arguments.length) {
    return Math.floor(eval(`6${x}`));
  }
  return 6;
}
function seven(x) {
  if (arguments.length) {
    return Math.floor(eval(`7${x}`));
  }
  return 7;
}
function eight(x) {
  if (arguments.length) {
    return Math.floor(eval(`8${x}`));
  }
  return 8;
}
function nine(x) {
  if (arguments.length) {
    return Math.floor(eval(`9${x}`));
  }
  return 9;
}

function plus(x) {
  return `+${x}`;
}
function minus(x) {
  return `-${x}`;
}
function times(x) {
  return `*${x}`;
}
function dividedBy(x) {
  return `/${x}`;
}

//ALTERNATIVE SOLUTION
function recur(n, op) {
  return op ? op.call(op, n) : n;
}

function zero(op) {
  return recur(0, op);
}
function one(op) {
  return recur(1, op);
}
function two(op) {
  return recur(2, op);
}
function three(op) {
  return recur(3, op);
}
function four(op) {
  return recur(4, op);
}
function five(op) {
  return recur(5, op);
}
function six(op) {
  return recur(6, op);
}
function seven(op) {
  return recur(7, op);
}
function eight(op) {
  return recur(8, op);
}
function nine(op) {
  return recur(9, op);
}

function plus(num) {
  return function (res) {
    return res + num;
  };
}
function minus(num) {
  return function (res) {
    return res - num;
  };
}
function times(num) {
  return function (res) {
    return res * num;
  };
}
function dividedBy(num) {
  return function (res) {
    return res / num;
  };
}
