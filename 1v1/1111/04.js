/**
 * @param  {string} source
 * @param  {string} pattern
 */

function findSubstr(source, pattern) {
  //增添：pattern 里的字母完全没有重复，如何优化 ？
  let j = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== pattern[j]) {
      j = 0;
      if (source[i] === pattern[j]){i++;} 
    } else {
      j++;
    }
    if (j === pattern.length) {
      return i - j + 1;
    }
  }
  return -1;
}

module.exports = {
  findSubstr,
};
