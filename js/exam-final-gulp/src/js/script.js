$(function(){

$('.corner').corner();  //border radius for IE 8

//------plugin-slider

$(function slider1() {
  $(function () {
  $('#slider').jcarousel();
});
});

$(function slider2() {
  $(function () {
  $('#slider2').jcarousel();
});
});

$(function slider3() {
  $(function () {
  $('#slider3').jcarousel();
});
});


//---ajax---
$.ajax({
    type: 'GET',
    url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q=&image_type=photo',
    dataType: 'json',
    success: function(data){
    console.log('data', data);
            var item = $('.grid-box-item');
            item.each(function (index) {
              $(this).css('backgroundImage', 'url('+data.hits[index].webformatURL+')', 'text');
              $(this).find('p').text(data.hits[index].tags.split(',')[0]);
            });

    }
});

$(function(){

    $('#search-form').on('submit', function(e){
    e.preventDefault();
    var search = $('#search-input').val(); // write search from input field
    $.ajax({
        url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q=' + search,
        dataType: 'jsonp',
        method: 'GET',
        success: function(data){
            // console.log(data);

            var item = $('.grid-box-item');
            item.each(function (index) {
              $(this).css('backgroundImage', 'url('+data.hits[index].webformatURL+')', 'text');
              $(this).find('p').text(data.hits[index].tags.split(',')[0]);
            });

    },
        error: function(){
            alert('Картинок с таким названием не найдено');
        }
    });
});
});



// ---retina---------
$(document).ready(function(){
  if (window.devicePixelRatio > 1) {
    var lowresImages = $('img');

    images.each(function(i) {
      var lowres = $(this).attr('src');
      var highres = lowres.replace(".", "@2x.");
      $(this).attr('src', highres);
    });
  }
});

});
