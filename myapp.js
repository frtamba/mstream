var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('rtmp://195.90.214.31/:1935/live/stream!');
}).listen(8080);