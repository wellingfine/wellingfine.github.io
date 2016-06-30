var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

console.log('x')
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.use(express.static('./'));

http.listen(80,function(){

})

var user={},socketId={}
io.on('connection', function(socket){

  console.log('a user connected');
  socket.on('disconnect', function(){
  	delete user[socket._name]
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
	// console.log('message: ' + msg);
	var m=msg.match(/^@(.*?) /)||{}
	var name=m[1]
	if(name && user[name]){
		console.log('private')
		// if(name!==socket._name){
			user[name].emit('private message',user[name]._name+':'+msg)
		// }

		socket.emit('chat message',user[name]._name+':'+msg)
	}else{
		var flag=socket._name||socket.id
		io.emit('chat message',flag+':'+msg)
	}
	
  });

  socket.on('set name',function(name,cb){
  	
  	if(user[name]){
  		console.log('user set name failed:'+name);
  		cb && cb(false)
  	}else{
  		socket._name=name
  		user[name]=socket
  		cb && cb(true)
  		console.log('user set name suc:'+name);
  	}
  	
  })
});