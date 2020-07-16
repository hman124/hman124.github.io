const popup = (event) => {
var mouseX = event.clientX;
var popup = document.getElementById("popup");
popup.style.display = "block";
popup.style.left = mouseX + "px";
}

const hide = () => {
	document.getElementById("popup").style.display = "none";
}