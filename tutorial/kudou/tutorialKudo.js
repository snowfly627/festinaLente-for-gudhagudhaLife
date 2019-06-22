const fs = require('fs');
const http = require('http');
const server = http.createServer();
const path = require('path');
const mime = {
  ".html": "text/html",
  ".css": "text/css"
};

// リクエスト受け付け
server.on('request', function(req, res) {
  
  // 返却htmlデータ格納用
  let data;
  const basePath = __dirname + "/views/html";

  switch(req.url) {
    case '/index.html':
      data = fs.readFileSync(basePath + "/index.html", "utf8");;
      break;
    case '/main.html':
      data = fs.readFileSync(basePath + "/main.html", "utf8");;
      break;
    case '/css/tutorial.css':
      data = fs.readFileSync(basePath + "/css/tutorial.css", "utf8");;
      break;
    case '/favicon.ico':
      data = "";
      break;
    default:
      data = fs.readFileSync(basePath + "/err.html", "utf8");;
      break;
  }
  let fullPath = __dirname + req.url;

    res.writeHead(200, {"Conten-Type" : mime[path.extname(fullPath)] || "text/plain"});
    res.write(data);
    res.end();
});

// サーバを待ち受け状態にする
server.listen(3000);
console.log("wait for http://localhost:3000");
