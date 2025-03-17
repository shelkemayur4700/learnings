//check for ascending order and descending order also

const arr = [1, 2, 3, 4, 5, 6];

function ascendingSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
    } else return false;
  }
  return true;
}

const arr2 = [7, 6, 5, 4, 3, 2];
function descendingSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
    } else return false;
  }
  return true;
}

const ascending = ascendingSorted(arr);
const descending = descendingSorted(arr2);
// console.log(ascending, descending);

// -------REMOVE DUPLICATES FROM SORTED ARRAY
const arr3 = [1, 1, 2, 3, 4, 4, 5];

const unique = getUnique(arr3);

function getUnique(arr3) {
  const result = [];
  result.push(arr3[0]); 

  for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] !== arr3[i - 1]) {
      result.push(arr3[i]); 
    }
  }
  return result;
}

console.log(unique);
