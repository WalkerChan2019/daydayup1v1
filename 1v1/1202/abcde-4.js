// let findE = findX("e", success);
// let findD = findX("d", findE);
// let findC = findX("c", findD);
// let findB = findX("b", findC);
// let start = findX("a", findB);

// const { log } = require("console");

// let findC = findX("c", success);
// let findB = findX("b", findC);
// let findC = findX("a", start("a")==> findB);
// let findB = findX("b", findC);
// let start = findX("a", findB);
// abababc00
// ababc
// ^
//

let start;
function success(input) {
  throw new Error("illegal success call");
}
function generateNextArr(pattern) {
  let next = [0, 0]; //
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
  return next;
}

function generateAllStates(pattern, next) {
   function findX(map, reconsume, n) {
     // reconsume 字符重用
     // 因为闭包的原因nextstate会返回给source循环下一次调用的state
     return function findNext(char) {
       if (map.has(char)) {
         let v = map.get(char); // {pattern[i]: i + 1}
         return allStates[v];
       } else {
         if (reconsume) {
           return allStates[n](char);
         } else {
           return start;
         }
       }
     };
   }

  let allStates = [];
  let state
  for (let i = 0; i < pattern.length; i++) {
    //同时算出next
    let map = new Map();
    map.set(pattern[i], i + 1); // {pattern[i]: i + 1}
    state = findX(map, i !== 0, next[i]); //
    allStates.push(state);
  }
  allStates.push(success);

  return allStates
}



function findStr(source, pattern) {
  // let allStates = [];
  // let next = [0, 0]; //

 

 

  // {
    // for (let i = 1, j = 0; i < pattern.length; i++) {
    //   if (pattern[i] === pattern[j]) {
    //     j++;
    //     next[i + 1] = j;
    //   } else if (pattern[i] !== pattern[j] && j === 0) {
    //     // j++
    //     next[i + 1] = 0;
    //   } else {
    //     i--;
    //     j = next[j]; //
    //   }
    // }

    let next = generateNextArr(pattern);
    console.log({ next });

    // let state = success;
    // for (let i = 0; i < pattern.length; i++) {
    //   //同时算出next
    //   let map = new Map();
    //   map.set(pattern[i], i + 1); //
    //   state = findX(map, i !== 0, next[i]); //
    //   allStates.push(state);
    // }
    // allStates.push(success);

  let allStates=generateAllStates(pattern,next)

  start = allStates[0];
  // }

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



// console.log(finsStr("xyzabcde", "abcde"));

module.exports = { findStr };
