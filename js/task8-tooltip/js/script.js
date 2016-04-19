
$(function(e){
  $('#showhelp').on('click', function(){
    $('.tooltip').css('display', 'block');
  });

  $("#firstname").mouseover(function (){
    $('.firstname_tooltip').fadeIn(500);
  });
  $('#firstname').mouseout(function(e) {
    $('.firstname_tooltip').css('display', 'block').fadeOut(1000);
  });

  $("#lastname").mouseover(function (){
    $('.lastname_tooltip').fadeIn(500);
  });
  $('#lastname').mouseout(function(e) {
    $('.lastname_tooltip').css('display', 'block').fadeOut(1000);
  });

  $("#address").mouseover(function (){
    $('.address_tooltip').fadeIn(500);
  });
  $('#address').mouseout(function(e) {
    $('.address_tooltip').css('display', 'block').fadeOut(1000);
  });
  console.log(showhelp);

    });
