const http = require('http');
const url = process.argv[2];
var stringToChar = [];
var dataString = "";
var isCollectingData;
http.get(url, function(response){
    response.setEncoding('utf8').on('data', function(data){
        //stringToChar = data.split("");
        //stringToChar = stringToChar.reduce((acc, ele) => acc.concat(ele), []);
        dataString += data;
        //console.log(dataString);
    });
    response.on('end',function(){
        console.log("end of stream");
    })
});