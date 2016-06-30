

var a= require('./a.js')
console.log(a)

a.foo()


var a2=require('./a.js')
// a2.foo()


setTimeout(function(){
	console.log('test')
},800)