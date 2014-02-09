$(function() {
     if (localStorage['extensionIsEnable'] === 'true') {
         $('input[type="checkbox"]').attr('checked', true);
     } else {
         $('input[type="checkbox"]').attr('checked', false);
     }

     $('input#extensionIsEnable').change(function() {
         if ($(this).is(':checked')) {
             localStorage['extensionIsEnable'] = 'true';
         } else {
             localStorage['extensionIsEnable'] = 'false';
         }
     });

//    $.post(
//        localStorage['elasticsearch_url'] + '_search',
//        JSON.stringify({ query: { term: { url: location.href } } })
//    ).done(
//    function(result, textStatus, jqXHR) {
//         result.hits.hits;
//        if (hits.length != 0) {
//            var data = hits[0]._source;
//            $(data.selector).append('<br /> ' + data.tip);
//        }
//    }
//    );
});

