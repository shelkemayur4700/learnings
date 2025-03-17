//------------------- HOISTING
// 1.
// console.log(getName());
// console.log(x);
// var x = 5;

// function getName() {
//   console.log("Namste Javascript");
// }
// 2.
// console.log(getName());
// console.log(x);
// var x = 5;

// const getName = () => {
//   console.log("Namste Javascript");
// };

// 3.
// getName();
// console.log(getName);
// console.log(x);
// var x = 5;
// var getName = function () {
//   console.log("Namste Javascript");
// };
// 4.
var x = 5;
var getName = function () {
  console.log("Namste Javascript");
  console.log(x + "y");
};

getName(); // Now this works, logs "Namste Javascript"
console.log(getName); // Logs the function definition
console.log(x); // Logs 5

//-------------------HOW FUNCTIONS WORKS IN JS

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var x = 100;
//   console.log(x);
// }
