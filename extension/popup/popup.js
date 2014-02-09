function initCheckbox() {
    $('input[type="checkbox"]').attr('checked', store.get('extensionIsEnable'));
}

$(function() {
    initCheckbox();

    $('input#extensionIsEnable').change(function() {
        store.set('extensionIsEnable', $(this).is(':checked'));
        updateBrowserActionIcon();
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

