var popupButton = document.getElementById('openPopup');

popupButton.addEventListener('click', function (event) {
	var win = window.open('http://localhost:3000/popup.html');
})