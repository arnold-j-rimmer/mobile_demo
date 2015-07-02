var app        = require('express')();
var http       = require('http').Server(app);
var io         = require('socket.io')(http);

var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

//var socket     = require('./lib/socket.js');
//var meetupsController = require('./controllers/meetups-controller');

app.use(bodyParser.json())

//io.sockets.on('connection', socket);

http.listen(3000, function() {
  console.log('I\'m Listening...');
});

io.on('connection', function(socket){
  console.log('a user connected');

  var msg = 'Hi, Welcome to Chat';

  socket.emit('broadcast', msg);

  socket.on('message', function(msg){
    console.log('message sent: ' + msg);
    io.emit('broadcast', msg);
  });
});
