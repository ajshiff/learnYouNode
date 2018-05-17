//https://github.com/maxogden/art-of-node#callbacks
//https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
const fs = require('fs');
cargs = process.argv;
var number = 0;

/*************************************************************************
 * Calls the readFile function. It is async, so node will continue running
 * the rest of the page whilst this function is attending to it's own 
 * internal components.
 *************************************************************************/
function readFile(callback){
    fs.readFile(cargs[2], 'utf8', function doneReading(err, fileContents){
        if (err) {throw err;}
        callback(fileContents);
    })
}

/*************************************************************************
 * This is the callback function that readFile() will take and run when 
 * readFile finishes reading the file.
 *************************************************************************/
function countNewLines(fileContent) {
    //console.log(fileContent);
    fileContent = fileContent.split("\n");
    console.log(fileContent.length-1);
}

//Main Output
readFile(countNewLines);