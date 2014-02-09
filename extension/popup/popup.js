function PageProperTipsViewModel() {
    this.result = ko.observable([]);
    chrome.tabs.getSelected(function(tab) {
        queryToElasticSearchByUrl(store.get('elasticSearchUrl'), tab.url).done(
            function(result) {
                $.each(result.hits.hits, function(_, hit) {
                    var data = hit._source;
                    //this.result(
                    //    this.result().push({ tip: data.tip })
                    //);
                    console.log(data);
                    //$(data.selector).append('<br /> ' + data.tip);
                });
            }
        );
    });
}

$(function() {
    ko.applyBindings(new ExtensionStateViewModel(), $('form')[0]);
    ko.applyBindings(new PageProperTipsViewModel(), $('table')[0]);
});

