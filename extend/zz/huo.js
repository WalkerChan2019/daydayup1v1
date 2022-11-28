const isValidTagStr = function (input) {
   let reg = /[a-z]|[A-Z]|[1-5]/g; // true
  // let reg = /[a-zA-Z1-5]/g; //<h1></h1><h5></h5>
  return reg.test(input);
};

console.log(isValidTagStr(" "));