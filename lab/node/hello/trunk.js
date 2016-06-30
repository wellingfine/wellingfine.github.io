

var thunkify=require('thunkify')


function delyLog(arg1,cb){

	setTimeout(function(){
		cb(arg1)
	},1000)
}

var tDelyLog=thunkify(delyLog)

console.log('before')
tDelyLog('test')(console.log)
console.log('after')