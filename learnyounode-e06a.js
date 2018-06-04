const printFiles = require('./learnyounode-e06b.js');

if (process.argv[2]) {
    var dir = process.argv[2];
} //else {return console.error('No file path found');}
if (process.argv[3]) {
    var ext = process.argv[3];
} //else {return console.error('No file extension found');}
//if (printFiles) {console.log(printFiles)} else {console.log("Modual Failed");}
var byExtension = function (err, data) {
    if (err) {
        console.error(err);
    } else {
        data.forEach(file => {
            console.log(file);
        });
    }
};
printFiles(dir, ext, byExtension);