const fs = require('fs');
const path = require('path');
/*
module.exports =  
{
    byExtension: function (directory, extension, callbackFunction){
        fs.readdir(directory, function(error, data){
            if (error)
                callbackFunction(error);
            else
                callbackFunction(error, data);
        });
    }
};
*/
module.exports = function (directory, extension, callbackFunction) {
    fs.readdir(directory, 'utf8', function (error, data) {
        if (error)
            return callbackFunction(error);
        else
            var dataMatch = data.reduce((acc, file) => {
                //console.log(acc);
                //console.log(file);
                if (path.extname(file) === '.' + extension) {
                    acc.push(file);
                }
                return acc;
            }, []);
        //console.log(dataMatch);
        return callbackFunction(null, dataMatch);
    });
}