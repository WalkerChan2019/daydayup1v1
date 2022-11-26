const EOF = Symbol("EOF");

// let findE = findX("e", success);
// let findD = findX("d", findE);
// let findC = findX("c", findD);
// let findB = findX("b", findC);
// let start = findX("a", findB);

function findStr(source, pattern) {
  let start;
  function findX(condition, nextState,reconsume) {
    // reconsume 字符重用 
    return function findNext(char) {
      // console.log(condition);
      if (char === condition) {
        return nextState;
      } else {
        if (reconsume) {
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
      state = findX(pattern[pattern.length - i - 1], state,i!== pattern.length-1);
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

// function start(input) {
//   if (input == "a") {
//     return findA;
//   } else {
//     return start;
//   }
// }

// function findA(input) {
//   if (input == "b") {
//     return findB;
//   } else {
//     return start(input);
//   }
// }

// function findB(input) {
//   //
//   if (input == "c") {
//     return findC;
//   } else {
//     return start(input); // 调整
//   }
// }

// function findC(input) {
//   //
//   if (input == "d") {
//     return findD;
//   } else {
//     return start(input); // 调整
//   }
// }

// function findD(input) {
//   if (input == "e") {
//     return success;
//   } else {
//     return start(input);
//     // return findB(input);
//   }
// }

function success(input) {
  throw new Error("illegal success call");
}

// console.log(finsStr("xyzabcde", "abcde"));

module.exports = { findStr };
