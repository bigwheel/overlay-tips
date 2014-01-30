$(function() {
    chrome.extension.sendRequest({}, function(extensionIsEnable) {
        if (extensionIsEnable === "true") {
            $.post(
                "http://192.168.33.10:9200/overlay_tips/tip/_search",
                JSON.stringify({ query: { term: { url: location.href } } })
            ).done(
                function(result, textStatus, jqXHR) {
                    var hits = result.hits.hits;
                    if (hits.length != 0) {
                        var data = hits[0]._source;
                        $(data.selector).append("<br /> " + data.tip);
                    }
                }
            )
        }
    });
});

