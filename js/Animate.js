/* Animates the position of the moving functions */
function animate() {
	setInterval(getUpdate, 1000 / FPS);
}

/* Draws all the shapes in every frame */
function getUpdate() {
	generateTracks();
	draw();
}

/* Draws all the shapes */
function draw() {
	if (imageYetToLoad === 0) {
		drawRotatingBitmap(images["carOne"].img, carOne.carX, carOne.carY, carOne.carAngle);
		drawRotatingBitmap(images["carTwo"].img, carTwo.carX, carTwo.carY, carTwo.carAngle);
	}
	carOne.move();
	carTwo.move();
	carTrackCollisionControl(carOne);
	carTrackCollisionControl(carTwo);
}
