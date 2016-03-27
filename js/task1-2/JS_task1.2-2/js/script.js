var arr = [];
arr.length = 5;

for(var i = 0; i < arr.length; i++) {
  arr[i] = prompt('Введите Ваше имя?', '');
}

var userName = prompt('Введите имя пользователя?');

console.log(arr);
console.log(userName);

if (find(arr, userName) !== -1) {
  alert (userName + ', вы успешно вошли!');
} else {
  alert ('Ошибка!');
}

function find(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}
