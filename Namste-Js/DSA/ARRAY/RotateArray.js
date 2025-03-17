const arr = [1, 2, 3, 4, 5];
//  ROTATE BY ONE PLACE
function rotateArray(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}
const rotatedArray = rotateArray(arr);
// console.log(rotatedArray);

// ROTATAE BY D PLACES
const arr2 = [1, 2, 3, 4, 5, 6, 7];
//BRUTEFORCE APPROACH
// 1. inbuild js functions
const rotateUsingInBuildJsFunctions = (arr, k) => {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }
  const rotated = arr.splice(size - k, size);
  console.log(k, "$", size, "*", rotated);
  arr.unshift(...rotated);
  return arr;
};
console.log(rotateUsingInBuildJsFunctions(arr2, 12));
// 2.
function rotateByDplaces(arr, d) {
  const n = arr.length;
  d = d % n;
  for (let j = 0; j < d; j++) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}
// console.log(rotateByDplaces(arr2, 3));
//OPTIMIZED SOLUTION
function rotateArrayOptimized(arr, d) {
  n = arr.length;
  d = d % n;
  rotateArr(arr, 0, n - 1); //complete array
  rotateArr(arr, 0, d - 1); //rotate till d(place from where to rotate it)
  rotateArr(arr, d, n - 1); //now from d to end of array
  return arr;
}
function rotateArr(arr, start, end) {
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
// console.log(rotateArrayOptimized(arr2, 3));
// time Complexity = O(n) //used while loop till n
// space Complexity = O(1) //havent used any new array
