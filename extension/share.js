function ExtensionStateViewModel() {
    // 以下このViewModelの組み立て
    this.isEnable = ko.observable(store.get('extensionIsEnable'));
    this.updateBrowserActionIcon = $.proxy(function() {
        var filePath = (this.isEnable() ?
            'icons/icon48.png' : 'icons/icon48_disable.png');
        var iconUrl = chrome.extension.getURL(filePath);
        chrome.browserAction.setIcon({ 'path': iconUrl });
    });

    this.isEnable.subscribe(function(newValue) {
        store.set('extensionIsEnable', newValue);
        this.updateBrowserActionIcon();
    }, this);

    // localStorageへ格納されている値の初期化
    if (this.isEnable() === undefined) {
        this.isEnable(true);
    }
    this.updateBrowserActionIcon();
}

