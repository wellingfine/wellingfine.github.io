

console.log('start a')

var b=require('./b.js')

console.log('b.val in module A: '+b.val)

exports.val='a'