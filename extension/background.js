chrome.browserAction.onClicked.addListener(function(tab) {
    var action_url = "javascript:window.print();";
    chrome.tabs.update(tab.id, {url: action_url});
});
//chrome.browserAction.onClicked.addListener(function(tab) {
//    var viewTabUrl = chrome.extension.getURL('icon48_disable.png');
//    chrome.browserAction.setTitle("test");
//    var imageUrl = /* an image's URL */;
//
//    // この拡張機能に属するビューを全て確認し、今回使うものを見つける
//    var views = chrome.extension.getViews();
//    for (var i = 0; i < views.length; i++) {
//        var view = views[i];
//
//        // ビューが該当するURLを指し、未使用のものであれば...
//        if (view.location.href == viewTabUrl && !view.imageAlreadySet) {
//
//            // ...関数を呼び出し、使用済みに状態を変える
//            view.setImageUrl(imageUrl);
//            view.imageAlreadySet = true;
//            break; // 完了
//        }
//    }
//});
