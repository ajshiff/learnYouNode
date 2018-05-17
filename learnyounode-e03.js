var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
file = file.toString();
file = file.split("");
var counter = 0;
for(x = 0; x < file.length-1; x++){
    if(file[x] === '\n'){counter++}
}
//console.log(file);
console.log(counter);
