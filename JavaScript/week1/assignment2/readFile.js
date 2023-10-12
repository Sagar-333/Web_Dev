var fs = require('fs');

fs.readFile('JavaScript/week1/assignment2/read.txt', 'utf8', function (err,data) {
    console.log(data);
});

console.log('readFile Called');