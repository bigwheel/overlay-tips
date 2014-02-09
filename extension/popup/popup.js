$(function() {
    if (store.get('extensionIsEnable') === true) {
        $('input[type="checkbox"]').attr('checked', true);
    } else {
        $('input[type="checkbox"]').attr('checked', false);
    }

    $('input#extensionIsEnable').change(function() {
        if ($(this).is(':checked')) {
            store.set('extensionIsEnable', true);
        } else {
            store.set('extensionIsEnable', false);
        }
    });

//    $.post(
//        store.get('elasticsearch_url') + '_search',
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

