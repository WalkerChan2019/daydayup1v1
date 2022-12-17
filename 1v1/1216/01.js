// const { ReadStream } = require("node:fs");
const fs = require("node:fs");
let rdStream = fs.createReadStream("./file.txt", (e) => {});
// stream.on("data", (data) => {
//   console.log(data.toString());
// });
// stream.on("end", () => {
//   console.log("end---");
// });


let wtSream=fs.createWriteStream('./wk.txt')

// wt.write('9999999999999999999999999')

rdStream.pipe(wtSream)