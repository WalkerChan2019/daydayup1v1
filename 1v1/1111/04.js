/**
 * @param  {string} source
 * @param  {string} pattern
 */

function findSubstr(source, pattern) { 
  //增添：pattern 里的字母完全没有重复，如何优化 ？
  let j = 0;
  let note=0
  for (let i = 0; i < source.length; i++) {
    console.log('11');
    if (source[i] !== pattern[j]) {
      if (note>=1 ) { // bug2 
        i = i - (note - 1)
        j = 0;
        note = 0;
      } else {
        j = 0;
        note = 0;
      }
      if (source[i] === pattern[j]) {
        j++ // 这里是j++   //bug1 
        note++
      }
    } else {
      j++;
      note ++ 
    }
    if (j === pattern.length) {
      return i - j + 1;
    }
  }
  return -1;
}

// findSubstr("abcdef","bcd")
// console.log(findSubstr("ababcd", "abc"));

// console.log(findSubstr("mississippi", "issip"))

module.exports = {
  findSubstr,
};




// kongingsingsingp
//         ingsingp