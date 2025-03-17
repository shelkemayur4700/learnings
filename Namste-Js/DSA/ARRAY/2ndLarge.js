// Q. Find secondLargest from array
// [1, 2, 3, 66, 89]   ==> 66
// [10,5,10]  ==> 5

// Brotforst approach
const secondLargest = (arr) => {
  const uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => b - a);
  // console.log(uniqueArr);
  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
};
console.log(secondLargest([1, 2, 3, 66, 89]));

// OPtimized approach
const optimisedSecondLargest = (array) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] != largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
};
console.log(optimisedSecondLargest([5, 10, 10]));
// Time complexity  == O(n)  ==> one loop we have used only thats is one operation till array.length = n
//space complexity = O(1) ==> we are not creating another array or storing value we are just returning one value = O(1)