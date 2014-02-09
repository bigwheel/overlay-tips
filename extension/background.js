// localStorageへ格納されている設定の初期化
if (extensionState.isEnable() === undefined) {
    extensionState.isEnable(true);
}
extensionState.updateBrowserActionIcon();

chrome.extension.onRequest.addListener(function(_, _, sendResponse) {
    sendResponse(store.getAll());
});

