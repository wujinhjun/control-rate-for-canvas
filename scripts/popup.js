function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}

const handle = document.getElementById("handle");

const display = document.getElementById("display");


handle.addEventListener("click", () => {
    const size = document.getElementById("size").value || 1;
    sendMessageToContentScript({ cmd: 'test', value: `${size}` }, function (response) {
        console.log('来自content的回复：' + response);
    });
})
