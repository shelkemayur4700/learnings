// A functions calls itself is a recursion


// Q.1 multiply each ele of array and return output [1,2,3,4]
const array = [1, 2, 3, 4];
// using loop
function multiply(array) {
  let prod = 1;
  for (let index = 0; index < array.length; index++) {
    prod *= array[index];
  }
  return prod;
}
// console.log(multiply([1, 2, 3, 4]));

// using js in build method reduce
const product = array.reduce((prod, ele) => {
  return (prod *= ele);
}, 1);
// console.log(product);

// using recursion
function multiplication(arr) {
  if (arr.length <= 0) {
    return 1;
  } else {
    return arr[arr.length - 1] * multiplication(arr.slice(0, arr.length - 1));
  }
}
// console.log(multiplication(array));


// Q.2 Factorial of n
// 5*4*3*2*1
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));


// Q.3 Create an array with range of numbers
// Input : start=1 , end = 5 -->

function rangeOfNumber(start, end) {
  if (end < start) {
    return [];
  } else {
    const numbers = rangeOfNumber(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}
// console.log(rangeOfNumber(0, 5));


