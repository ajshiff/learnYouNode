const http = require('http');
const fs = require('fs');
const text = process.argv[2];

var idk = fs.createReadStream(text);
console.log(idk);

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
    request.pipe(map(function (chunk) {
        return chunk.toUpperCase();
    })).pipe(response);
}