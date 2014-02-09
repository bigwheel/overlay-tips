function PageProperTipsViewModel() {
    this.result = ko.observable([]);
    chrome.tabs.getSelected($.proxy(function(tab) {
        queryToElasticSearchByUrl(store.get('elasticSearchUrl'), tab.url).done(
            $.proxy(function(result) {
                $.each(result.hits.hits, $.proxy(function(_, hit) {
                    var data = hit._source;
                    var result = this.result();
                    result.push({ tip: data.tip, selector: data.selector });
                    this.result(result);
                }, this));
            }, this)
        );
    }, this));
}

$(function() {
    ko.applyBindings(new ExtensionStateViewModel(), $('form')[0]);
    ko.applyBindings(new PageProperTipsViewModel(), $('table')[0]);
});

