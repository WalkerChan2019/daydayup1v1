let fs = require("fs");
let ASYNC_READ_NUM = 3;

/**
 * @param {number} times 执行次数
 * @param {function} callback 成功后的回调
 * @returns {function} function
 */
function _after(times, callback) {
  let returnAry = [];
  if (typeof callback !== "function") {
    throw new Error("参数错误");
  }
  return function (data) {
    returnAry.push(data);
    if (returnAry.length === times) {
      callback(returnAry);
    }
  };
}
let print = _after(ASYNC_READ_NUM, function (data) {
  console.log("读取成功：" + data);
});
fs.readFile("s1.txt", "utf8", function (err, data) {
  print(data);
});
fs.readFile("s2.txt", "utf8", function (err, data) {
  print(data);
});
fs.readFile("s3.txt", "utf8", function (err, data) {
  print(data);
});


