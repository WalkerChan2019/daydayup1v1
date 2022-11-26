

function wkKmp3(pattern) {
  let next = [0, 0];
  let i = 1,
    j = 0;
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      i++;
      j++;
      next[i] = j;
    } else if (j === 0) {
      i++;
      next[i] = 0;
      // j++; //这里j保持为0
    } else {
      j = next[j];
    }
  }
  return next;
}


module.exports = { wkKmp3 };