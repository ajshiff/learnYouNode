const http = require('http');
const url = process.argv[2];
http.get(url, function (response) {
    response.setEncoding('utf8').on('data', function(data){console.log(data);});;
    //response.on('data', function(data){console.log(data);});
    //console.log(response.statusCode);
    //console.log(response);
});