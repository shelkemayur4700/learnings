//CLOUSER
// 1.
// function a() {
//   var m = 10;
//   function b() {
//     console.log(m); //10
//   }
//   // m = 100;
//   return b;
// }
// var h = a();
// console.log(h);
// h();
// 2.
// function z() {
//   let a = 10;
//   function x() {
//     let b = 20;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z(); //10 20

// 3. Clouser with TimeOut
// function x() {
//   var i = 2;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namste JS");
// }
// x();

// Q.Print 1 after 1 sec, 2 after 2 sec till 5
// function m() {
//   for (var i = 1; i <= 5; i++) {
//     debugger
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("using var------->");
// }
// m()
//  this will print 6 , 5 times

// Using let you can acheive this
// function xx() {
//   for (let i = 0; i <= 5; i++) {
//     // debugger
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("using let--->");
// }
// xx();

//BUt if interviwer asks to use var only
// function xy() {
//   for (var i = 0; i <= 5; i++) {
//     function close() {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("Namste JS");
// }
// xy();

// INTERVIEW QUESTIONS OF CLOSURE
// 1.
// function Outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// Outer()(); //10

// 2. changed sequence
// function Secondexmple() {
//   function inner() {
//     console.log(a);
//   }
//   var a = 10;
//   return inner;
// }
// Secondexmple()();
//10 inner fun form closure with outer sequence doesnt matter

// 3. changed var to let
// function Thirdexmple() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// Thirdexmple()();
//10 closure works same with let and const

// 4. will inner function have access to args of outer fun
// function Forthexmple(str) {
//   let a = 10;
//   function inner() {
//     console.log(str, a);
//   }
//   return inner;
// }
// // console.log(Forthexmple("hello")); //outer 
// //func retun inner func and it gets immediatedly invoked
// Forthexmple("hello")();
//10 closure works same with let and const

// 5. will inner function forms closure with outest
// function Fifthexmple(str) {
//   let a = 10;
//   function outer() {
//     const b = 20;
//     function inner() {
//       console.log(str, a, b);
//     }
//     return inner;
//   }
//   return outer;
// }
// Fifthexmple("hello")()();
//Yes, it will forms closure with outest func

// 6. what is output of this code
// function Sixthexmple(str) {
//   const b = 20;
//   function outer() {
//     // let a = 10;
//     function inner() {
//       console.log(str, a, b);
//     }
//     return inner;
//   }
//   return outer;
// }
// let a = 30;
// Sixthexmple("hello")()();
// hello 10 20 => it start finding a in its lexical scope
// if not found then it again start finding in parents lexical
// scope.
