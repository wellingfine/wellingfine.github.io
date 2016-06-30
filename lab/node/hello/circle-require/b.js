

console.log('start b')

var a=require('./a.js')

console.log('a.val in module B: '+a.val)

exports.val='b'