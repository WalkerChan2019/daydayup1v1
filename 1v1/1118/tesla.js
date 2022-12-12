function kmp(str, substr) {
  let next = getNext(substr);
  let i = 0, j = 0;
  while (i < str.length && j < substr.length) {
    if (j === -1 || str[i] === substr[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  if (j === substr.length) {
    return i - j;
  }
  return -1;
}

function getNext(str) {
  let next = [];
  next[0] = -1;
  let i = 0, j = -1;
  while (i < str.length - 1) {
    if (j === -1 || str[i] === str[j]) {
      i++;
      j++;
      if (str[i] !== str[j]) {
        next[i] = j;
      } else {
        next[i] = next[j];
      }
    } else {
      j = next[j];
    }
  }
  return next;
}


module.exports = { findSubstr:kmp };