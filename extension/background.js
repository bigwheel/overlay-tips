function updateIcon() {
    var fileName = localStorage["extensionIsEnable"] === "true" ? "icon48.png" : "icon48_disable.png";
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

if (localStorage["extensionIsEnable"] === undefined) {
    localStorage["extensionIsEnable"] = "true";
}

updateIcon();
