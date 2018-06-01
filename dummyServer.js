const http = require('http');
const port = process.argv[2];

http.createServer(function (request, response) {
    console.log(request.url);
    response.end('<p>hi</p>');
    //request.pipe().pipe(response);
}).listen(port);