const printFiles = require('./learnyounode-e06b.js');
/************************************************************************
 * Store Console Args in Vars, and error Handling
 ************************************************************************/
if (process.argv[2]) {
    var dir = process.argv[2];
} else {
    return console.error('Enter a File Path.');
}
if (process.argv[3]) {
    var ext = process.argv[3];
} else {
    return console.error('Enter an Extension.');
}
if (!printFiles) {
    console.log("Modual Failed");
}

/************************************************************************
 * callback function
 ************************************************************************/
var byExtension = function (err, data) {
    if (err) {
        console.error(err);
    } else {
        data.forEach(file => {
            console.log(file);
        });
    }
};
/************************************************************************
 * main program
 ************************************************************************/
printFiles(dir, ext, byExtension);