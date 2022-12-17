const fs = require("node:fs");
const http = require("node:http"); // 冒号，node协议  提示不去node_modules里找； 其它，如file:  data:html

const server = http.createServer((req, res) => {
  // stream

  fs.createReadSteam(__dirname+'./node.md').pipe(res)
});

server.listen(8008);
console.log("server started at 8008");
