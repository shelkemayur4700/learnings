// Q. remove duplicates from sorted arr Given an integer arr nums sorted in
// non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// using inbuilt js methods
const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1); //remove that same ele
      i--;
    }
  }
  return arr;
};
console.log(removeDuplicates(array));

//two pointer approach
const removeDuplicatesTwoPointer = (arr) => {
  if (arr.length === 0) {
    return;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicatesTwoPointer(array));
