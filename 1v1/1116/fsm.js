
const EOF=Symbol("EOF")

function checkDec(str) {
  let state = start
  for (let s of str) {
    state=state(s)
  }
  return 
}

function start(c) {
  if (c === "0") {
    return receivedZero
  } else if (
    +c >= 1 &&
    +c <= 9
    // c.charCodeAt(0) - "0".charCodeAt(0) <= 9 &&
    // c.charCodeAt(0) - "0".charCodeAt(0) > 0
  ) {
    return waingForNumber;
  } else {
    return fail;
  }
}

function receivedZero(c) { 

  return fail
}

function waingForNumber(c) {
  if (+c >= 0 && +c <= 9) {
    return waingForNumber;
  } else {
    return fail;
  }
}
function succeed() { }

function failed() { }


checkDec()


function wk() { }

function wk() {}