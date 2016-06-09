
define(function(require, exports, module) {

	var me={
		log:function(what){
			console.log(what)
		}
	}
	console.log('defining echo.js')

	// 或者通过 module.exports 提供整个接口
	module.exports = me

});