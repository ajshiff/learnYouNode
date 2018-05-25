var http = require('http');
var port = process.argv[2];
http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(request.url);
    response.end();
}).listen(port);