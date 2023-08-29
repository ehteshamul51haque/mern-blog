//Read the query string

const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end();
}).listen(8080);

console.log('Server running at port 8080');

//if we type http://localhost:8080/summer output will be /summer