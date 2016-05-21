console.log('This is script1 - mySlider.js');

(function ($) {
	var defaults = {
		pixelsOffset: 325,
		quantity: 2
	};

	var options;
	$.fn.mySliderPlugin = function (params) {
		options = $.extend({}, defaults, options, params);
		var leftUIEl = $('.carousel-arrow-left');
		var rightUIEl = $('.carousel-arrow-right');

		var pixelsOffset = options.pixelsOffset;
		var currentLeftValue = 0;
		var elementsItem = $('.carousel-list li');

		var elementsCount = elementsItem.length;
		var minimumOffset = -((elementsCount - (options.quantity)) * pixelsOffset);
		var maximumOffset = 0;

		leftUIEl.click(function () {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelsOffset;
				$('.carousel-list').animate({
					left: currentLeftValue + "px"
				}, 500);
			}
		});

		rightUIEl.click(function () {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelsOffset;
				$('.carousel-list').animate({
					left: currentLeftValue + "px"
				}, 500);
			}
		});
		return this;
	}
})(jQuery);
;console.log('This is script2 - script.js');

$(function () {
	$('.carousel-hider').mySliderPlugin ()
});

// Template John Resig
$(function () {
    var html =  $('#info').html();
    var articles = [
        {
        photo: 'http://irinakushnareva.github.io/html/task1/img/1.jpg',
        title: '&nbsp;&nbsp;&nbsp;На данный момент решила самосовершенствоваться, а также делаю мелкий декор.'
        },
        {
        title: 'Хочу учить фронтенд, потому что:',
        text: '&bull;&nbsp;Мне очень интересна эта сфера</br>&bull;&nbsp;Хочу самореализоваться в этом направлении, и шагать в ногу со временем</br>&bull;&nbsp;Хочу изменить свою жизнь к лучшему'
				},
				{
				title: 'Мой контактный телефон:',
        text: '+380954479705'
				},
				{
				title: 'Мой профиль:',
        text: '<a href="https://facebook.com" target="_blank">https://www.facebook.com/kushnareva.irina</a></br><a href="https://ua.linkedin.com/in/irinakushnareva" target="_blank">https://ua.linkedin.com/in/irinakushnareva</a>',
				},
				{
				title: 'Мой фидбек:',
        text: 'Моё хобби handmade, могу и Вам чё-то смастерить), но эффективнее будет изучить Frontend!!!'
				}
           ];
    var content = tmpl(html, {
        data: articles
    });

    $('body').append(content);
});
;console.log('This is script3 - tmpl.js');

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();
