window.onload = function() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	canvas.addEventListener('mousemove', getMouseCoordinate); //Use the mouse to get certain coordinates

	/** @keydown and @keyup listeners are used to control the car */
	document.addEventListener('keydown', function (evt) {
		carOne.onKeyPressed(evt, ...carOneControls)
		carTwo.onKeyPressed(evt, ...carTwoControls)
	});
	document.addEventListener('keyup', function (evt) {
		carOne.onKeyReleased(evt, ...carOneControls)
		carTwo.onKeyReleased(evt, ...carTwoControls)
	});

	/** Load all the image assets */
	for (let image in images) {
		let img = images[image].img
		let src = images[image].src
		img.onload = imageLoaded;
		img.src = "images/" + src
	}

	/** Instantiate the position the cars */
	carOne.reset(-60);
	carTwo.reset(-25);

	/** Start the animation */
	animate();
};

/** Update the flag to check if all the images have loaded successfully */
function imageLoaded() {
	imageYetToLoad--;
}
