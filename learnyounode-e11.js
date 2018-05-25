const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const fileLocation = process.argv[3];
var stream = fs.createReadStream(fileLocation);

http.createServer(function (request, response) {
    stream.pipe(response);
    //response.end();
}).listen(port);