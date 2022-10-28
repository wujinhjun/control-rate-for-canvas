const video = document.querySelector("video")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd == 'test') {
        video.playbackRate = request.value;
        alert(`成功调整为${request.value}倍速`);
    }
    sendResponse(`${request.value}`);
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 37) {
        video.currentTime -= 10;
    } else if (event.keyCode === 39) {
        video.currentTime += 10;
    } else if (event.keyCode === 32) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
})

