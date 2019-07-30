const fs = require('fs');
const http = require('http');
const server = http.createServer();
const path = require('path');
const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript"
};

// リクエスト受け付け
server.on('request', function(req, res) {

  // 返却htmlデータ格納用
  let data;
  const basePath = __dirname + "/views";

  const charCode = "utf8";

  let reqType = {
    "index" : "/html/index.html",
    "top" : "/html/top.html",
    "main" : "/html/main.html",
    "err" : "/html/err.html",
    "css" : "/css/tutorial.css",
    "fav" : "/html/favicon.ico",
    "js" : "/js/index.js"
  };

  if(req.method === 'GET') {
    switch(req.url) {
      case reqType.index:
      case reqType.top:
      case reqType.main:
      case reqType.css:
      case reqType.js:
        data = fs.readFileSync(basePath + req.url, charCode);
        break;
      case reqType.fav:
        data = "";
        break;
      default:
        data = fs.readFileSync(basePath + reqType.err, charCode);
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

      // postデータ格納用
      let postData = {};

      for(let i = 0; i<data.length; i++) {
        let postDataName = data[i].split('=');
        postData[postDataName[0]] = postDataName[1];
      }

      let page = fs.readFileSync(basePath + "/html/postPage.html", "utf8");

      // htmlの一部をpostの情報に変換
      page = page.replace("<%=replace %>", "名前：" + postData.name + "\n" + "年齢：" + postData.age);

      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write(page);
      res.end();
    })
  }

});

// サーバを待ち受け状態にする
server.listen(3000);
console.log("wait for http://localhost:3000");
