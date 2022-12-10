let start = function (c) {
  console.log("start:",c);
  if (c === ' ') {
    return fn1
  } else {
    receiveHttpVersion(c);
    return start 
  }
}
let httpVersion = ""
let statusCode = "";
let httpText = ""

function fn1(c) {
  if (c === " ") {
    return fn2
  } else {
     receiveStatusCode(c);
    return fn1;
  }
}
function fn2(c) {
  if (c === "\r") {
    return fn3;
  } else {
    receiveHttpText(c);
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