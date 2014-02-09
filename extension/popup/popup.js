function PageProperTipsViewModel() {
    this.result = ko.observable([]);
    chrome.tabs.getSelected($.proxy(function(tab) {
        queryToElasticSearchByUrl(store.get('elasticSearchUrl'), tab.url).done(
            $.proxy(function(result) {
                if (result.exists) {
                    $.each(result._source.tips, $.proxy(function(_, tip) {
                        var result = this.result();
                        result.push({ tip: tip.tip, selector: tip.selector });
                        this.result(result);
                    }, this));
                }
            }, this)
        );
    }, this));
}

$(function() {
    ko.applyBindings(new ExtensionStateViewModel(), $('form')[0]);
    ko.applyBindings(new PageProperTipsViewModel(), $('table')[0]);
});

