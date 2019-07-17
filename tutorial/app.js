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
  const basePath = __dirname + "/views";

  if(req.method === 'GET') {
    switch(req.url) {
      case '/html/index.html':
        data = fs.readFileSync(basePath + "/html/index.html", "utf8");
        break;
      case '/html/top.html':
        data = fs.readFileSync(basePath + "/html/top.html", "utf8");
        break;
      case '/html/main.html':
        data = fs.readFileSync(basePath + "/html/main.html", "utf8");
        break;
      case '/css/tutorial.css':
        data = fs.readFileSync(basePath + "/css/tutorial.css", "utf8");
        break;
      case '/html/favicon.ico':
        data = "";
        break;
      default:
        data = fs.readFileSync(basePath + "/html/err.html", "utf8");
        break;
    }
    let fullPath = __dirname + req.url;

    res.writeHead(200, {"Content-Type" : mime[path.extname(fullPath)] || "text/plain"});
    res.write(data);
    res.end();
  } else if (req.method === 'POST') {
    req.on('data', function(chunk) {data = chunk}).on('end', function() {
      data = data.toString();
      data = data.split('&');

      let array = {};

      for(let i = 0; i<data.length; i++) {
        let _data = data[i].split('=');
        array[_data[0]] = _data[1];
      }

      let page = fs.readFileSync(basePath + "/html/postPage.html", "utf8");

      // htmlの一部をpostの情報に変換
      page = page.replace("<%=replace %>", "名前：" + array.name + "\n" + "年齢：" + array.age);
      
      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write(page);
      res.end();
    })
  }

});

// サーバを待ち受け状態にする
server.listen(3000);
console.log("wait for http://localhost:3000");
