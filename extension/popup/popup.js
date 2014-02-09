function PageProperTipsViewModel() {
    this.result = ko.observable([]);
}

$(function() {
    ko.applyBindings(new ExtensionStateViewModel(), $('form')[0]);
    ko.applyBindings(new PageProperTipsViewModel(), $('table')[0]);
});

