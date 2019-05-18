class Car {
	constructor(left, right, forward, reverse) {
		this.carX = carX;
		this.carY = carY;
		this.carAngle = carAngle;
		this.carSpeed = carSpeed;
		this.carTurnLeft = carTurnLeft;
		this.carTurnRight = carTurnRight;
		this.carGas = carGas;
		this.carReverse = carReverse;
		this.left = left;
		this.right = right;
		this.forward = forward;
		this.reverse = reverse;
	}
	onKeyPressed(evt) {
		if (evt.keyCode === this.left) {
			this.carTurnLeft = true;
		}
		if (evt.keyCode === this.right) {
			this.carTurnRight = true;
		}
		if (evt.keyCode === this.reverse) {
			this.carGas = true;
		}
		if (evt.keyCode === this.forward) {
			this.carReverse = true;
		}
	}
	onKeyReleased(evt) {
		if (evt.keyCode === this.left) {
			this.carTurnLeft = false;
		}
		if (evt.keyCode === this.right) {
			this.carTurnRight = false;
		}
		if (evt.keyCode === this.reverse) {
			this.carGas = false;
		}
		if (evt.keyCode === this.forward) {
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
let carOne = new Car(...carOneControls);
let carTwo = new Car(...carTwoControls);