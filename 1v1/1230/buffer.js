
const buf = Buffer.from("一", 'utf16le')
console.log(buf);

const buf1 = Buffer.from("a", "utf8");
console.log(buf1);

const buf2 = Buffer.from([1,2,3,4]);
console.log(buf2);

const buf3 = Buffer.from('emoji','utf16le');
console.log(buf3);


// TypedArray
