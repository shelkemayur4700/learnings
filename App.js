import React from "react";
import ReactDOM from "react-dom/client";
// // 1.
// {
//   /* <div id="parent">
//   <div id="child">
//     <h1>I' am h1 tag</h1>
//   </div>
// </div>; */
// }
// // 2.
// //   <div id="parent">
// //   <div id="child">
// //     <h1>I' am h1 tag</h1>
// //     <h2>I' am h1 tag</h2>
// //   </div>
// //   <div id="child2">
// //     <h1>I' am h1 tag</h1>
// //   </div>
// // </div>;

// // 1. How we can create nested structure in react
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Namste React"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ])
// );
// // 2. How we can create nested structure in react
// const parent2 = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Namste react"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
//   React.createElement(
//     "div",
//     { id: "child2" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   ),
// ]);

// //to reduce this complex code JSX is introduced

// console.log(parent); //returns object
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from react!"
// );

// React element ==> js object ==> html element render
// const head1 = React.createElement("h1", { id: "heading" }, "Namste React");
// console.log(head1);

// LETS WRITE JSX
// JSX => React elememt => js object => html element render
// const head = <h1>Namste React using jsx</h1>;
// console.log(head);
const root = ReactDOM.createRoot(document.getElementById("root"));

// -----------LEARN COMPOENETS
// normal jsx
const headJSX = <h1>Jsx in js</h1>;
const TitleComponent = () => <h1>Namaste React using JSX</h1>;

// TITLE COMPOSITION
// PUTTING COMPONENT INSIDE COMPONENT
const HeadComponent = () => (
  <div>
    <TitleComponent />
    <h1>React using functional component</h1>
  </div>
);
root.render(<HeadComponent />);
