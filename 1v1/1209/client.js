
const net = require("node:net");
const { Parser } = require("./a.js"); 
const ps=new Parser();

const client = net.createConnection({ port: 8000, host: "127.0.0.1" }, () => {
  client.write(
    `POST / HTTP/1.1\r\nHost: 127.0.0.1\r\nContent-Type:application/x-www-form-urlencoded\r\n\r\nfiled1=aaa&code=x\r\n\r\n`
  );
  // client.write(
  //   `GET / HTTP/1.1\r\nHost: 127.0.0.1\r\n\r\n`
  // );
  client.end()
});

client.on("data", (data) => {
  console.log('data:', data.toString());
  let d = data.toString();
  ps(d)
});
client.on("end", () => {
  console.log('disconncted ----');
});



// 流 
// write
// end













function Str(source) {
  let state = start 
  for (let i = 0; i < source.length; i++) {
    
  }
}