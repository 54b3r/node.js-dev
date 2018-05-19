const EventEmitter = require('events');
 
//Import Logger class and create logger object to be used as EventEmitter
const Logger = require('./logger')
const logger = new Logger();
//listen for Event named messageLogged
logger.on('messageLogged', (arg) => {
    console.log('Listener Called', arg)
})

logger.log('message');