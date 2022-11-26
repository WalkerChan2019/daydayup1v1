let fs = require("fs");
let returnAry = [];
function print(data) {
  returnAry.push(data);
  if (returnAry.length === 3) {
    console.log("读取成功：" + returnAry);
  }
}
fs.readFile("s1.txt", "utf8", function (err, data) {
  point(data);
});
fs.readFile("s2.txt", "utf8", function (err, data) {
  point(data);
});
fs.readFile("s3.txt", "utf8", function (err, data) {
  point(data);
});


