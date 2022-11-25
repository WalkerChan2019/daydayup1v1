// needle: abc
function findSubStr(haystack, needle) {
  let state = start;
  for (let i = 0; i < haystack.length; i++) {
    console.log(state.name, i, haystack[i]);
    state = state(haystack[i]);
    if (state == succeed) {
      return i - needle.length + 1;
    }
  }
  return -1;
}
/**
 * i: abababcdef
 * j:   ababc
 *        ^
 *
 */
function start(char) {
  if (char == "a") {
    return findA;
  } else {
    return start;
  }
}
function findA(char) {
  if (char == "b") {
    return findB;
  } else {
    return start(char);
  }
}
function findB(char) {
  if (char == "a") {
    return findC;
  } else {
    return start(char);
  }
}
function findC(char) {
  if (char == "b") {
    return findD;
  } else {
    return start(char);
  }
}
function findD(char) {
  if (char == "c") {
    return succeed;
  } else {
    return findB(char);
  }
}

function succeed() {
  throw Error("illegal call");
}

module.exports = {
  findSubStr,
};


