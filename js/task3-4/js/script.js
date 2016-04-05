var objTest = {
  container : false,
  questions: [
    {
      title: '1. Вопрос №1',
      ansvers: [
        {
          text: 'Вариант ответа №1',
          correct: true
        },
        {
          text: 'Вариант ответа №2',
          correct: false
        },
        {
          text: 'Вариант ответа №3',
          correct: false
        }
      ]
    },
    {
      title: '2. Вопрос №2',
      ansvers: [
        {
          text: 'Вариант ответа №1',
          correct: true
        },
        {
          text: 'Вариант ответа №2',
          correct: false
        },
        {
          text: 'Вариант ответа №3',
          correct: false
        }
      ]
    },
    {
      title: '3. Вопрос №3',
      ansvers: [
        {
          text: 'Вариант ответа №1',
          correct: false
        },
        {
          text: 'Вариант ответа №2',
          correct: true
        },
        {
          text: 'Вариант ответа №3',
          correct: false
        }
      ]
    }

  ],

  createWrapper: function(parentElem) {
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    parentElem.appendChild(wrapper);
    this.wrapper = wrapper;

  },

  createTitle: function(wrapper,titleName) {
      var title = document.createElement('h2');
      title.className	= 'title text-center';
  	  title.innerHTML = 'Тест по программированию';
  	  var wrapper = document.querySelector('.wrapper');
  	  wrapper.appendChild(title);
    },

  createContainer: function(wrapper,container) {
      var container = document.createElement('div');
      container.className = 'container';
      var wrapper = document.querySelector('.wrapper')
      wrapper.appendChild(container);
        // this.container = container;
      },


  generateQuestions: function () {

    for (var i = 0; i < this.questions.length; i++) {

        var questions = this.questions[i];
        console.log(questions);
        container = document.querySelector('.container');

        var question = document.createElement('h4');
        question.innerHTML = '<strong>' + questions.title + '</strong>';
        question.title = 'questiontitle';
        question.className = 'question' +i;
        container.appendChild(question);
        this.generateAnswers(questions.ansvers, i);
    }

  },

  generateAnswers: function (answerList, questionNumber) {
    console.log(answerList);

    var answers = document.createElement('ul');
    container = document.querySelector('.question' + questionNumber);
    container.appendChild(answers);


    for (var i = 0; i < answerList.length; i++) {
        var answer = answerList[i];
        console.log(answer);


        var answerDomObject = document.createElement('li');
        answerDomObject.innerHTML = '<label><input type="checkbox" value="">' + answer.text +'</label>';
        answerDomObject.className = 'checkbox';
        // this.generateAnswers(questions.ansvers);
        answers.appendChild(answerDomObject);
    }

  },

  createButton: function(wrapper, buttonName){
      var result = document.createElement('button');
      result.setAttribute('type', 'button');
      result.className	= 'btn btn-info btn-lg center-block';
  	  result.innerHTML = 'Проверить результат';
  	  var wrapper = document.querySelector('.wrapper');
  	  wrapper.appendChild(result);
  },

}

var element = document.body;
objTest.createWrapper(element)
objTest.createTitle();
objTest.createContainer();
objTest.generateQuestions();
objTest.createButton();
