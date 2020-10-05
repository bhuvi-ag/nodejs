var logger = require('./logger');
var path  =require('path');
var os = require('os');
var fs = require('fs');
var events = require('events');
var http =require('http');
 
var eventEmitter = new events.EventEmitter();

eventEmitter.on('messageLogged',function(arg){
    console.log('listioner called',arg)
})
var server =http.createServer((req,res)=>{
    if(req.url ===  '/'){
        res.write('Hello world');
        res.end();
    }
});

server.listen(3000);
console.log('listenting the port 3000')

logger.log('HIIII')







//console.log(path.parse(__dirname),'name');
//console.log(os.freemem(),'free memory');
// var totalmemeory = os.totalmem();
// var freemem  = os.freemem();

//console.log(`total memory ${totalmemeory}`);
//console.log(`free memory ${freemem}`);

 //logger =1;
 //var files = fs.readdirSync('./');
 //console.log(files,'files');

  fs.readdir('./',function(err,files){
    if(err) console.log('error',err);
    else console.log('result',files);
  });

 logger.log('message');