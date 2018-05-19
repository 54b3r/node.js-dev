
const EventEmitter = require('events');
const emitter = new EventEmitter();
//lets register the listener for this message-this will be a function
emitter.on('messageLogged', (arg) => {
    console.log('Listener Called', arg)
})

//this will raise an event named messageLogged
emitter.emit('messageLogged', { id:1, url: 'http://'});