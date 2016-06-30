
var express=require('express')
var app = express();
var http = require('http').Server(app);
http.listen(80)
app.use(express.static('./'));
