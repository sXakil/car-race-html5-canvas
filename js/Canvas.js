window.onload = function() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.addEventListener('mousemove', getMouseCoordinate);
	document.addEventListener('keydown', function (evt) {
		carOne.onKeyPressed(evt, ...carOneControls)
		carTwo.onKeyPressed(evt, ...carTwoControls)
	});
	document.addEventListener('keyup', function (evt) {
		carOne.onKeyReleased(evt, ...carOneControls)
		carTwo.onKeyReleased(evt, ...carTwoControls)
	});

	for (let image in images) {
		let img = images[image].img
		let src = images[image].src
		img.onload = imageLoaded;
		img.src = "images/" + src
	}

	carOne.reset(-60);
	carTwo.reset(-25);
	animate();
};
function imageLoaded() {
	imageYetToLoad--;
}
