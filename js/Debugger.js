/** Get the mouse coordinates */
function getMouseCoordinate(evt) {
	let rect = canvas.getBoundingClientRect();
	let root = document.documentElement;
	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}