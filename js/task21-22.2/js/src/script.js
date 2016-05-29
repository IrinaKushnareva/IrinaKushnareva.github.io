
'use strict';
$(function () {

const html = $('#test-tmpl').html();
let questions = [
		{
			text: '1. Человеческому мозгу на усвоение новой информации необходимо:',
			answers: ['10 дней;', '21 день;', '30 дней.'],
			correctAnswer: [false, true, false]
	},
		{
			text: '2. Человеческий глаз способен различать ... различных цветов:',
			answers: ['10 миллионов;', '1 миллион;', '7 миллионов.'],
			correctAnswer: [true, false, false]
		},
		{
			text: '3. Человек чихает со скоростью:',
			answers: ['10 км/ч;', '50 км/ч;', '160км/ч.'],
			correctAnswer: [false, false, true]
	},
	{
		text: '4. Кроме человека, воображением наделены следующие животные:',
		answers: ['обезьяны и дельфины;', 'собаки;', 'никто, кроме человека.'],
		correctAnswer: [false, false, true]
	},
	{
		text: '5. Норма внимания для человека составляет:',
		answers: ['5-9 объектов;', '9-11 объектов;', '5-7 объектов.'],
		correctAnswer: [true, false, false]
	}
	];
	localStorage.setItem('testQuestions', JSON.stringify(questions));

	const test = localStorage.getItem('testQuestions');
	const testObj = JSON.parse(test);

	let [testObj1, testObj2, testObj3, testObj4, testObj5] = testObj;
	let {text1, answers1, correctAnswer1} = testObj1;
	let {text2, answers2, correctAnswer2} = testObj2;
	let {text3, answers3, correctAnswer3} = testObj3;
	let {text4, answers4, correctAnswer4} = testObj4;
	let {text5, answers5, correctAnswer5} = testObj5;


	const testList = tmpl(html, {
		data: testObj
	});
	$('body').append(testList);

// отмечает только один чекбокс
	$(function(oneCheck) {

  	$('.text_ansvers0').click(function() {
    	$('.text_ansvers0 input:checked').prop('checked', false);
    	$(this).find('input').prop('checked', true);
  	});

		$('.text_ansvers1').click(function() {
	    $('.text_ansvers1 input:checked').prop('checked', false);
	    $(this).find('input').prop('checked', true);
	  });

		$('.text_ansvers2').click(function() {
			$('.text_ansvers2 input:checked').prop('checked', false);
			$(this).find('input').prop('checked', true);
		});

		$('.text_ansvers3').click(function() {
			$('.text_ansvers3 input:checked').prop('checked', false);
			$(this).find('input').prop('checked', true);
		});
		$('.text_ansvers4').click(function() {
			$('.text_ansvers4 input:checked').prop('checked', false);
			$(this).find('input').prop('checked', true);
		});

	});

	let answersCheck = () => {
	let marked = 0;
	for (let i = 0; i < testObj.length; i++) {
		let inputs = $("input[value='" + i + "']");
		let calculate = 0;
		for (let j = 0; j < inputs.length; j++) {

			let checked = inputs[j].checked;
			let right = questions[i].correctAnswer[j] === true;
			if (checked == right) {
				calculate++
			}
		}
		if (calculate == (testObj[i].correctAnswer.length)) {
			marked++;
		}
	}
	let result = ((marked === questions.length) ? 'Поздравляем, Вы прошли тест!' : 'К сожалению, Вы не прошли тест!'+ ' '+ 'Попробуйте еще раз! ') + ' ' + ' ' + ' ' +  'Всего правильных ответов: ' + ' '+ ' ' + marked;
	return result;
	};

$('button#go').click( function(){
	let modal = $('#modal_form');
	event.preventDefault();
	$('#modal_result').text(answersCheck());

	$('#overlay').fadeIn(400,
		function(){
			$('#modal_form')
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 200);
	});

	$('#modal_close, #overlay, #button').click( function(){
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
					$('input').removeAttr('checked');
				});
	});

});

});
