var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var nsp = io.of('/my-namespace');

nsp.on('connection', function(socket){
  console.log('Socket connection :', socket);
  socket.on('chat', function(data) {
    io.emit('s2c chat', data);
  });
});

//app.listen(3000);
server.listen(3000, () => {
  console.log('Socket IO server listening on port 3000');
});
