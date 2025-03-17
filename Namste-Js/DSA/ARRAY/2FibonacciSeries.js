//input = 3 ===>F(n) = 3
// output => 2 ===>F(n)= f(n-1) + f(n-2)

const fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

// console.log(fib(5));

//recusrsive approach

const fibRecursive = function (n) {
  if (n <= 1) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

//n = 3 => 1 + 1 ==> 2
// fibRecursive(2) => 0 + 1 ==>1
// console.log(fibRecursive(3));

// oneLiner
const fibOneLiner = (n) =>
  n <= 1 ? n : fibOneLiner(n - 1) + fibOneLiner(n - 2);
console.log(fibOneLiner(3));
