// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each
// number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// -------Using loop------------
const fib = (n) => {
  let arr = [0, 1];
  for (let index = 2; index < n; index++) {
    arr.push(arr[index - 2] + arr[index - 1]);
  }

  return arr[n - 1];
};
// console.log(fib(5));  // this is not correct check once

// ---------------using recursion----------
const fibRecursion = (n) => {
  if (n <= 1) return n;
  return fibRecursion(n - 1) + fibRecursion(n - 2);
};
console.log(fibRecursion(5));
