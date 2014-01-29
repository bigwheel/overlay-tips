if (localStorage["extensionIsEnable"] === undefined) {
    localStorage["extensionIsEnable"] = "true";
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if (localStorage["extensionIsEnable"] === "true") {
        localStorage["extensionIsEnable"] = "false";
        chrome.browserAction.setTitle({ "title": "overlay tips" });
    } else {
        localStorage["extensionIsEnable"] = "true";
        chrome.browserAction.setTitle({ "title": "is killed. why?" });
    }
});

