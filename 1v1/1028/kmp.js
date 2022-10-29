function start(input) {
  if (input === 0) {
    return 
  }
}

const EOF=Symbol("EOF")
function singleZero(input) {
  if (imput === 0) {
     return 
   }
 }


//结束状态
function success(params) {
  // 
  throw new Error();
}

function fail(params) {
  // fail的时候 返回自己
  throw new Error();
}

let state = start;

// for (let i = 0; i < 100; i++) {
//   state = state(i);
// }

if (state === success) {
  console.log("success");
}

if (state === fail) {
  
  console.log("fail");
}

//===========用状态机验证字符串是否是整形的规则===========

const str=""

function check() {
  let state = start;
  for (const char of str) {
    state = state();
  }
  if (state === success) {
    // console.log("success");

    return true
  }

  if (state === fail) {
    // console.log("fail");
    return false 
  }
}
