// Q. check wheather number/string is palindrom or not

// Input ---> 121 == true
// Input ---> 10 == false

// Input ---> "aba" == true
// Input ---> "mz" == false

//Normal for loop
const isPalindrom = (x) => {
  const ar = x.toString();
  console.log(ar.length);
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] !== ar[ar.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
//with js inbuild methods
// const isPalindrom = (x) => {
//   if (typeof x === "string") {
//     return x === x.split("").reverse().join("");
//   } else {
//     return x < 0 ? false : x === +x?.toString().split("").reverse().join("");
//     // + operator converts +"123" ==> 123 if +"abc"==> NAN
//   }
// };

console.log(isPalindrom(90));
