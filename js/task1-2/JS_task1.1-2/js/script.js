//возведение указанного число в указанную степень
function pow(x, n) {
  var x = prompt("Введите пожалуйста, число!", '');
  var n = prompt("Введите пожалуйста, степень!", '');

  var result = 1;

  if (n < 0) {
    n = -n;
    x = 1/x;
  }

for(var i = 0; i < n; i++) {
  result *= x;

}

return result;
}

var exponentResult = pow ();
console.log ('Результат = ', exponentResult);
