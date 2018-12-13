var fs=require('fs');

var readMe=fs.readFileSync('exp.txt','utf8');
fs.writeFileSync('writeMe.txt',readMe);
console.log(readMe);