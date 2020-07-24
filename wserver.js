var http = require('http');
var dt = require('./myfirstmodule');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demo1.html', function(err,data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
