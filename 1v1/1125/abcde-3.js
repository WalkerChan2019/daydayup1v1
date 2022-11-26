// let findE = findX("e", success);
// let findD = findX("d", findE);
// let findC = findX("c", findD);
// let findB = findX("b", findC);
// let start = findX("a", findB);


// let findC = findX("c", success);
// let findB = findX("b", findC);
// let findC = findX("a", start("a")==> findB);
// let findB = findX("b", findC);
// let start = findX("a", findB);
// abababc00
// ababc
// ^
// 

function findStr(source, pattern) {
  let start;
  function findX(condition, nextState, reconsume) {
    // reconsume 字符重用
    return function findNext(char) {
      console.log("condition:", condition);
      if (char === condition) {
        return nextState;
      } else {
        if (reconsume) {
          console.log("reconsume----:", condition);
          return start(char);
        } else {
          return start;
        }
      }
    };
  }
  {
    let state = success;
    for (let i = 0; i < pattern.length; i++) {
      state = findX(
        pattern[pattern.length - i - 1],
        state,
        i !== pattern.length - 1
      );
    }
    start = state;
  }
  let state = start;
  for (let i = 0; i < source.length; i++) {
    // console.log(state.name, i, source[i]);
    state = state(source[i]);
    if (state === success) {
      return i - pattern.length + 1;
    }
  }
  return -1;
}

function success(input) {
  throw new Error("illegal success call");
}

// console.log(finsStr("xyzabcde", "abcde"));

module.exports = { findStr };
