
let start;
function success(input) {
  throw new Error("illegal success call");
}

function generateAllStates(pattern) {
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
  let next = [0, 0]; //
  let state;
  for (let i = 0, j = 0; i < pattern.length; i++) {//只一遍循环 
    //同时算出next
    let map = new Map();

    function updateAllStates() {
       map.set(pattern[i], i + 1); // {pattern[i]: i + 1}
       state = findX(map, i !== 0, next[i]); //
       allStates.push(state);
    }
    if (i === 0) {
      updateAllStates();
    }

    if (i > 0) {
      if (pattern[i] === pattern[j]) {
        updateAllStates();
         j++;
         next[i + 1] = j;
      } else if (pattern[i] !== pattern[j] && j === 0) {
         updateAllStates();
         // j++
         next[i + 1] = 0;
       } else {
         i--;
         j = next[j]; //
       }
    }
  }
  allStates.push(success);

  return allStates;
}

function findStr(source, pattern) {
  let allStates = generateAllStates(pattern);


  start = allStates[0];
  let state = start;
  for (let i = 0; i < source.length; i++) {
    state = state(source[i]);
    if (state === success) {
      return i - pattern.length + 1;
    }
  }
  return -1;
}

module.exports = { findStr };
