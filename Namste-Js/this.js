"use strict";
//  -----------------this in global

console.log(this);

// -------------------this in function
function x() {
  console.log(this); //strict mode ? undefined : global/window object
}
// value of this depends on how function is called
x(); //undefined
window.x(); //called with refernce to window object ? window object : undefined

// --------------------this in object
const obj = {
  a: 10,
  x: function () {
    console.log(this); // {"a": 10, x:f}
    console.log(this.a); // 10
  },
};

//obj.x(); // {"a": 10, x:f}

//----------------------this in a arrow function

const xObj = {
  a: 10,
  x: () => {
    console.log("this inside arrow function ", this); // {"a": 10, x:f}
  },
};
xObj.x();

const yObj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log("this inside nested arrow function ", this); // {"a": 10, x:f}
    };
    y();
  },
};
yObj.x();

//----------------------this in DOM
// this points to this html element
// <button id="ClickMe1" onclick="{alert(this.tagName)}">
//   Click Me
// </button>;
