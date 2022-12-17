// 今天任务：用node写一个client 代替浏览器 让server正常返回工作
const http = require("node:http"); // 冒号，node协议  提示不去node_modules里找； 其它，如file:  data:html
const fs = require("node:fs");

const server = http.createServer((req, res) => {
   let buffer = fs.readFileSync(__dirname + "/index.html");
  // stream
  res.writeHead(200, {
    'Content-Type':'text/html'
  })
  res.write(buffer.toString())
  res.end();

  // res.write("hello winter ====冬天吃羊肉火锅了===");
  // res.end();
  // let stream=fs.createReadSteam(__dirname + "./index.html")
  // stream.pipe(res);
  // stream.on('end', () =>{
  //   res.end()
  // })
});
server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});
server.listen(8000);
console.log("server started at 8000");
