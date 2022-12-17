const EOF = Symbol("EOF");


function receiveHttpVersion(c) {
  this.store.protocol += c;
}
function receiveHttpCode(c) {
  this.store.code += c;
}
function receiveHttpText(c) {
  this.store.message += c;
}

function start(input) {
  // console.log("start:", input);
  if (input === " ") {
    return statusCode;
  } else {
    receiveHttpVersion.call(this,input);
    return start;
  }
}

function statusCode(input) {
  //  console.log("statusCode:", input);
  if (input === " ") {
    return statusMessage;
  } else {
    receiveHttpCode.call(this,input);
    return statusCode;
  }
}

function statusMessage(input) {
  // console.log("statusMessage: ", input);
  if (input === "\r") {
    return receiveN;
  } else {
    receiveHttpText.call(this,input);
    return statusMessage;
  }
}


function receiveN(input) {// \r\n
  if (input === '\n') {
    return checkEmptyLine;
  } else {
    throw new Error('错误')
  }
}

function checkEmptyLine(input) {// 过渡   换行 \r\n\r\n 
  if (input === '\r') {
    return readBody
  } else {
    return readKey.call(this,input)// call 
  }
}

function readBody() {
  return readBody;
}

function readKey(input) {
  if (input === ":") {
    return readValue;
  } else {
    this.tempK += input;
    // this.tempV+=input 
    return readKey
  }
}

function readValue(input) {
  if (input === "\r") {//cb cr  carrage return / carrage back 
    this.store.header[this.tempK] = this.tempV; // 存储一组
    this.tempK = ""
    this.tempV=""
    return receiveN;
  } else{
    this.tempV += input;
    return readValue
  }
}




class Parser {
  str = "";
  constructor() {
    this.state = start;
    this.tempK = "";
    this.tempV = "";
    this.store = {
      protocol: "",
      code: "",
      message: "",
      header: {
        // date: '',
        // connection: '',
        // keepalive: '',
        // TransferEncoding:''
      },
    };
  }

  write(data) {
    for (let i = 0; i < data.length; i++) {
      // console.log(this.state.name, data[i]); //data, data[i], typeof data[i]
      this.state = this.state(data[i].toString());
    }
    // this.state(EOF);
    // console.log(this.store.protocol, this.store.code, this.store.message);
  }
  end() {
    this.state=this.state(EOF);
  }
}

module.exports = {Parser};

// 文件相关，进程相关，流相关，http 相关
// 互相调的东西是高内聚，低耦合
// 模块直接互相调用的多才需要放在一块儿，如果没有互相调用，那还是别放在一块儿

// 架构师的类型
// 软件，工程，工程+软件
// 擅长高流量的，擅长模块的

// 不放到场景里很难想象，到底为什么这么做
// 里氏代换，凡用到子类的地方，都可以用基类代换，依赖倒置

// 模块本身需要外面调用的 api export 出去
