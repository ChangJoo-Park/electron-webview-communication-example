var popupButton = document.getElementById('openPopup');

popupButton.addEventListener('click', function (event) {
	var win = window.open('http://localhost:8000/popup.html');
})

window.onmessage = function (e) {
	console.log(e);
}

window.CallParent = function (child) {
	console.log(child);
	child.document.title = "POPUP - CHANGED"
}