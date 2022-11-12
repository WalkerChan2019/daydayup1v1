/**
 * @param  {string} source
 * @param  {string} pattern
 */

function findSubstr(source, pattern) {
  //增添：pattern 里的字母完全没有重复，如何优化 ？
  let j = 0;
  let note = 0;
  for (let i = 0; i < source.length; i++) {
    console.log("11");
    if (source[i] !== pattern[j]) {
      if (note >= 1) {
        i = i - (note - 1);
        j = 0;
        note = 0;
      } else {
        j = 0;
        note = 0;
      }
      if (source[i] === pattern[j]) {
        j++; // 这里是j++
        note++;
      }
    } else {
      j++;
      note++;
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

// module.exports = {
//   findSubstr,
// };

//=================================================
// console.log("mississippi".includes("issip"));

// console.log("mississippi".indexOf("issip"));

//by 司徒正美 2011.8.18
String.prototype.indexOfbyWk = function (sub) {
  var a = sub.charAt(0),
    an = sub.length,
    n = this.length;
  if (n == an) {
    return this == sub ? 0 : -1;
  }
  if (n < an) {
    return -1;
  }
  loop: for (var i = 0; i < n; i++) {
    if (this.charAt(i) == a) {
      for (var j = 1; j < an; j++) {
        if (this.charAt(j + i) != sub.charAt(j)) {
          continue loop;
        }
      }
      return i;
    }
  }
  return -1;
};

var a = "aabbccb";
console.log(a.indexOfbyWk("bbccb")); //2
console.log("Blue Whale".indexOfbyWk("Blue")); // returns 0
console.log("Blue Whale".indexOfbyWk("Blute")); // returns -1

console.log("mississippi".indexOfbyWk("issip"));


// 跟方法二一样 
function getIndex(source, pettern) {
  var a = pettern.charAt(0),
    an = pettern.length,
    n = source.length;
  if (n == an) {
    return source == pettern ? 0 : -1;
  }
  if (n < an) {
    return -1;
  }
  loop: for (var i = 0; i < n; i++) {
    if (source.charAt(i) == a) {
      for (var j = 1; j < an; j++) {
        if (source.charAt(j + i) != pettern.charAt(j)) {
          continue loop;
        }
      }
      return i;
    }
  }
  return -1;
}

console.log(getIndex("mississippi", "issip"));