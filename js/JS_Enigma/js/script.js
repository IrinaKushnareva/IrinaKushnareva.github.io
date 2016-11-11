// Игра где пользователь получает бесконечные
// попытки угадать слово (например "Зимой и летом одним цветом?").
//
// Создаем два глобальных массива:
// один содержит буквы слова (например, 'Е', 'Л', 'К', 'А'),
// и второй содержит текущие угаданные буквы (например, в начале будет содержать - '_', '_', '_', '_' и в конце 'Е', 'Л', 'К', 'А').

var wordLetters = ['Е', 'Л', 'К', 'А'];
var guessedLetters = ['_', '_', '_', '_'];
// Начнем с суммы вознаграждения в $0
var total = 0;
var alreadyGuess = 0;

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function randomBonus() {
    return randomInteger(10, 50);
}

// Перебераем буквы слова и проверяем есть ли угадываемая буква в слове.
function guessLetter(letter) {
    var isGuess = false;
    var needGuess = 0;
    var bonus = randomBonus();

    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i].toUpperCase() === letter.toUpperCase()) {
            // Если буква совпадает, изменяем массив с угаданными буквами и помещаем букву правильную позицию.
            guessedLetters[i] = letter;
            isGuess = true;

            // Вознаграждение увеличивается за угаданную букву.

            // Случайная сумма может быть удвоена, если буквы угадываются дважды к ряду
            if (alreadyGuess === 2) {
                total += bonus * 2;
            } else {
                total += bonus;
            }
            alreadyGuess++;
            continue;
        }
        // Так же сообщаем сколько осталось угадать букв,
        if (guessedLetters[i] === '_') {
            needGuess++;
        }
    }

    if (isGuess) {
        // и поздравим пользователя, если он угадал букву.
        console.log('Вы угадали букву ', letter);
        document.getElementById("entry").value;
        var rightGuess = document.createElement('div');
        var br = document.createElement('br');
        rightGuess.className = "add";
        rightGuess.innerHTML = 'Вы угадали букву ' + '[' + letter + ']';
        lettersInput.appendChild(rightGuess);
        lettersInput.appendChild(br);

    } else {
        alreadyGuess = 0;
        console.log('Вы не угадали букву! Попробуйте еще раз!');
        document.getElementById("entry").value;
        var notGuess = document.createElement('div');
        notGuess.className = "add";
        var br = document.createElement('br');
        notGuess.innerHTML = 'Буквы ' + '[' + letter + ']' + ' нет в этом слове. Попробуйте еще раз!';
        lettersInput.appendChild(notGuess);
        lettersInput.appendChild(br);

    }
    // и если все буквы отгаданы, то поздравить пользователя с этим событием.
    if (needGuess === 0) {
        // Когда слово угадано сообщаем сумму вознаграждения
        console.log('Вы угадали слово', total);
        document.getElementById("entry").value;
        var wordGuess = document.createElement('div');
        wordGuess.className = "add";
        wordGuess.innerHTML = 'Вы угадали слово! Ваша сумма вознаграждения ' + total;
        lettersInput.appendChild(wordGuess);
    }

    // Когда завершится перебор выводим текущие угаданные буквы ('Е___')
    console.log(guessedLetters.join(''));
    document.getElementById("entry").value;
    var rightGuess = document.createElement('div');
    rightGuess.className = "add";
    var br = document.createElement('br');
    rightGuess.innerHTML = 'Вы угадали следующие буквы ' + '[' + guessedLetters.join('') + ']';
    lettersInput.appendChild(rightGuess);
    lettersInput.appendChild(br);
}


$('button#start').click(function() {
    var modal = $('#modal_form');
    event.preventDefault();

    $('#overlay').fadeIn(400,
        function() {
            $('#modal_form')
                .css('display', 'block')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
        });

    $('#go').click(function(e) {
        $('#lettersInput').trigger('reset');
    });

    $('#modal_close, #button').click(function() {
        $('#modal_form')
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function() {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                    $('.add').detach();
                });
    });

});
