
const fs= require("node:fs");
const net = require("node:net");
const { Parser } = require("./stateMachine.js"); 
const ps = new Parser();


const client = net.createConnection({ port: 8000, host: "127.0.0.1" }, () => {
  client.write(
    `GET / HTTP/1.1\r\nHost: 127.0.0.1\r\n\r\n`
  );
  client.end()
});


client.on("data", (data) => {
  ps.write(data.toString());
  console.log(ps.store);
});
client.on("end", () => {
  console.log('disconncted ----');
  ps.end()
});



// 流 
// write
// end













function Str(source) {
  let state = start 
  for (let i = 0; i < source.length; i++) {
    
  }
}