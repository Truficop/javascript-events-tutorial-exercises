window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	document.getElementById('theGreen').addEventListener('click', myClickFunction);
};

// The listener function here
function myClickFunction() {
	alert('woohoo!')
}