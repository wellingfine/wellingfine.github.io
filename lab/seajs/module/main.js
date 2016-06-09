
define(function(require, exports, module) {

	
	console.log('defining main')

	// error can not define a dynamic module
	// var echo=require('./ech'+'o')
	var echo=require('./echo')

	echo.log('call in main')
});