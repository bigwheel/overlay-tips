$(function() {
    chrome.extension.sendRequest({}, function(localStorage) {
        if (localStorage.extensionIsEnable === true) {
            queryToElasticSearchByUrl(localStorage.elasticSearchUrl, location.href).
                done(function(result) {
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

