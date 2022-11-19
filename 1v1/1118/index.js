const EOF = Symbol("EOF");
//十进制小数
//js可以接收.1=0.1  1.=1
function checkDec(str) {
  let state = start;
  for (const s of str) {
    console.log(state.name, s);
    state = state(s);
  }
  state = state(EOF);
  if (state === succeed) {
    return true;
  } else {
    return false;
  }
}



