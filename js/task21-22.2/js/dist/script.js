
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

$(function () {

	var html = $('#test-tmpl').html();
	var questions = [{
		text: '1. Человеческому мозгу на усвоение новой информации необходимо:',
		answers: ['10 дней;', '21 день;', '30 дней.'],
		correctAnswer: [false, true, false]
	}, {
		text: '2. Человеческий глаз способен различать ... различных цветов:',
		answers: ['10 миллионов;', '1 миллион;', '7 миллионов.'],
		correctAnswer: [true, false, false]
	}, {
		text: '3. Человек чихает со скоростью:',
		answers: ['10 км/ч;', '50 км/ч;', '160км/ч.'],
		correctAnswer: [false, false, true]
	}, {
		text: '4. Кроме человека, воображением наделены следующие животные:',
		answers: ['обезьяны и дельфины;', 'собаки;', 'никто, кроме человека.'],
		correctAnswer: [false, false, true]
	}, {
		text: '5. Норма внимания для человека составляет:',
		answers: ['5-9 объектов;', '9-11 объектов;', '5-7 объектов.'],
		correctAnswer: [true, false, false]
	}];
	localStorage.setItem('testQuestions', JSON.stringify(questions));

	var test = localStorage.getItem('testQuestions');
	var testObj = JSON.parse(test);

	var _testObj = _slicedToArray(testObj, 5);

	var testObj1 = _testObj[0];
	var testObj2 = _testObj[1];
	var testObj3 = _testObj[2];
	var testObj4 = _testObj[3];
	var testObj5 = _testObj[4];
	var text1 = testObj1.text1;
	var answers1 = testObj1.answers1;
	var correctAnswer1 = testObj1.correctAnswer1;
	var text2 = testObj2.text2;
	var answers2 = testObj2.answers2;
	var correctAnswer2 = testObj2.correctAnswer2;
	var text3 = testObj3.text3;
	var answers3 = testObj3.answers3;
	var correctAnswer3 = testObj3.correctAnswer3;
	var text4 = testObj4.text4;
	var answers4 = testObj4.answers4;
	var correctAnswer4 = testObj4.correctAnswer4;
	var text5 = testObj5.text5;
	var answers5 = testObj5.answers5;
	var correctAnswer5 = testObj5.correctAnswer5;


	var testList = tmpl(html, {
		data: testObj
	});
	$('body').append(testList);

	// отмечает только один чекбокс
	$(function (oneCheck) {

		$('.text_ansvers0').click(function () {
			$('.text_ansvers0 input:checked').prop('checked', false);
			$(this).find('input').prop('checked', true);
		});

		$('.text_ansvers1').click(function () {
			$('.text_ansvers1 input:checked').prop('checked', false);
			$(this).find('input').prop('checked', true);
		});

		$('.text_ansvers2').click(function () {
			$('.text_ansvers2 input:checked').prop('checked', false);
			$(this).find('input').prop('checked', true);
		});

		$('.text_ansvers3').click(function () {
			$('.text_ansvers3 input:checked').prop('checked', false);
			$(this).find('input').prop('checked', true);
		});
		$('.text_ansvers4').click(function () {
			$('.text_ansvers4 input:checked').prop('checked', false);
			$(this).find('input').prop('checked', true);
		});
	});

	var answersCheck = function answersCheck() {
		var marked = 0;
		for (var i = 0; i < testObj.length; i++) {
			var inputs = $("input[value='" + i + "']");
			var calculate = 0;
			for (var j = 0; j < inputs.length; j++) {

				var checked = inputs[j].checked;
				var right = questions[i].correctAnswer[j] === true;
				if (checked == right) {
					calculate++;
				}
			}
			if (calculate == testObj[i].correctAnswer.length) {
				marked++;
			}
		}
		var result = (marked === questions.length ? 'Поздравляем, Вы прошли тест!' : 'К сожалению, Вы не прошли тест!' + ' ' + 'Попробуйте еще раз! ') + ' ' + ' ' + ' ' + 'Всего правильных ответов: ' + ' ' + ' ' + marked;
		return result;
	};

	$('button#go').click(function () {
		var modal = $('#modal_form');
		event.preventDefault();
		$('#modal_result').text(answersCheck());

		$('#overlay').fadeIn(400, function () {
			$('#modal_form').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
		});

		$('#modal_close, #overlay, #button').click(function () {
			$('#modal_form').animate({ opacity: 0, top: '45%' }, 200, function () {
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
				$('input').removeAttr('checked');
			});
		});
	});
});
