const EOF = Symbol('EOF')
class Parser {
    constructor(data) {
        this.state = start
        this.store = {
            httpVersion: '',
            httpCode: '',
            httpText: '',
            head: {},
            length: '',
            body: '',
            tail: ''
        }
        this.key = ''
        this.value = ''
    }
    write(data) {
        for (let i = 0; i < data.length; i++) {
            this.state = this.state(data[i])
        }
        console.log(this.store)
    }
    end() {
        this.state = this.state(EOF)
        // return this.state == succeed
    }
    receivedHttp(c) {
        this.store.httpVersion+=c
    }
    receivedCode(c) {
        this.store.httpCode+=c
    }
    receivedText(c) {
        this.store.httpText+=c
    }
    receivedKey(c) {
        this.key+=c
    }
    receivedValue(c) {
        this.value+=c
    }
    receivedLength(c) {
        this.store.length+=c
    }
    receivedBody(c) {
        this.store.body+=c
    }
    receivedTail(c) {
        this.store.tail+=c
    }
}
function start(c) {
    if (c === EOF) {
        return succeed // 默认空字符是正确的
    } else if (c === ' ') {
        return fn1
    } else {
        this.receivedHttp(c)
         return start
    }
}
function fn1(c) {
    if (c === EOF) {
        return succeed
    } else if (c === ' ') {
        return fn2
    } else {
        this.receivedCode(c)
         return fn1
    }
}
function fn2(c) {
    if (c === EOF) {
        return succeed
    } else if (c === '\r') {
        // return start
        return receiveN
    } else {
        this.receivedText(c)
         return fn2
    }
}
function receiveN(c) {
    // console.log(c, this.store, 123)
    if (c == '\n') {
        return checkEmpty
    } else {
        throw new Error('receiveN')
    }
}
function checkEmpty(c) {
    if (c == '\r') {
        return fn5
    } else {
        this.key = ''
        return fn3.call(this,c)
    }
}
function fn3(c) {
    if (c === EOF) {
        return succeed
    } else if (c === ':') {
        // return start
        return receiveSpace
    } else {
        this.receivedKey(c)
         return fn3
    }
}
function receiveSpace(c) {
    if (c == ' ') {
        this.value = ''
        return fn4
    }
}
function fn4(c) {
    if (c === EOF) {
        return succeed
    } else if (c === '\r') {
        this.store.head[this.key] = this.value
        // this.key = ''
        return receiveN
    } else {
        this.receivedValue(c)
         return fn4
    }
}
function fn5(c) {
    console.log(c, 'fn5')
    if (c === EOF) {
        return succeed
    } else if (c == '\r' || c == '\n'){
        return fn5
    } else {
        this.receivedLength(c)
        return fn6
    }
}
function fn6(c) {
    console.log(c, 'fn6')
    if (c === EOF) {
        return succeed
    } else if (c == '\r' || c == '\n'){
        return fn6
    } else {
        this.receivedBody(c)
        return fn7
    }
}
function fn7(c) {
    console.log(c, 'fn7')
    if (c === EOF) {
        return succeed
    } else if (c == '\r' || c == '\n'){
        return fn5
    } else {
        this.receivedTail(c)
        return succeed
    }
}
function succeed() {
    return succeed
}
module.exports = {
    Parser
}