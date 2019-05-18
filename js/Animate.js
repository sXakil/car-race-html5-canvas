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
		drawRotatingBitmap(images[0].img, car1.carX, car1.carY, car1.carAngle);
		drawRotatingBitmap(images[6].img, car2.carX, car2.carY, car2.carAngle);
	}
	car1.move();
	car2.move();
	carTrackCollisionControl(car1);
	carTrackCollisionControl(car2);
	
}
