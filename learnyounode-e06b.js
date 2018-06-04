const fs = require('fs');
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
module.exports = function (directory, extension, callbackFunction){
    fs.readdir(directory, 'utf8', function(error, data){
        if (error) 
            return callbackFunction(error);
        else
            callbackFunction(null, data);
        //console.log(data);
        //return data;
        return data.length;
    });
}
