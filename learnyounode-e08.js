const http = require('http');
const url = process.argv[2];
var stringToChar = [];
var dataString = "";
var isCollectingData;
http.get(url, function(response){
    response.setEncoding('utf8').on('data', function(data) {dataString += data;});
    response.on('end', function(){
        stringToChar = dataString.split("");
        console.log(stringToChar.length);
        console.log(dataString);
    })
});