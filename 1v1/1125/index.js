
function wkKmp3(pattern) {
  let next = [0, 0];
  let i = 1,
    j = 0;
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      i++;
      j++;
      next[i] = j;
    } else if (j === 0) {
      i++;
      next[i] = 0;
      // j++; //这里j保持为0
    } else {
      j = next[j];
    }
  }
  return next;
}
function check3(source, pattern) {
  // mississippi
  //  issip
  // const next = [0,1, 2, 3, 4, 2, 3, 4, 5, 0, 1];
  // aabaabaaaa
  // aabaabaaaa
  //
  //
  // const next = wkKmp1(pattern);
  const next = wkKmp3(pattern);
  let j = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === pattern[j]) {
      j++;
      if (j === pattern.length) {
        return i - j + 1;
      }
    } else if (j !== 0) {
      j = next[j]; //就是它
      i--;
    }
  }
  return -1;
}

//------------------------------------
const EOF = Symbol("EOF");
let next = [0, 0]
let i = 1, j = 0;

function check4(source, pattern) {
  let state = start 
  for (let i = 0; i < source.length; i++){
    state = state(source[i]);
  }
}

function start() {
  
}

function isEqual() {
  
}

function jIsZero() {
  
}

function notEqualJnotZero() {

}



function success(input) {
   throw new Error("illegal success call");
}

function fail(input) {
  return fail;
}




module.exports = {
  findSubstr: check4,
};

