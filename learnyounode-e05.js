//file:///C:/Users/ajshiff/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/path.html#path_path_extname_p
//file:///C:/Users/ajshiff/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/fs.html
const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], function(err, list){
    list = list.reduce((acc, item) => {if(path.extname(item) === '.'+process.argv[3]){acc.push(item);} return acc;}, []);
    list.forEach(item => console.log(item));
});
/* 
//Provided solution//
var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = '.' + process.argv[3];
fs.readdir(folder, function (err, files) {
    if (err) return console.error(err);
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
             console.log(file);
        }
    });
});
*/