// Q1. Find min and max from array  -------->
const arr = [1000];

// 1.1.st way
let min = arr[0];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
  if (max < arr[i]) {
    max = arr[i];
  }
}
// console.log(min, max);

// 1.2.nd way
let res = arr.reduce(
  ([min, max], num) => {
    return [num < min ? num : min, num > max ? num : max];
  },
  [Infinity, -Infinity]
);
// console.log(res);
// 1.2.1 using function
const minMaxCal = (arr) => {
  return arr.reduce(
    ([min, max], num) => [num < min ? num : min, num > max ? num : max],
    [Infinity, -Infinity]
  );
};
// console.log(minMaxCal(arr));

// Q.2 Remove duplicate from array    -------->
const arr2 = [1, 2, 3, 4, 2, 5, 1];
//2.1
const Duplicates = (arr) => {
  const unique = [];
  for (i of arr) {
    if (!unique.includes(i)) {
      unique.push(i);
    }
  }
  //   console.log(unique);
};
Duplicates(arr2);
//2.2 Using reduce function
let uniqueNum = arr2.reduce((unique, num) => {
  !unique.includes(num) && unique.push(num);
  return unique;
}, []);
// console.log(uniqueNum);

// Q.3 find duplicates from array    -------->

//3.1 normal for loop
const duplicate = [];
arr2.filter((num, index) => {
  index !== arr2.indexOf(num) && duplicate.push(num);
});
// console.log(duplicate)
// 3.2 using reduce
let RepeatedNum = arr2.reduce((duplicate, num, index) => {
  //   console.log(arr2.indexOf(num), index);
  index !== arr2.indexOf(num) && duplicate.push(num);
  return duplicate;
}, []);
// console.log(RepeatedNum);

// 3.3 using sorting method
const findDuplicates = (arr) => {
  arr.sort((a, b) => a - b);
  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] && !duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
  //   console.log(duplicate)
};
findDuplicates(arr2);

//Q.4 Reverse the elements of array    -------->
const arr4 = [1, 2, 3, 4, 5, 6];
// expected ans [6,5,4,3,2,1]
// 1 normal for loop
const reverseArray = (arr) => {
  const newArr = [];
  //   return arr.sort((a, b) => b - a);
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
};
// console.log(reverseArray(arr4));
//1.1
const reverseArray2 = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
};
// console.log(reverseArray2(arr4));

//2. using reduce function
let reverse = arr4.reduce((acc, num) => {
  return [num, ...acc];
}, []);

// console.log(reverse);

//Q.5 rotate the array by one position in clock-wise direction.    -------->
const arr5 = [9, 8, 7, 6, 4, 2, 1, 3];
// Output: [3, 9, 8, 7, 6, 4, 2, 1];

// 5.1. using array methods
const rotateArr = (arr) => {
  let lastelement = arr.pop();
  arr.unshift(lastelement);
  return arr;
};
// console.log(rotateArr(arr5));

//5.2. using loop
const rotat = (arr) => {
  const lastEle = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastEle;
  return arr;
};
console.log(rotat(arr5));
