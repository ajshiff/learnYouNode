const net = require('net');
const port = process.argv[2];
var tempDate = new Date();
//tempDate.setHours();
var date = {
    year: leftPad(tempDate.getFullYear(), 4),
    month: leftPad(tempDate.getMonth()+1, 2),
    date: leftPad(tempDate.getDate(), 2),
    hour: leftPad(tempDate.getHours(), 2),
    minute: leftPad(tempDate.getMinutes(), 2)
};

function leftPad(value, pad = 2, padWith = '0'){
    value += '';
    let paddedValue = value;
    //console.log(value.length);
    for (var x = value.length; x < pad; x++) {
        paddedValue = padWith + paddedValue;
    }
    return paddedValue;
}

function dateToString (thisDate) {
    return (thisDate.year + "-" + thisDate.month + "-" + thisDate.date + " " + 
            thisDate.hour + ":" + thisDate.minute);
}
function displayDate(item){
    console.log(item);
}
//displayDate(dateToString(date));
net.createServer(function(socket){
    socket.write(dateToString(date) + '\n');
    socket.end();
    return;
}).listen(port);

