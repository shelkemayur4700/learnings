require("./calculate/calculateSum");
// const { calculateSum } = require("./calculate/calculateSum");
// const { calculateMultiply } = require("./calculate/calculateMultiply");
//instead of importing seperately make folder as module and import it from it.
const { calculateMultiply, calculateSum } = require("./calculate");
console.log(globalThis === global);
// console.log(globalThis);

calculateSum(10, 20);
calculateMultiply(10, 20);

console.log(module.exports);
