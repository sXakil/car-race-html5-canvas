class Car {
	constructor() {
		this.carX = carX;
		this.carY = carY;
		this.carAngle = carAngle;
		this.carSpeed = carSpeed;
		this.carTurnLeft = carTurnLeft;
		this.carTurnRight = carTurnRight;
		this.carGas = carGas;
		this.carReverse = carReverse;
	}
	onKeyPressed(evt, left, right, up, down) {
		if (evt.keyCode === left) {
			this.carTurnLeft = true;
		}
		if (evt.keyCode === right) {
			this.carTurnRight = true;
		}
		if (evt.keyCode === down) {
			this.carGas = true;
		}
		if (evt.keyCode === up) {
			this.carReverse = true;
		}
	}
	onKeyReleased(evt, left, right, up, down) {
		if (evt.keyCode === left) {
			this.carTurnLeft = false;
		}
		if (evt.keyCode === right) {
			this.carTurnRight = false;
		}
		if (evt.keyCode === down) {
			this.carGas = false;
		}
		if (evt.keyCode === up) {
			this.carReverse = false;
		}
	}
	reset(xx = 0, yy = 0) {
		let i = 0;
		tracks.forEach((track, index) => {
			if (index !== 0 && index % TRACK_COLS === 0) i++;
			if (track === TRACK_START) {
				this.carX = TRACK_WIDTH * (index % TRACK_COLS + 1) + xx; // 9 pixel offset for perfect center alignment
				this.carY = TRACK_HEIGHT * i + yy;
			}
		});
		this.carAngle = Math.PI / 2;
		this.carSpeed = 0;
	}
	move() {
		this.carSpeed *= FRICTION_RATE_MULTIPLIER;
		if (Math.abs(this.carSpeed) > 0.05) {
			if (this.carTurnLeft) {
				this.carAngle -= TURN_RATE;
			}
			if (this.carTurnRight) {
				this.carAngle += TURN_RATE;
			}
		}
		if (this.carGas) {
			this.carSpeed += ACCELERATION_RATE;
		}
		if (this.carReverse) {
			this.carSpeed -= ACCELERATION_RATE;
		}
		this.carX += Math.cos(this.carAngle) * this.carSpeed;
		this.carY += Math.sin(this.carAngle) * this.carSpeed;
	}
}
let car1 = new Car();
let car2 = new Car();
/**
 * echo "# car-race-html5-canvas" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/sXakil/car-race-html5-canvas.git
git push -u origin master
 */