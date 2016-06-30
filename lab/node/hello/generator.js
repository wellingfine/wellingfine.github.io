/*
	
*/

function say(name){
    
    return function(next){

        setTimeout(function(){

            next(name)
        },1000)

    }
    
}


function* agen(){
    console.log('gen start')

    var word1 = yield say('hello')

    console.log('1:'+word1)

    var word2 = yield say('world')

    console.log('2:'+word2)
}

function co(GenFunc,cb){
    // var gen=new GenFunc()
    var gen=GenFunc()
    next()
    function next(data){
        if (gen.next) {
            var ret = gen.next(data)
            console.log(ret)
            if (ret.done) { // 如果结束就执行cb
                cb && cb()
            } else { // 继续next
                ret.value(next)
            }
        }
    }

    return 'start'
}


co(agen,function(){
    console.log('done')
})


//-------------

function* addGen(x){
    console.log('gen start')

    var a = yield x+1

    console.log('1:'+a)

    var b = yield a+2

    console.log('2:'+b) 

    return b
}

var x=addGen(1)

var last=null
function run(){
	x.next(last&&last.value)
}