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
//接收字符 0
function start(char) {
  if (char === "0") {
    //0
    return receivedZero;
  } else if (char >= "1" && char <= "9") {
    //1-9
    return waitingForNumber;
  } else if (char === ".") {
    return afterDot;
  } else {
    return failed;
  }
}
//小数点
function afterDot(char) {
  if (char === EOF) {
    return succeed;
  }
  if (char >= "0" && char <= "9") {
    //第二位数开始，0-9
    return afterDot;
  } else {
    return failed;
  }
}
function receivedZero(char) {
  if (char === EOF) {
    return succeed;
  }
  return failed;
}
function waitingForNumber(char) {
  if (char === EOF) {
    return succeed;
  }
  if (char >= "0" && char <= "9") {
    //第二位数开始，0-9
    return waitingForNumber;
  } else if (char === ".") {
    return afterDot;
  } else {
    return failed;
  }
}
// function waitingForNumber2(char){
//     if(char === EOF){
//         return succeed
//     }
//     if(char>='0' && char <='9'){//第二位数开始，0-9
//         return waitingForNumber2
//     } else {
//         return failed
//     }
// }
function succeed() {
  throw Error("illegal call");
}

function failed() {
  return failed;
}
console.log(checkDec("12.123"));
console.log(checkDec("24.123"));



