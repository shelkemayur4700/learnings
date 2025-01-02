const users = [
  { name: "Mayur", age: 25 },
  { name: "vishal", age: 20 },
  { name: "swapnil", age: 30 },
  { name: "akshay", age: 50 },
  { name: "ramesh", age: 20 },
];

//Trick reduce

//output=>{20:2,25:1,30:1,50:1} use the above data
const output = users?.reduce((acc, curr) => {
  if (acc[curr?.age]) {
    acc[curr?.age] = ++acc[curr?.age];
  } else {
    acc[curr?.age] = 1;
  }
  return acc;
}, {});

// console.log(output);
//do this using reduce
const output2 = users?.filter((x) => x.age <= 30)?.map((x) => x.name);
console.log(output2);

const output3 = users?.reduce((acc, curr) => {
  if (curr?.age <= 30) {
    // console.log(curr?.name);
    acc.push(curr?.name);
  }
  return acc;
}, []);
console.log(output3);
