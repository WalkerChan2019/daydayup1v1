// leetcode  \text{Knuth-Morris-Pratt}Knuth-Morris-Pratt 算法
var strStr = function (haystack, needle) {
  const n = haystack.length,
    m = needle.length;
  if (m === 0) {
    return 0;
  }
  const pi = new Array(m).fill(0);
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (needle[i] == needle[j]) {
      j++;
    }
    pi[i] = j;
  }
  console.log("01:",pi);
  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = pi[j - 1];
    }
   
    if (haystack[i] == needle[j]) {
      j++;
    }
    if (j === m) {
       console.log("02:", pi);
      return i - m + 1;
    }
  }
  
  return -1;
};

module.exports = {
  // 时间复杂度：O(n+m)O(n+m)
  findSubstr: strStr,
};

// Knuth-Morris-Pratt 算法，简称 \text{KMP}KMP 算法，
// 由 \text{Donald Knuth }Donald Knuth、\text{James H.Morris }James H.Morris 和 \text{Vaughan Pratt }Vaughan Pratt 三人于 19771977 年联合发表。

// Knuth-Morris-Pratt 算法的核心为前缀函数，


