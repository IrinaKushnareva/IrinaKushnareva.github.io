var pow = require('../js/pow.js');

describe("pow", function() {
  it("pow()", function() {
  	//prepare
  	var result;
  	//act
  	result = pow.exponentResult(2,2);
  	//assert
    expect(result).toBe(4);
  });
  it("pow()", function() {
  	var result;
  	result = pow.exponentResult(3,3);
    expect(result).toBe(27);
  });
  it("pow()", function() {
  	var result;
  	result = pow.exponentResult(3,3);
    expect(result).toBe(27);
  });
  it("pow()", function() {
  	var result;
  	result = pow.exponentResult(2,-2);
    expect(result).toBe(0.25);
  });

  // сейчас тест упадет, чтобы не упал ставим x, и пропускаем его
  xit("pow()", function() {
  	var result;
  	result = pow.exponentResult(2,3);
    expect(result).toBe(27);
  });

});



// var app = require('../js/pow.js');
//
// describe("app", function() {
//   it("sayHello()", function() {
      // var result;
      // result=app.sayHello('Vasya');
//     expect(result).toEqual('Hello, Vasya!');
//   });
  // it("sum()", function(){
    //   var result;
    //   result=app.sum('1,2');
    //   expect(result).toEqual(3);
    // });
// });
