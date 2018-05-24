const http = require('http');
const url0 = process.argv[2];
const url1 = process.argv[3];
const url2 = process.argv[4];
var urlDataCollection = [];
var urlComplete = [false, false, false]

function fetchData(url, id){
    http.get(url, function(response){
        let dataCollector = "";
        response.setEncoding('utf8').on('data', function(data){
            dataCollector += data;
        });
        response.on('end', function(){
            urlDataCollection[id] = dataCollector;
            urlComplete[id] = true;
            //console.log("Success" + id)
            if(urlComplete.every(status => status === true)){
                urlDataCollection.forEach(data => console.log(data));
            } //else {console.log("not finished yet");}
        });
    })
}
fetchData(url0, 0);
fetchData(url1, 1);
fetchData(url2, 2);

//if(urlComplete.every(status => status === true)){console.log("complete!")} else (console.log("not finished yet"))
//urlDataCollection.forEach(data => {console.log(data);});