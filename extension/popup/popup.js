function ArraySampleViewModel() {
    this.number = [ {n: 1}, {n: 2}, {n: 3} ];
}

$(function() {
    ko.applyBindings(new ExtensionStateViewModel(), $('form')[0]);
    ko.applyBindings(new ArraySampleViewModel(), $('table')[0]);
});

