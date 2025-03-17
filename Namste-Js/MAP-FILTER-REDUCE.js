// MAP, FILTER, REDUCE ARE HIGHER ORDER FUNCTIONS

//------------------MAP
const arr = [1, 2, 3, 4, 5];

//DUBLE THE ARRAY
function double(x) {
  return x * 2;
}
const doubleArr = arr.map(double);
// console.log(doubleArr);

// TRIPLE THE ARRAY
function triple(x) {
  return x * 3;
}
const tripleArr = arr.map(triple);
// console.log(tripleArr);

// CONVERT TO BINARY
function binary(x) {
  return x.toString(2);
}
const binaryArr = arr.map(binary);
// console.log(binaryArr);

// using arrow function
const binaryArr2 = arr.map((d) => d.toString(2));
// console.log(binaryArr2);
//--------------------------------FILTER

function isodd(x) {
  return x % 2;
}

const oddArr = arr.filter(isodd);
// console.log(oddArr);

// 2nd approach using arrow function
const oddArr2 = arr.filter((d) => d % 2);
// console.log(oddArr2);

//----------------------------------------------REDUCE
// Q.-------FIND SUM OF ARRAY
// NORMAL FUNCTION WAY
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(findSum(arr));

// REDUCE FUNCTION WAY
const sumArr = arr.reduce(function (acc, ele) {
  acc += ele;
  return acc;
}, 0);
// console.log(sumArr);
// Q.----------FIND MAX
//NORMAL FUNCTION WAY
function findMaxOfArr(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(findMaxOfArr(arr));
//USING REDUCE
const maxArr = arr.reduce((acc, ele) => {
  if (ele > acc) {
    acc = ele;
  }
  return acc;
}, 0);
// console.log(maxArr);
//---------------------****Trick reduce*****
const users = [
  { name: "Mayur", age: 25 },
  { name: "vishal", age: 20 },
  { name: "swapnil", age: 30 },
  { name: "akshay", age: 50 },
  { name: "ramesh", age: 20 },
];

//output=>{20:2,25:1,30:1,50:1} use the above data

const output = users?.reduce((acc, curr) => {
  if (acc[curr?.age]) {
    acc[curr?.age] = ++acc[curr?.age];
  } else {
    acc[curr?.age] = 1;
  }
  return acc;
}, {});
console.log(output);

//do this using reduce
const output2 = users?.filter((x) => x.age <= 30)?.map((x) => x.name);
// console.log(output2);

const output3 = users?.reduce((acc, curr) => {
  if (curr?.age <= 30) {
    // console.log(curr?.name);
    acc.push(curr?.name);
  }
  return acc;
}, []);
// console.log(output3);
