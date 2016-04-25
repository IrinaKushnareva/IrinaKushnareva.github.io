// script for select

(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);

(function($) {
  $(function() {

    $('button').click(function() {
      $('select').find('option:nth-child(5)').attr('selected', true);
      $('select').trigger('refresh');
    })

  })
})(jQuery);


(function($) {
  $(function() {
    $('select').styler({
      selectSearch: true
    });
  });
})(jQuery);


// -------------------checkbox-----------------------
$(function() {
  	$(function(){
      $(".niceCheck").each(
        /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
        function() {
        changeCheckStart($(this));
      });
    });


  function changeCheck(el) {
  // /*  функция смены вида и значения чекбокса
  //     // el - span контейнер для обычного чекбокса
  	var el = el,
  		input = el.find("input").eq(0);

  	if(el.attr("class").indexOf("niceCheckDisabled")==-1)
  	  {
     		if(!input.attr("checked")) {
  			el.addClass("niceChecked");
  			input.attr("checked", true);
  		  } else {
  			  el.removeClass("niceChecked");
  			  input.attr("checked", false).focus();
  		    }
  	  }

      return true;
  }

  function changeVisualCheck(input) {

    var wrapInput = input.parent();
  	if(!input.attr("checked")) {
  		wrapInput.removeClass("niceChecked");
  	}
  	 else {
  		wrapInput.addClass("niceChecked");
  	  }
  }

  function changeCheckStart(el) {
  // /* если установлен атрибут checked, меняем вид чекбокса*/
    try
    {
      var el = el,
  	  checkName = el.attr("name"),
  	  checkId = el.attr("id"),
  	  checkChecked = el.attr("checked"),
  	  checkDisabled = el.attr("disabled"),
  	  checkTab = el.attr("tabindex"),
      checkValue = el.attr("value");

  	  if(checkChecked) {
  		    el.after("<span class='niceCheck niceChecked'>" + "<input type='checkbox'" + "name='"+checkName+"'" + "id='"+checkId+"'" + "checked='"+checkChecked+"'" +
          "value='"+checkValue+"'" + "tabindex='"+checkTab+"' /></span>");
      }
  	    else {
  		    el.after("<span class='niceCheck'>" + "<input type='checkbox'" + "name='"+checkName+"'" + "id='"+checkId+"'" +
          "value='"+checkValue+"'" + "tabindex='"+checkTab+"' /></span>");
        }
        /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */
  	  if(checkDisabled) {
  		    el.next().addClass("niceCheckDisabled");
  		    el.next().find("input").eq(0).attr("disabled","disabled");
  	  }

      /* цепляем обработчики стилизированным checkbox */
  	  el.next().bind("mousedown", function(e) { changeCheck($(this)) });
  	  el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck($(this)) });
  	  el.remove();
    }
    catch(e)
    {
      // если ошибка, ничего не делаем
    }

    return true;
  }
});





// menu-item
$(function(){
  var $links = $('.menu a');

  $links.on('click', function(e){
    var $submenu1 = $(this).siblings('.submenu1');
    var $submenu2 = $(this).siblings('.submenu2');
    var $submenu3 = $(this).siblings('.submenu3');
    e.preventDefault();
    $submenu1.slideToggle('slow');
    $submenu2.slideToggle('slow');
    $submenu3.slideToggle('slow');
  });

});


$(function(){
$('.menu li a').mouseenter(
    function () {
      $(this).animate({
        backgroundColor:'#53868b',
        color:'#fff',
        borderBottomColor: '#222',
        borderTopColor:'#fff'
      }, 500);
    });
  $('.menu li a').mouseleave(function() {
      $(this).animate({
        backgroundColor:'#2e8b57',
        color:'	#cccccc',
        borderBottomColor:'#222',
        borderTopColor:'#fff'
      }, 500);
    });

});
