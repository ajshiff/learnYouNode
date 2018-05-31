const http = require('http');
//const map = require('through2-map');
const port = process.argv[2];
http.createServer(function (request, response) {
    if (request.method === 'POST') {
        let dataCollector = '';
        request.setEncoding('utf8').on('data', function (data) {
            data += '';
            dataCollector += data;
        });
        request.on('end', function () {
            dataCollector = dataCollector.toUpperCase();
            //console.log(dataCollector);
            //dataCollector.pipe(response);
        }).pipe().pipe(response);
    }


}).listen(port);