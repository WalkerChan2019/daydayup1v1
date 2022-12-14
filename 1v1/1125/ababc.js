
function finsStr(source, pattern) {
  let state = start;
  for (let i = 0; i < source.length; i++) {
    console.log(state.name, i, source[i]);
    state = state(source[i]);
    if (state === success) {
      return i - pattern.length + 1;
    }
  }
  return -1;
}
// abababcde
// ababc
//     ^
// 

function start(input) {
  if (input == "a") {
    return findA;
  } else {
    return start;
  }
}

function findA(input) {
  if (input == "b") {
    return findB;
  } else {
    return start(input); // 调整
  }
}

function findB(input) {
  if (input == "a") {
    return findC;
  } else {
    return start(input);// 调整
  }
}

function findC(input) {
  if (input == "b") {
    return findD;
  } else {
    return start(input); // 调整
  }
}

function findD(input) {
  if (input == "c") {
    return success;
  } else {
    return findB(input);// reconsume    
  }
}

function success(input) {
  throw new Error("illegal success call");
}


// console.log(finsStr("abababcde", "ababc"));
// console.log(finsStr("xyz---ababcde", "ababc"));

module.exports= { finsStr };