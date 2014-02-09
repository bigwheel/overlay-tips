extensionState = {
    isEnable: ko.observable(store.get('extensionIsEnable')),
    updateBrowserActionIcon: function() {
        var fileName = store.get('extensionIsEnable') === true ?
            'icons/icon48.png' : 'icons/icon48_disable.png';
        var iconUrl = chrome.extension.getURL(fileName);
        chrome.browserAction.setIcon({ 'path': iconUrl });
    }
};
extensionState.isEnable.subscribe(function(newValue) {
    store.set('extensionIsEnable', newValue);
    this.updateBrowserActionIcon();
}, extensionState);

