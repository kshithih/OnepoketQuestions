// Question : Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.

var http = require('http');

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3000);