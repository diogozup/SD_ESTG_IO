// we need http because we dont have express
const http = require('http')
// we need socketio.. its a 3rd party
const socketio = require('socket.io');



// make an htttp server with node!
const server = http.createServer((req,res)=> {
    res.end("I am connected")
});

const io = socketio(server);


server.listen(8000);
