function updateIcon() {
    var fileName = store.get('extensionIsEnable') === true ?
        'icons/icon48.png' : 'icons/icon48_disable.png';
    var iconUrl = chrome.extension.getURL(fileName);
    chrome.browserAction.setIcon({ 'path': iconUrl });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if (store.get('extensionIsEnable') === true) {
        store.set('extensionIsEnable', false);
    } else {
        store.set('extensionIsEnable', true);
    }

    updateIcon();
});

// localStorageへ格納されている設定の初期化
if (store.get('extensionIsEnable') === undefined) {
    store.set('extensionIsEnable', true);
}

updateIcon();

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    sendResponse({
        extensionIsEnable: store.get('extensionIsEnable'),
        elasticsearch_url: store.get('elasticsearch_url')
    });
});

