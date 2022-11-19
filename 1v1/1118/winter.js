function search(source, pattern) {
  //outer is a label
  outer: for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (source[i] !== pattern[j]) {
        continue outer;
      }
    }
    return i;
  }
  return -1;
}

function search2(source, pattern) {
  //outer is a label

  let j = 0;
  for (let i = 0; i < source.length; i++) {
    //console.log("i:", i, source[i], "j:", j, pattern[j]);
    if (source[i] === pattern[j]) {
      j++;
      if (j === pattern.length) {
        return i - j + 1;
      }
    } else if (j !== 0) {
      j = 0;
      i--;
    }
  }
  return -1;
}

function search3(source, pattern) {
  //outer is a label

  const next = [0, 0, 0, 1, 2, 0];

  let j = 0;
  for (let i = 0; i < source.length; i++) {
    //console.log("i:", i, source[i], "j:", j, pattern[j]);
    if (source[i] === pattern[j]) {
      j++;
      if (j === pattern.length) {
        return i - j + 1;
      }
    } else if (j !== 0) {
      j = next[j];
      i--;
    }
  }
  return -1;
}

console.log(search3("abababxabcababcababc", "ababc"));
/*
    ababc
abababcaabababc
    ^
j:  ababc
i:ababc
      ^
n:00012
*/


// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/ 