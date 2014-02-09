$(function() {
    chrome.extension.sendRequest({}, function(ls) {
        if (ls.extensionIsEnable === 'true') {
            $.post(
                ls.elasticsearch_url + '_search',
                JSON.stringify({ query: { term: { url: location.href } } })
            ).done(
                function(result, textStatus, jqXHR) {
                    var hits = result.hits.hits;
                    if (hits.length != 0) {
                        var data = hits[0]._source;
                        $(data.selector).append('<br /> ' + data.tip);
                    }
                }
            )
        }
    });
});
