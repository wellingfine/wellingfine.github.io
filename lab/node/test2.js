

var http = require("http");

http.createServer(function(req, resp) {
	resp.writeHead(200, {"Content-Type": "text/plain"});
	resp.write("Hello World");
	resp.end();
}).listen(80);




var app = express();
var http = require('http').Server(app);
app.use(express.static('./'));
http.listen(80,function(){

})
