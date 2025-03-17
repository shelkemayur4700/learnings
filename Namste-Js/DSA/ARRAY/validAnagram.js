// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// simple approach
const validAnagram = function (str1, str2) {
  const strOne = str1.split("").sort().join("");
  const strTwo = str2.split("").sort().join("");
  return strOne === strTwo;
};

// console.log(validAnagram("rat", "tar"));

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

console.log(isAnagram("a", "ab"));
