// 匹配浮点型数字


let re =/((?:(?:[1-9][0-9]*|0)(?:\.[1-9][0-9]*))|(?:(?:[1-9][0-9]*|0)\.?)|(?:\.[1-9][0-9]*))|(\+)|(-)|(\*)|(\/)|(\s+)|(\()|(\))/g;

//拆分：
// 0 10 10.10 
const a = /(?:(?:[1-9][0-9]*|0)(?:\.[1-9][0-9]*))/g;

// 10.  5.  0.  
const b = /(?:(?:[1-9][0-9]*|0)\.?)/g;

// .20 
const c = /(?:\.[1-9][0-9]*)/g;

// 加减乘除 空白 括号
const d = /(\+)|(-)|(\*)|(\/)|(\s+)|(\()|(\))/g;

// 正则里面 “?:” 代表什么？


// let s = "1.1 + 2.2 - 3.31 * 4. / .5  ";
let s = "(5 + 4+5 + 3 + 2 + 1) * 5 * 5";
let matched = re.exec(s);

// 对比 
console.log(re.exec(s));
console.log(re.exec(s));
console.log(re.exec(s));
console.log(re.exec(s));
// console.log(s.match(re));

// string.replace() string.split(), array.split(), string.match() string.search()都可以把reg表达式作为参数





