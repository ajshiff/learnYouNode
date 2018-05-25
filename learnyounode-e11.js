const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const fileLocation = process.argv[3];
//let stream = fs.createReadStream(fileLocation);
//console.log(stream);
http.createServer(function (request, response) {
    //console.log(request);
    //console.log('\n');
    //console.log(response);
    //response.write(stream)
    response.write('Hello Internet');
    //stream.pipe(response);
    fs.createReadStream(fileLocation.pipe(response));
    //fs.createReadStream((process.argv[3]).pipe(response));
    response.end();
}).listen(port);