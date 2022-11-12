/**
 * @param  {string} source
 * @param  {string} pattern
 */

function findSubstr(source, pattern) {
  outer: for (let i = 0; i < source.length; i++) {
    let result = true;
    inner: for (let j = 0; j < pattern.length; j++) {
      if (source[j + i] !== pattern[j]) {
        // break inner;
        result = false;
        // continue outer;
        break;

        // if (j === pattern.length - 1) {
        //   return i;
        // }
      }
    }
    if (result) {
      return i;
    } // 易读性
  }

  return -1;
}

module.exports = {
  findSubstr,
};
