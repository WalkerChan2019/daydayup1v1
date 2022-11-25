
const EOF = Symbol("EOF");


function finsStr(source, pattern) {
  let state = start;
  for (let i = 0; i < source.length; i++) {
    state = state(source[i]);
  }
}

function start() {

 }


function findS(input) {
  
}


function findA(input) { }

function findD(input) {}

function success(input) {
  throw new Error("illegal success call");
}


console.log(finsStr(""));
