/** Generate the entire track grid from the tracks array */
function generateTracks() {
	let i = 0;
	tracks.forEach((track, index) => {
		if (index !== 0 && index % TRACK_COLS === 0) i++;
		if (track === TRACK_WALL) {
			drawBitmap(images['wallTile'].img, TRACK_WIDTH * (index % TRACK_COLS), TRACK_HEIGHT * i);
		} else if (track === TRACK_GRASS) {
			drawBitmap(images['grassTile'].img, TRACK_WIDTH * (index % TRACK_COLS), TRACK_HEIGHT * i);
		} else if (track === TRACK_FINISH) {
			drawBitmap(images['finishTile'].img, TRACK_WIDTH * (index % TRACK_COLS), TRACK_HEIGHT * i);
		} else if (track === TRACK_FLAG) {
			drawBitmap(images['flagTile'].img, TRACK_WIDTH * (index % TRACK_COLS), TRACK_HEIGHT * i);
		} else if (track === TRACK_ROAD || TRACK_START) {
			drawBitmap(images['roadTile'].img, TRACK_WIDTH * (index % TRACK_COLS), TRACK_HEIGHT * i);
		}
	});
}

/** Checks the collision between cars and obstacles */
function carTrackCollisionControl(thisCar) {
	let carTrackCol = Math.floor(thisCar.carX / TRACK_WIDTH);
	let carTrackRow = Math.floor(thisCar.carY / TRACK_HEIGHT);
	if (carTrackCol >= 0 && carTrackCol < TRACK_COLS && carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
		if (isTrackAtColRow(carTrackCol, carTrackRow)) {
			thisCar.carX -= Math.cos(thisCar.carAngle) * thisCar.carSpeed;
			thisCar.carY -= Math.sin(thisCar.carAngle) * thisCar.carSpeed;
			thisCar.carSpeed *= -0.5;
		}
	}
}

/** Get the block index from track grid given the column and row position */
function isTrackAtColRow(col, row) {
	if (col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) {
		let trackIndex = TRACK_COLS * row + col;
		return tracks[trackIndex] !== TRACK_ROAD;
	} else return false;
}
