$(function(){
    //scroll
    $("body").on("click", "a.topLink", function(event){
      event.preventDefault();
      var name = $(this).attr('href').substring(1),
      top = $('[name="'+name+'"]').offset().top;
      $('html,body').animate({scrollTop: top},
        {
                 duration: 700,
                 easing: "linear"
      });
      $('.navbar-collapse').removeClass('in');
    });
      $('.navbar-collapse').removeClass('in');
    $("body").on("click", "a.btn", function(event){
      event.preventDefault();
      var name = $(this).attr('href').substring(1),
      top = $('[name="'+name+'"]').offset().top;
      $('html,body').animate({scrollTop: top},
        {
                 duration: 700,
                 easing: "linear"
        });
      });

});
