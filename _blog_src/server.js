const Koa = require('koa');
const static = require('koa-static')

const app = new Koa();

app.use(static(__dirname + '/../'))

var port=5000
app.listen(port, function () {
	console.log('koa listening port:'+port)
});