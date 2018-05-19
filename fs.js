
const fs = require('fs');

//we simply tested the synchronous method
//const files = fs.readdirSync('./');
//console.log(files);
 
const files2 = fs.readdir('./', function(err, files) {
    //below err handling is not how real world err handling will be, this is just for this example
    if (err) console.log('Error', err);
    else console.log('Result', files);
})

