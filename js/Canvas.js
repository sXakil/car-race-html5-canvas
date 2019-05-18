window.onload = function() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.addEventListener('mousemove', getMouseCoordinate);
	document.addEventListener('keydown', function (evt) {
		car1.onKeyPressed(evt, ...car1Controls)
		car2.onKeyPressed(evt, ...car2Controls)
	});
	document.addEventListener('keyup', function (evt) {
		car1.onKeyReleased(evt, ...car1Controls)
		car2.onKeyReleased(evt, ...car2Controls)
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
