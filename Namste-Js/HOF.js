//DONT WRITE CODE LIKE THIS IN CODING ROUND USE DRY PRINCIPLE Dont Repeat Yourself

const radius = [1, 2, 3, 4];
const calCulateArea = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
// console.log(calCulateArea(radius));

const calCulateCircumference = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
// console.log(calCulateCircumference(radius));

const calCulateDiameter = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

// console.log(calCulateDiameter(radius));

//CODE USING GENERALIZED FUNCTION LESS REPEATION OF CODE
//High Order Functon

//Reusable function to calculate all parameters
//Our custom map/function
const calCulate = function (radius, logic) {
  console.log(radius, logic);
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumFerence = function (radius) {
  return 2 * Math.PI * radius;
};
const diaMeter = function (radius) {
  return 2 * radius;
};
//This is js map function do the same as above calculate function
// console.log("MAP", radius?.map(area));
// console.log("MAP", radius?.map(circumFerence));
// console.log("MAP", radius?.map(diaMeter));
//Using our custom function but all 6 lines doing same
console.log(calCulate(radius, area));
console.log(calCulate(radius, circumFerence));
console.log(calCulate(radius, diaMeter));
