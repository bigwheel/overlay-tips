function updateIcon() {
    var fileName = store.get('extensionIsEnable') === true ?
        'icons/icon48.png' : 'icons/icon48_disable.png';
    var iconUrl = chrome.extension.getURL(fileName);
    chrome.browserAction.setIcon({ 'path': iconUrl });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    store.set('extensionIsEnable', !store.get('extensionIsEnable'));

    updateIcon();
});

// localStorageへ格納されている設定の初期化
if (store.get('extensionIsEnable') === undefined) {
    store.set('extensionIsEnable', true);
}

updateIcon();

chrome.extension.onRequest.addListener(function(_, _, sendResponse) {
    sendResponse(store.getAll());
});

