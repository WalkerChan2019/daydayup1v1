for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}
//改写成下面这么写更好理解一些
for (var i = 0; i < 5; i++) {
  let j = i;
  setTimeout(function () {
    console.log(j);
  }, 100 * j);
}

