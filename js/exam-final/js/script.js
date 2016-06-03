$(function(){

$('.corner').corner();  //border radius for IE 8

// JQuery-plugin-slider
var id1 = $('#slider1');
var id2 = $('#slider2');
var id3 = $('#slider3');
slider(id1);
slider(id2);
slider(id3);

function slider(idSlider){

    var elWrap = idSlider,
        el =  elWrap.find('.img'),
        indexImg = 1,
        indexMax = el.length,
        phase = 3000;

    function change () {
        el.fadeOut(700);
        el.filter(':nth-child('+indexImg+')').fadeIn(700);
    }

    elWrap.append('<span class="next"></span><span class="prev"></span>');
    var btnNext = $('span.next'),
        btnPrev = $('span.prev');

    btnNext.on('click', function() {
        indexImg++;
        if(indexImg > indexMax) {
            indexImg = 1;
        }
        change ();
    });
    btnPrev.on('click', function() {
        indexImg--;
        if(indexImg < 1) {
            indexImg = indexMax;
        }
        change ();
    });
}



//ajax

$.ajax({
    type: 'GET',
    // url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q=holiday+dreams&image_type=photo',
    url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q=holiday&image_type=photo',
    // url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q',
    dataType: 'json',
    success: function(data){
    console.log('data', data);

    var img = _.map(data.hits, 'webformatURL');

            function shuffle(a) {   //picture shuffler
                var j, x, i;
                for (i = a.length; i; i -= 1) {
                    j = Math.round(Math.random() * i);
                    x = a[i - 1];
                    a[i - 1] = a[j];
                    a[j] = x;
                }
            }

            shuffle(img);
            var item = $('.grid-box-item');
            item.each(function(value){
                $(this).css('backgroundImage', 'url('+img[value]+')');
        });
    }
});



$(function(){

    $('#search-button').on('click', function(e){
    e.preventDefault();
    var search = $('#search-input').val(); // write search from input field
    $.ajax({
        url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q='+search,
        dataType: 'jsonp',
        method: 'GET',
        success: function(data){
            // console.log(data);
            var img = _.map(data.hits, 'webformatURL');
            var item = $('.grid-box-item');

            item.each(function(value){
                $(this).css('backgroundImage', 'url('+img[value]+')');
        });
    },
        error: function(){
            alert('Картинок с таким названием не найдено');
        }
    });
    //  return false;
});





//
// var element = document.querySelector("form");
//    element.addEventListener("submit", function(event) {
//        event.preventDefault();
//        alert("Form submission cancelled.");
//    });





});

});
