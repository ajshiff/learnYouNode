const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const favicon = fs.createReadStream('./favicon.ico');
http.createServer(function (request, response) {
    console.log(request.url);
    //response.writeHead(200, {'Content-Type' : 'image/png'});
    //favicon.pipe(response);
   if (request.url === '/'){
       response.end('<p>This is the home page because you didn\'t request anything specific.</p>');
   }
    else if (request.url === '/favicon.ico') {
       response.writeHead(200, {'Content-Type' : 'image/x-ico'});
       favicon.pipe(response);
   }
    else {
       response.end(request.url);
   }
}).listen(port);