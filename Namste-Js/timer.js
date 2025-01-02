// console.log("Start");
// setTimeout(function () {
//   console.log("Callback");
// }, 2000);
// console.log("End");

// 2.
function myFunction() {
  console.log("Inside function - Start");

  setTimeout(function () {
    console.log("Inside setTimeout callback");
  }, 2000);

  console.log("Inside function - End");
}

console.log("Global - Start");
myFunction();
console.log("Global - End");
