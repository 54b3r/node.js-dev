const os = require('os');


var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//The below shows a concatenated statement
//console.log('Total Memory: ' + totalMemory)
//console.log('Free Memory: ' + freeMemory)

//Practicing template strings
//which does not require concatenation
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);