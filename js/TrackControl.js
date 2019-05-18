function generateTracks() {
	let i = 0;

	tracks.forEach((track, index) => {

		if (index !== 0 && index % TRACK_COLS === 0) i++;
		if (track === TRACK_WALL) {
			drawBitmap(
				images[1].img,
				TRACK_WIDTH * (index % TRACK_COLS),
				TRACK_HEIGHT * i,
			);
		}
		else if (track === TRACK_FIELD) {
			drawBitmap(
				images[2].img,
				TRACK_WIDTH * (index % TRACK_COLS),
				TRACK_HEIGHT * i,
			);
		}
		else if (track === TRACK_FINISH) {
			drawBitmap(
				images[4].img,
				TRACK_WIDTH * (index % TRACK_COLS),
				TRACK_HEIGHT * i,
			);
		}
			else if (track === TRACK_FLAG) {
			drawBitmap(
				images[5].img,
				TRACK_WIDTH * (index % TRACK_COLS),
				TRACK_HEIGHT * i,
			);
		}
		else if (track === TRACK_PATH || TRACK_START) {
			drawBitmap(
				images[3].img,
				TRACK_WIDTH * (index % TRACK_COLS),
				TRACK_HEIGHT * i,
			);
		}
		x = 1;
	});
}



function carTrackCollisionControl(thisCar) {
	let carTrackCol = Math.floor(thisCar.carX / TRACK_WIDTH);
	let carTrackRow = Math.floor(thisCar.carY / TRACK_HEIGHT);
	if (
		carTrackCol >= 0 &&
		carTrackCol < TRACK_COLS &&
		carTrackRow >= 0 &&
		carTrackRow < TRACK_ROWS
	) {
		if (isTrackAtColRow(carTrackCol, carTrackRow)) {
			thisCar.carX -= Math.cos(thisCar.carAngle) * thisCar.carSpeed;
			thisCar.carY -= Math.sin(thisCar.carAngle) * thisCar.carSpeed;
			thisCar.carSpeed *= -0.5;
		}
	}
}
function isTrackAtColRow(col, row) {
	if (col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		let trackIndex = getTrackIndex(col, row)
		return (tracks[trackIndex] !== TRACK_PATH)
	}
	else return false;
}

function getTrackIndex(col, row) {
	return TRACK_COLS * row + col;
}
