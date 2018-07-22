const resolutions = [
    { w: 1280, h: 720 },
    { w: 1366, h: 768 },
    { w: 1600, h: 900 },
    { w: 1920, h: 1080 },
    { w: 2560, h: 1440 }
];

const view = document.getElementById('view');
resolutions.forEach(function (resolution) {
    const button = document.createElement('button');
    button.textContent = `${resolution.w} x ${resolution.h}`;
    view.appendChild(button);
    button.onclick = function (event) {
        chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
            width: resolution.w,
            height: resolution.h
        });
    };
});
