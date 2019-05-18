function drawRect(x, y, width = canvas.width, height = canvas.height, fill = 'black') {
	context.fillStyle = fill;
	context.fillRect(x, y, width, height);
}

function write(text, x, y, fill = 'red') {
	context.fillStyle = fill;
	context.fillText(text, x, y);
}

function drawRotatingBitmap(bitmap, atX, atY, withAngle) {
	context.save();
	context.translate(atX, atY);
	context.rotate(withAngle);
	context.drawImage(
		bitmap,
		-bitmap.width / 2,
		-bitmap.height / 2,
		65, 30
	)
	context.restore();
}

function drawBitmap(bitmap, x, y) {
	context.save();
	context.drawImage(
		bitmap,
		x,
		y,
	)
	context.restore();
}