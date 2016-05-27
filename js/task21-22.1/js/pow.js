
var pow = {exponentResult : function  (x,n){
           var result = 1;
           if (n < 0) {
             n = -n;
             x = 1/x;
           }
           for (var i=0; i<n; i++){
               result *= x;
           }
           return result;
    }};

    try {
      module.exports = pow;
    } catch (e) {};

    console.log('pow', pow)

// var app = {
// 	sayHello: function(name){
// 		return'Hello,'+name + '!';
// 	},
// 	sum: function(a,b){
// 		return (a+b);
// 	}
// }
//
// module.exports = app;
