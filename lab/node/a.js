
/*
module.exports=function(){
	console.log('a init')
}
*/

exports.foo=function(){
	console.log('a foo ')
}

module.exports={
	foo:function(){
		console.log('a module.exports.foo')
	}
}



exports.foo=function(){

}

exports={
	foo2:function(){

	}
}