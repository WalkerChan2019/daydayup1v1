
// function start(input) {
  
// }

function find0(input) {
  if (input === "a") {
    return find1;
  } else {
    return find0;
  }
}

function find1(input) {
  if (input === "a") {
    return find1;
  } else if (input === "b") {
    return find2;
  } else {
    return find0;
  }
}

function find2(input) {
  if (input === "a") {
    return find3;
  } else {
    return find0;
  }
}

function find3(input) {
  if (input === "a") {
    return find1;
  } else if (input === "b") {
    return find4;
  } else {
    return find0;
  }
}

function find4(input) {
  if (input === "a") {
    return find5;
  } else {
    return find0;
  }
}

function find5(input) {
  if (input === "c") {
    return find6;
  } else if (input === "b") {
    return find4;
  } else if (input === "a") {
    return find1;
  } else {
    return find0
  }
}

function find6(input) {
  return succeed;
}

function succeed() {
  throw new Error("-----");
}



function strStr(source, pattern) {
  let state = find0;
  for (let i = 0; i < source.length; i++) {
    // console.log(state.name, i, pattern[i]);
    state = state(source[i]);
    if (state === succeed) {
      return i - (pattern.length - 1);
    }
  }
  return -1;
}


console.log(strStr("asbabafabababacasdf", "ababac"));

// module.exports = {
//   strStr,
// }; 


