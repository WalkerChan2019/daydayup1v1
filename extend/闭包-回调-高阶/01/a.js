//第一步直把内部inner这个具名函数改为匿名函数并直接return， 结果同样是10
function box() {
  var a = 10;
  return function () {
    console.log(a);
  };
}
var outer = box();
outer(); //10
//第二步把外部var outer = box()改成立即执行的匿名函数
var outer = (function () {
  var a = 10;
  return function () {
    console.log(a);
  };
})();
//outer 作为立即执行匿名函数执行结果的一个接收，这个执行结果是闭包，outer等于这个闭包。
//执行outer就相当于执行了匿名函数内部return的闭包函数
//这个闭包函数可以访问到匿名函数内部的私有变量a，所以打印出10
outer(); //10
