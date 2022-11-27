/*
start = findX("a",findA) ==> findA
findA = findX("b",findB) ==> findB
findB = findX("c",succed) ==> succed
*/

function Strstr(source, pattern) {
  let start;
  function findX(condition, nextState, flag) {
    //因为闭包的原因nextstate会返回给source循环下一次调用的state
    return function (chart) {
      console.log(condition, chart);
      if (condition === chart) {
        return nextState;
      } else if (flag) {
        return start;
      } else {
        return start(chart);
      }
    };
  }
  {
    let state = succed;
    for (let i = pattern.length - 1; i >= 0; i--) {
      state = findX(pattern[i], state, i === 0);
    }
    start = state;
  }

  let state = start;
  for (let i = 0; i < source.length; i++) {
    state = state(source[i]);
    if (state === succed) {
      return i - pattern.length + 1;
    }
  }
  return -1;
}

// function start(char) {
//     if (char === "a") {
//         return findA;
//     } else {
//         return start;
//     }
// }

// function findA(char) {
//     if (char === "b") {
//         return findB;
//     } else {
//         return start(char);
//     }
// }
// function findB(char) {
//     if (char === "c") {
//         return succed;
//     } else {
//         return start(char);
//     }
// }
function succed() {
  throw new Error("");
}

console.log(Strstr("bbabcertyu", "abc"));
