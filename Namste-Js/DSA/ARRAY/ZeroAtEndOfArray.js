const arr = [1, 2, 3, 0, 4, 0, 5, 0];
// brute approach
function placeZeroAtEnd(arr) {
  n = arr.length;
  let temp = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  return arr;
}

console.log(placeZeroAtEnd(arr));
