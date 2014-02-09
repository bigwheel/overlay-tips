new extensionStateViewModel();

chrome.extension.onRequest.addListener(function(_, _, sendResponse) {
    sendResponse(store.getAll());
});

