const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const fileLocation = process.argv[3];

http.createServer(function (request, response) {
    console.log(request);
    console.log('\n');
    console.log(response);
    response.end();
}).listen(port);