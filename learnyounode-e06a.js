const printFiles = require('./learnyounode-e06b.js');
const path = require('path');
if(process.argv[2]) {var dir = process.argv[2];} //else {return console.error('No file path found');}
if(process.argv[3]) {var ext = '.' + process.argv[3];} //else {return console.error('No file extension found');}
//if (printFiles) {console.log(printFiles)} else {console.log("Modual Failed");}
var byExtension = function (err, data) {
    if (err) {return console.error(err);}
    else {
        data.forEach(file => {if(path.extname(file) === ext){console.log(file);}});
    }
}
printFiles(dir, ext, byExtension);

