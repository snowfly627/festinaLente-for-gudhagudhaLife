const fs   = require('fs');
const http = require('http');

const server = http.createServer();

// リクエスト受付
server.on('request', function(req, res) {

    let data; // 返却htmlデータ
    const basePath = __dirname + "/views/html";

    switch (req.url) {
      case '/top.html':
          data = fs.readFileSync(basePath + "/top.html", "utf8");;
          break;
      case '/favicon.ico':
          data = ""; // do nothing.
          break;
      default:
          data = fs.readFileSync(basePath + "/err.html", "utf8");;
          break;
    }

    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(data);
    res.end();
});

// サーバを待ち受け状態にする
server.listen(3000);
console.log("wait for http://localhost:3000");
