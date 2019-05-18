window.onload = function() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.addEventListener('mousemove', getMouseCoordinate);
	document.addEventListener('keydown', function (evt) {
		car1.onKeyPressed(evt, 37, 39, 38, 40)
		car2.onKeyPressed(evt, 65, 68, 87, 83)
	});
	document.addEventListener('keyup', function (evt) {
		car1.onKeyReleased(evt, 37, 39, 38, 40)
		car2.onKeyReleased(evt, 65, 68, 87, 83)
	});

	images.forEach((image) => {
		let img = image.img;
		img.onload = imageLoaded;
		img.src = "images/" + image.src;
	});
	car1.reset(-60);
	car2.reset(-25);
	animate();
};
function imageLoaded() {
	imageYetToLoad--;
}
