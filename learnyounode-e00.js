const http = require('http');
const fs = require('fs');
const text = process.argv[2];

var idk = fs.createReadStream(text);
console.log(idk);