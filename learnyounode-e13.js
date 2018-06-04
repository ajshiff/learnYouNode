const http = require('http');
const url = require('url');
const port = process.argv[2];

http.createServer(function (request, response) {
    if (request.method === "GET") {
        //console.log(request.url);
        var requestInfo = url.parse(request.url, true);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        let outgoing;
        if (requestInfo.pathname === '/api/parsetime') {
            let date = new Date(requestInfo.query.iso);
            outgoing = {
                'hour': date.getHours(),
                'minute': date.getMinutes(), 
                'second': date.getSeconds()
            };
            // console.log(what);
            // console.log('YOU MADE IT TO ISO LAND');

        } else if (requestInfo.pathname === '/api/unixtime') {
            let date = new Date(requestInfo.query.iso).getTime();
            outgoing = {
                unixtime : date
            };
            // console.log(what);
            // console.log('UNIX LAND IS YOUR HOME TURF');
        } else {
            response.end("<p>That place doesn't exist</p>");
            return;
        }
        response.end(JSON.stringify(outgoing));
    }
}).listen(port)