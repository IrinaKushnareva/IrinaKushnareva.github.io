console.log('This is script2 - script.js');

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
