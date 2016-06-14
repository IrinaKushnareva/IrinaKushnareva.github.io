$(function(){
    $.ajax({
        url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q',
        dataType: 'jsonp',
        method: 'GET',
        success: function(data){
            // console.log(data);
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
            url:'https://pixabay.com/api/?key=2664799-0e24662f5636fd778502d5776&q='+search,
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
  });
