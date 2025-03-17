// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

const array = [5, 4, -1, 7, 8];

//BRUTEFORCE APPROACH
const maxSubArray = (arr) => {
  let maxsum = arr[0];
  let startIdx = 0;
  let endIdx = 0;
  for (let i = 0; i < array.length; i++) {
    let currentSum = 0;
    for (let j = i; j < array.length; j++) {
      currentSum += arr[j];
      if (currentSum > maxsum) {
        maxsum = currentSum;
        (startIdx = i), (endIdx = j);
      }
    }
  }
  return { sum: maxsum, arr: arr.slice(startIdx, endIdx + 1) };
};
// console.log(maxSubArray(array));
// Time complexity => 2 loops O(n^2)
// space complexity => we havent used any extra array or something => O(1)

// -----------USING KADENS ALOG-------------

const maxSubArrayUsingKadenAlgo = (arr) => {
  let sum = 0;
  let maxSum = arr[0];
  for (let i = 0; i < array.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};
console.log(maxSubArrayUsingKadenAlgo(array));
