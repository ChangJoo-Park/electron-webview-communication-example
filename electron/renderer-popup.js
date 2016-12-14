var webview = document.getElementById('web-view');
// When everything is ready, trigger the events without problems
webview.addEventListener("dom-ready", function() {
    // Show devTools if you want
    if(webview.isDevToolsOpened()) {
    	webview.openDevTools();	
    }
    
    console.log("DOM-Ready, triggering events !");

    // change-text-element manipulating the DOM
    webview.send("change-text-element", {});
});


// Process the data from the webview
webview.addEventListener('ipc-message',function(event){
    console.log(event);
    console.info(event.channel);
});


sendWindow = function () {
	console.log('sendWindow');
	var message = 'message';
	// If send `win` -> Not Working
	var win = window;
	console.log('before send window');
	ipcRenderer.send('response-popup', window)
}

focusPopup = function () {
	console.log('focusPopup')
	console.log(window)	
	return window;
}
// focusPopup = function () {
// 	return new Promise(function (resolve, reject){
// 		console.log('in Promise')
// 		var document.getElementById('close-button')
// 		if(window) {
// 			console.log("has window")

// 			resolve(window.document)
// 		}
// 	});
// }
