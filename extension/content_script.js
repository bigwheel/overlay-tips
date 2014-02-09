$(function() {
    chrome.extension.sendRequest({}, function(localStorage) {
        if (localStorage.extensionIsEnable === true) {
            queryToElasticSearchByUrl(localStorage.elasticSearchUrl, location.href).
                done(function(result) {
                if (result.exists) {
                    $.each(result._source.tips, $.proxy(function(_, tip) {
                        $(tip.selector).append('<br /> ' + tip.tip);
                    }, this));
                }
            }
            )
        }
    });
});

