// 1.
{
  /* <div id="parent">
  <div id="child">
    <h1>I' am h1 tag</h1>
  </div>
</div>; */
}
// 2.
//   <div id="parent">
//   <div id="child">
//     <h1>I' am h1 tag</h1>
//     <h2>I' am h1 tag</h2>
//   </div>
//   <div id="child2">
//     <h1>I' am h1 tag</h1>
//   </div>
// </div>;

// 1. How we can create nested structure in react
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);
// 2. How we can create nested structure in react
const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "I am an h1 tag")
  ),
]);

//to reduce this complex code JSX is introduced
console.log(parent); //returns object
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);
