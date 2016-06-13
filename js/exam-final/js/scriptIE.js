$(function(){
    $.ajax({
        url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q',
        dataType: 'jsonp',
        method: 'GET',
        success: function(data){
            // console.log(data);
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
    },
        error: function(){
            alert('Картинок с таким названием не найдено');
        }
    });

    $(function(){

      $('#search-form').on('submit', function(e){
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
    });

    });
  });
