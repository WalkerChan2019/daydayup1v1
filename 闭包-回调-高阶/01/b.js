
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  })(i);
}

// 很多人认为这个立即执行的匿名函数就是闭包，其实这么理解是错误的，
// 然后在错误的理解之上又扩展了好多案例，导致其他人看后不知所谓，一头雾水。
// 附上一张Stack Overflow上一位同学的回答截图，我觉得他说的特别有道理：



for (var i = 0; i < 5; i++) {
  function hasNameFn(i) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  }
  hasNameFn(i);
}

// 闭包跟匿名函数没什么直接关系


//改写一下
for (var i = 0; i < 5; i++) {
  (function (j) {
    var _i = j;
    setTimeout(function () {
      console.log(_i);
    }, 100 * _i);
  })(i);
}
// 改写后的匿名函数形参用j来表示，内部定义一个局部变量_i=j。
// 匿名函数执行时传入的是循环时的i，此时定时器里面打印的_i其实是j，匿名函数立即执行，j的值也会确定。
// 所以最后每次定时器的回调函数打印的结果也都是这个已经被匿名函数所确定的值。


