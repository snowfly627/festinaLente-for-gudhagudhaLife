var http = require('http');
var fs = require('fs');

const PORT = 1234;

var fundedNisa = fs.readFileSync('fundedNisa.html', {encoding: "utf-8"});
var nisa = fs.readFileSync('nisa.html', {encoding: "utf-8"});
var mutualFund = fs.readFileSync('mutualFund.html', {encoding: "utf-8"});

var server = http.createServer(function(req,res) {
	var target = '';
	console.log(req.url);
	switch (req.url){
		case '/':
		case '/fundedNisa.html':
			target = './fundedNisa.html';
			break;
		case '/nisa.html':
			target = './nisa.html';
			break;
		case '/mutualFund.html':
			target = './mutualFund.html';
			break;
		case '/fundedNisa.css':
			target = './fundedNisa.css';
		    break;
		default :
			break;
		}

	if(req.method === 'GET') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
  }　else if(req.method === 'POST') {
    var data = '';
   req.on('data', function(chunk)
	 		{
				data += chunk.map(Number);
				console.log(data);
			})
   }

	if(req.url !== '/favicon.ico') {
		fs.readFile(target,'utf-8',function(err,data){
			res.writeHead(200,{'Content-Type':'text/html'});
			// console.log(data);
			console.log(err);
			res.write(data);
			res.end();
		});
	}
});

server.listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);
console.log('サーバを起動しました');
