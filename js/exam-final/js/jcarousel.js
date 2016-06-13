(function ($) {

  $.fn.jcarousel = function () {
var id = $('#slider');
var id2 = $('#slider2');
var id3 = $('#slider3');
slider(id);
slider2(id2);
slider3(id3);

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
};

function slider2(idSlider){
  var elWrap = idSlider,
      el =  elWrap.find('.img'),
      indexImg = 1,
      indexMax = el.length,
      phase = 3000;
  function change () {
      el.fadeOut(700);
      el.filter(':nth-child('+indexImg+')').fadeIn(700);}
  elWrap.append('<span class="next2"></span><span class="prev2"></span>');
  var btnNext = $('span.next2'), btnPrev = $('span.prev2');
  btnNext.on('click', function() {indexImg++;
      if(indexImg > indexMax) {indexImg = 1;}change ();});
  btnPrev.on('click', function() {indexImg--;
      if(indexImg < 1) {indexImg = indexMax;}change ();});
};

function slider3(idSlider){
  var elWrap = idSlider,
      el =  elWrap.find('.img'),
      indexImg = 1,
      indexMax = el.length,
      phase = 3000;
  function change () {
      el.fadeOut(700);
      el.filter(':nth-child('+indexImg+')').fadeIn(700);}
  elWrap.append('<span class="next3"></span><span class="prev3"></span>');
  var btnNext = $('span.next3'), btnPrev = $('span.prev3');
  btnNext.on('click', function() {indexImg++;
      if(indexImg > indexMax) {indexImg = 1;}change ();});
  btnPrev.on('click', function() {indexImg--;
      if(indexImg < 1) {indexImg = indexMax;}change ();});
};
};
})(jQuery);
