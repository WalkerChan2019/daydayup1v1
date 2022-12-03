// let findE = findX("e", success);
// let findD = findX("d", findE);
// let findC = findX("c", findD);
// let findB = findX("b", findC);
// let start = findX("a", findB);

const { log } = require("console");

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
  let allStates = [];
  let next = [0, 0]; // 
  function findX(map, reconsume,n) {
    // reconsume 字符重用
    // 因为闭包的原因nextstate会返回给source循环下一次调用的state
    return function findNext(char) {
      if (map.has(char)) {
        let v = map.get(char);
        return allStates[v];
      } else {
        if (reconsume) {
          return allStates[n](char)
        } else {
          return start;
        }
      }
    };
  }
  {
    let state = success;
    for (let i = 1, j = 0; i < pattern.length; i++) {
      if (pattern[i] === pattern[j]) {
        j++;
        next[i + 1] = j;
      } else if (pattern[i] !== pattern[j] && j === 0) {
        // j++
        next[i + 1] = 0;
      } else {
        i--;
        j = next[j]; //
      }
    }
    console.log({ next });
    for (let i = 0; i < pattern.length; i++) {
      //同时算出next
      let map = new Map();
      map.set(pattern[i], i + 1); //
      state = findX(map, i !== 0,next[i]);// 
      allStates.push(state);
    }
    allStates.push(success)

    start = allStates[0];
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
