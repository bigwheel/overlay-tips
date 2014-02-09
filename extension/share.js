function updateBrowserActionIcon() {
    var fileName = store.get('extensionIsEnable') === true ?
        'icons/icon48.png' : 'icons/icon48_disable.png';
    var iconUrl = chrome.extension.getURL(fileName);
    chrome.browserAction.setIcon({ 'path': iconUrl });
    console.log("test");
}
