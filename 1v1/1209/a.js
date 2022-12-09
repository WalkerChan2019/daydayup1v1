let start = function (c) {
  console.log("start:",c);
  
  if (c === ' ') {
    return fn1
  } else {
    return start 
  }
}
let httpVersion = ""
let statusCode = "";
let httpText = ""

function fn1(c) {
  if (c === " ") {
    receiveHttpVersion(c);
    return fn2
  } else {
    return fn1;
  }
}
function fn2(c) {
  if (c === "\r") {
    receiveStatusCode(c);
    // receiveHttpText(c);
    return fn3;
  } else {
    return fn2;
  }
}
function fn3(c) {
  return fn3;
}
function receiveHttpVersion(c) {
  httpVersion+=c
}

function receiveStatusCode(c) {
  statusCode+=c 
}
function receiveHttpText(c) {
  httpText += c;
}
class Parser {
  constructor() {
    this.state = start;
  }

  write(data) {
    for (let i = 0; i < data.length; i++) {
      this.state = this.state(data[i]);
    }
  }

  end() {}
}


module.exports = { Parser };