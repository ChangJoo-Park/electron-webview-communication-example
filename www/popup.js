var closeWindow = function(event) {
	window.close();
}

var sendWindow = function(event) {
	var win = window;
	// window.opener.CallParent(win);
	console.dir(window)
	console.log(window.opener);
}

var btnCloseWindow = document.getElementById('close-button');
var btnSendWindow = document.getElementById('send-button');

btnCloseWindow.addEventListener('click', closeWindow);
btnSendWindow.addEventListener('click', sendWindow);