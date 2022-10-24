chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
    if (request.cmd == 'test') {
        alert(`成功调整为${request.value}倍速`);
        document.querySelector("video").playbackRate = request.value;
    }
    sendResponse('我收到了你的消息！');
});