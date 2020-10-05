
var events = require('events');
 
var eventEmitter = new events.EventEmitter();
function log(message){
    console.log(message,'message');
    eventEmitter.emit('messageLogged', message)

}

var url ="http://mylogger.io/log";


module.exports.log =log;
module.exports.endPoint =url;