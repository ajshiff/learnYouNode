const http = require('http');
const port = process.argv[2];

http.createServer(function (request, response) {
    let dataCollector = '';
    request.setEncoding('utf8').on('data', function (data) {
        data += '';
        dataCollector += data;
    });
    request.on('end', function () {
        dataCollector = dataCollector.toUpperCase();
        console.log(dataCollector);
    });

}).listen(port);