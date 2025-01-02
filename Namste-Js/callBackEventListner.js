// --------Episode.14.CALLBACK AND EVENT LISTENER --------

// 1. This section is to check callstack
setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("X");
  y();
}
// function y is callback function passed to function x
// x(function y() {
//   console.log("Y");
// });

// 1.2
function printStr(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 1000) + 1);
}
function printAll() {
  printStr("A", () => {
    printStr("b", () => {
      printStr("c", () => {});
    });
  });
}
// printAll();

// 2. EventListeners section

// Steps to see eventListeners in devTool
// 1.Go to elements section
// 2.Click on element whose event Listener want to see
// 3. then in bottom you can option Eevent Listeners click it.

// 2.1 Using global variable but anyone can change it.

// let counter1 = 0; //bcz let is stored counter1 into seperate memory called script
// var counter1 = 0; //bcz let is stored counter1 into seperate memory called script
// document.getElementById("ClickMe").addEventListener("click", function xyz() {
//   console.log("Clicked....", ++counter1);
// });

// 2.2 Using closure for data abstraction
function attachListener() {
  let counter = 0;
  document
    .getElementById("ClickMe1")
    .addEventListener("click", function xyz1() {
      console.log("Clicked....", ++counter);
    });
}

attachListener();
