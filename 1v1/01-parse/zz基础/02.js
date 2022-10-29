
// match和exec 
// match是字符串方法，写法为：str.match(reg)
// exec是正则表达式方法，写法为：reg.exec(str)

// 不使用全局匹配时，两者的匹配效果是一样的
// var s = "aaa bbb ccc";
// var reg = /\b\w+\b/; //没有g
// var rs_match = s.match(reg);
// var rs_exec = reg.exec(s);
// console.log("match:", rs_match);
// console.log("exec:", rs_exec);

// 当使用全局匹配时
var s = "aaa bbb ccc";
var reg = /\b\w+\b/g; //有g
var rs_match1 = s.match(reg);
var rs_match2 = s.match(reg);
console.log("match1:", rs_match1);
console.log("match2:", rs_match1);

var rs_exec1 = reg.exec(s);
var rs_exec2 = reg.exec(s);
console.log("exec1:", rs_exec1);
console.log("exec2:", rs_exec2);



// 分组




