// Named Function Expression
var b = function xyz() {
  console.log(xyz);
  console.log("b called");
};

// b();

// First Class Function/Citizens
// 1.
var b = function (param) {
  console.log(param);
};
// b(function () {});

// 2.
var b = function (param) {
  console.log(param);
};
function z() {
  return "21";
}
//b(z); // 1 way
// Output =>
//ƒ z() {
// return "21";
//}

// b(z()) ==> 21  // 2nd Way

// 3.
var c = function (param) {
  return function z() {};
};

console.log(c());
