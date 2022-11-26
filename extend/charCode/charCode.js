

var str = "HELLO WORLD";
var n = str.charCodeAt(0);
var m = str.charCodeAt(1);

console.log(n, m);

console.log('0'.charCodeAt(0));
console.log("1".charCodeAt(0));
console.log("9".charCodeAt(0));

// fromCharCode
console.log(String.fromCharCode(65));//A
//  for (let i = 65; i <= 90; i++) {
//    // A-Z
//    let k = String.fromCharCode(i);
//    console.log(k);
// }
 
// charCodeAt() 方法可返回指定位置的字符的 Unicode 编码，返回值是 0 - 65535 之间的整数，表示给定索引处的 UTF-16 代码单元。
// 字符串中第一个字符的位置为 0， 第二个字符位置为 1，以此类推。






