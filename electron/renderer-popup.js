var ipcRenderer = require('electron').ipcRenderer;

sendWindow = function () {
	console.log('sendWindow');
	var message = 'message';
	// If send `win` -> Not Working
	var win = window;
	console.log('before send window');
	ipcRenderer.send('response-popup', { 'hello': 'world' })
}

ipcRenderer.on('did-finish-load', function (event, args) {

})
