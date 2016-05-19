function GoogleCallBack(data) {

    var $body = $('body');
    var $content;
    console.log('data', data);

    for(var i = 0; i < data.items.length; i++) {
        $content = $('<div class="searchResult"><a href="' + data.items[i].link + '" class=""><h3 class="title">' +  data.items[i].htmlTitle + '</h3></a>').append('<p class="nameDomain">' +  data.items[i].link + '</p>').append('<p class="snippet">' +  data.items[i].htmlSnippet + '</p>');
        $body.append($content);
        console.log('data', data.items[i]);
    }
}

function searchGoogle() {
   $.ajax({

        url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAACUkVRQGGN4296PpczNf67RPAoABcQ0k&cx=016752793230153313502:yd6ofv1srti&q=' + $('#searchText').val() + '&callback=GoogleCallBack&context=?',
        data: {
            abc: 123
        },
        method: 'POST',
        dataType: 'jsonp',
        success: function () {
        },
        error: function () {
        }
    })
};

$(function () {
    $('#myButton').click(function (e) {
        e.preventDefault();
        $('#searchForm').addClass('search');
        $('.searchResult').remove();
        searchGoogle();
    });
});







//prototypes

function Human()  {
    this.name = 'Irina';
    this.age = 25;
    this.sex = 'female';
    this.height = 170;
    this.weight = 60;
};

// console.log(Human);

Worker.prototype = new Human();
Student.prototype = new Human();

function Worker()  {
    this.job = 'office';
    this.salary = 5000;
    this.working = function (){
        console.log('This is work method: I am working!');
    };
};

function Student()  {
    this.university = 'DSTU',
    this.scholarship = 700,
    this.hobby = function (){
        console.log('This is watching method: I love to watch TV shows!');
    };
};

var worker1 = new Worker();
var worker2 = new Worker();
var worker3 = new Worker();

var student1 = new Student();
var student2 = new Student();
var student3 = new Student();

console.log('This is work method: I am working!')
console.log('worker1 name:', worker1.name);
console.log('worker1 sex:', worker1.sex);
console.log('worker1 job:', worker1.job);
console.log('');

console.log('worker2 age:', worker2.age);
console.log('worker2 height:', worker2.height);
console.log('worker2 sex:', worker2.sex);
console.log('');

console.log('worker3 weight:', worker3.weight);
console.log('worker3 salary:', worker3.salary);
console.log('worker3 height:', worker3.height);
console.log('');

console.log(worker1, worker2, worker3);
console.log('');
console.log('');


console.log('This is watching method: I love to watch TV shows!')
console.log('student1 sex:', student1.sex);
console.log('student1 age:', student1.age);
console.log('');

console.log('student2 university:', student2.university);
console.log('student2 scholarship:', student2.scholarship);
console.log('');

console.log('student3 weight:', student3.weight);
console.log('student3 height:', student3.height);
console.log('');

console.log(student1, student2, student3);
