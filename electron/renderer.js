// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var webView = document.getElementById('web-view');
var ipcRenderer = require('electron').ipcRenderer;

webView.addEventListener('new-window', function (event) {
	var url = event.url;
	ipcRenderer.send('open-popup', url);
});