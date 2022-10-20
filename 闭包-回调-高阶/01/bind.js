
for (var i = 0; i < 5; i++) {
  setTimeout(
    function (i) {
      console.log(i);
    }.bind(this, i),
    100 * i
  );
}

