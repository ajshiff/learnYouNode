const http = require('http');
const url = process.argv[2];
var stringToChar = [];

http.get(url, function(response){
    //response.setEncoding('utf8').on('data', function(data){
        stringToChar = response.split("");
        //stringToChar = stringToChar.reduce((acc, ele) => acc.concat(ele), []);
        console.log(stringToChar);
    //});
});