// ---- Using Closure ------

let multiply = function (x) {
  console.log(x); //2
  return function (y) {
    console.log(y); //5
    console.log(x * y); //10
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(5);

// ---- Using Bind method ------
// let multiply = function (x, y) {
//   console.log(x, y);
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);
