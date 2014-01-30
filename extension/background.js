function updateIcon() {
    var fileName = localStorage["extensionIsEnable"] === "true" ?
        "icon48.png" : "icon48_disable.png";
    var iconUrl = chrome.extension.getURL(fileName);
    chrome.browserAction.setIcon({ "path": iconUrl });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if (localStorage["extensionIsEnable"] === "true") {
        localStorage["extensionIsEnable"] = "false";
    } else {
        localStorage["extensionIsEnable"] = "true";
    }

    updateIcon();
});

// localStorageへ格納されている設定の初期化
if (localStorage["extensionIsEnable"] === undefined) {
    localStorage["extensionIsEnable"] = "true";
}

updateIcon();

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    sendResponse({
        extensionIsEnable: localStorage["extensionIsEnable"],
        elasticsearch_url: localStorage["elasticsearch_url"]
    });
});

