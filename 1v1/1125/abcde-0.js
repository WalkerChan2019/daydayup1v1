const EOF = Symbol("EOF");

function finsStr(source, pattern) {
  let state = start;
  for (let i = 0; i < source.length; i++) {
    console.log(state.name,i,source[i]);
    state = state(source[i]);
    if (state===success) {
      return i-pattern.length+1
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
     return start(input)
   }
}

function findB(input) {
   if (input == "c") {
     return findC;
   } else {
     return start(input);
   }
}

function findC(input) {
  if (input == "d") {
    return findD;
  } else {
    return start(input);
  }
}

function findD(input) {
  if (input == "e") {
    return success;
  } else {
    return start(input);
  }
}


function success(input) {
  throw new Error("illegal success call");
}

// console.log(finsStr("asabcd","abc"));
console.log(finsStr("xyabcde", "abcde"));
// console.log(finsStr("asababcd", "ababc"));