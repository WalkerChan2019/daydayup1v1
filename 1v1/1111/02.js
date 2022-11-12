/**
 * @param  {string} source
 * @param  {string} pattern
 */

function findSubstr(source, pattern) {
  //增添：pattern 里的字母完全没有重复，如何优化 ？ 
  outer: for (let i = 0; i < source.length; i++) {
    let result = true;
    inner: for (let j = 0; j < pattern.length; j++) {
      if (source[j + i] !== pattern[j]) {
        if (j !== 0) {
          i=i+j-1
        }
        
        // result = false;
        continue outer;
        // break;
      }
    }

    return i 
    // if (result) {
    //   return i;
    // } // 易读性
  }

  return -1;
}

module.exports = {
  findSubstr,
};
