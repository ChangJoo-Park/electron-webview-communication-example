// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var webView = document.getElementById('web-view');
var ipcRenderer = require('electron').ipcRenderer;

webView.addEventListener('did-finish-load', function (event) {
	if(!webView.isDevToolsOpened()) {
		webView.openDevTools()	
	}
	console.log('did-finish-load')
})

webView.addEventListener('new-window', function (event) {
	ipcRenderer.send('open-popup', event);
	if(!webView.isDevToolsOpened()) {
		webView.openDevTools()	
	}
});

ipcRenderer.on('focus-popup', function (event, args) {
	console.log('focus popup')
	console.dir(args)
})


ipcRenderer.on('close-popup', function (event, args) {
	window.alert('closed')
})

ipcRenderer.on('show-popup', function (event, popup) {
	console.log('show-popup in main renderer')
	console.log(typeof popup)
	// popup.executeJavaScript(`console.log('Hello from parent')`);
})


var newButton = document.getElementById('new--button');
newButton.addEventListener('click', function () {
	window.open('http://localhost:8000/popup.html')
})