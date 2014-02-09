function PageProperTipsViewModel() {
    var self = this;
    this.result = ko.observable([]);
    chrome.tabs.getSelected($.proxy(function(tab) {
        queryToElasticSearchByUrl(store.get('elasticSearchUrl'), tab.url).done(
            $.proxy(function(result) {
                if (result.exists) {
                    $.each(result._source.tips, $.proxy(function(_, tip) {
                        var result = this.result();
                        result.push(tip);
                        this.result(result);
                    }, this));
                }
            }, this)
        );
    }, this));
    this.putResult = ko.observable('');
    this.submit = function() {
        console.log(JSON.stringify(self.result()));
        self.putResult('');
        chrome.tabs.getSelected($.proxy(function(tab) {
            $.ajax(store.get('elasticSearchUrl') + encodeURIComponent(tab.url),
                   {
                       type: 'PUT',
                       contentType: 'application/json',
                       data: JSON.stringify({ tips: self.result() }),
                       dataType: 'json'
                   }).
                       done(function() {
                       self.putResult('成功');
                   }).
                       fail(function() {
                       self.putResult('失敗');
                   });
        }));
        return false;
    };
}

$(function() {
    ko.applyBindings(new ExtensionStateViewModel(),
                     $('input#extension_is_enable')[0]);
    ko.applyBindings(new PageProperTipsViewModel(),
                     $('form#tips')[0]);
});

