const fs = require('fs');
const path = require('path');

module.exports = function (directory, extension, callbackFunction) {
    fs.readdir(directory, 'utf8', function (error, data) {
        if (error)
            return callbackFunction(error);
        else
            var dataMatch = data.reduce((acc, file) => {
                if (path.extname(file) === '.' + extension) {
                    acc.push(file);
                }
                return acc;
            }, []);
        return callbackFunction(null, dataMatch);
    });
};