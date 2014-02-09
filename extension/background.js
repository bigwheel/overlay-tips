// localStorageへ格納されている設定の初期化
if (store.get('extensionIsEnable') === undefined) {
    store.set('extensionIsEnable', true);
}

updateBrowserActionIcon();

chrome.extension.onRequest.addListener(function(_, _, sendResponse) {
    sendResponse(store.getAll());
});

