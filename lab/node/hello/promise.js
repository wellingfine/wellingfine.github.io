
var say = function (name){
  return new Promise(function (resolve, reject){
  	setTimeout(function(){
  		if (name.length<5) {
  			reject('too short');
  		}
  		resolve(name);
  		
      	
  	},1000)
  });
};

var gen = function* (){
  var f1 = yield say('helo');
  console.log(f1);
  var f2 = yield say('helo 2');
  
  console.log(f2);
};

run =function(){
	var g=gen()

	function next(data){
		var result = g.next(data);
		if (result.done) return result.value;
		result.value.then(function(data){
			next(data);
		});
	}
	next()
}

;