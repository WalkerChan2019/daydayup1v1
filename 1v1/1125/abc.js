

function findStr(source, pattern) {
  let state = start;
  for (let i = 0; i < source.length; i++) {
    state = state(source[i]);
    if (state === success) {
      return i - pattern.length + 1;
    }
  }
  return -1;
}

function start(input) {
  if (input == "a") {
    return findA;
  } else {
    return start
  }
}

function findA(input) {
   if (input == "b") {
     return findB;
   } else {
     return start;
   }
}

function findB(input) {
   if (input == "c") {
     return success
   } else {
     return start;
   }
}


function success(input) {
  throw new Error("illegal success call");
}

// console.log(finsStr("asabcd","abc"));

// console.log(finsStr("ababcd", "abc"));//不支持

module.exports = { findStr };