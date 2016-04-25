$(function() {
// Инициализация слайдера
$('.jcarousel').jcarousel({
  // Базовые настройки скрипта пишутся здесь
  animation: {
          duration: 600,
          easing:   'swing',
          complete: function() {
          }
        },
        wrap: 'both',
});

// Прокрутка слайдера

// Кнопка PREV
$('.jcarousel-prev')
// Триггер класса inactive
.on('jcarouselcontrol:active', function() {
  $(this).removeClass('inactive');
})
.on('jcarouselcontrol:inactive', function() {
  $(this).addClass('inactive');
})
// Инициализация кнопки PREV
.jcarouselControl({
  target: '-=1'
});

// Кнопка NEXT
$('.jcarousel-next')
// Триггер класса inactive
.on('jcarouselcontrol:active', function() {
  $(this).removeClass('inactive');
})
.on('jcarouselcontrol:inactive', function() {
  $(this).addClass('inactive');
})
// Инициализация кнопки NEXT
.jcarouselControl({
  target: '+=1'
});

// Пагинация слайдера
$('.jcarousel-pagination')
// Триггер класса active
.on('jcarouselpagination:active', 'a', function() {
  $(this).addClass('active');
})
.on('jcarouselpagination:inactive', 'a', function() {
  $(this).removeClass('active');
})
// Инициализация пагинации
.jcarouselPagination({
  item: function(page) {
    return '<a href="#' + page + '">' + page + '</a>';
  }
});

// Автопрокрутка слайдера
$('.jcarousel').jcarouselAutoscroll({
    interval: 3000,
    target: '+=1',
    autostart: true
});

});
