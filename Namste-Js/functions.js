// Named Function Expression
var b = function xyz() {
  console.log(xyz);
  console.log("b called");
};
// xyz() // error not defined
// b();

// First Class Function/Citizens
// 1.
var b = function (param) {
  console.log(param);
};
b(function () {});

// 2.
var b = function (param) {
  console.log(param);
};
function z() {
  return "21";
}
b(z); // 1 way
// Output =>
//ƒ z() {
// return "21";
//}

b(z()); //==> 21  // 2nd Way

// 3.
var c = function (param) {
  return function z() {};
};

// console.log(c());

// more e.g
function makeMultiplier(multiplier) {
  console.log("MM", multiplier);
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15
