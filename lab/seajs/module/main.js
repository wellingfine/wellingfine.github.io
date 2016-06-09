
define(function(require, exports, module) {


	console.log('defining main')

	
	

	
	function getEcho(){
		// error can not define a dynamic module
		// var echo=require('./ech'+'o')

		var echo=require('./echo')


		echo.log('call in main')
	}

	// when comment ,the module still loaded
	// setTimeout(getEcho,30000)
});