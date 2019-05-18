/**
 * @param {number, X-offset of the shape to be drawn} x 
 * @param {number, X-offset of the shape} y 
 * @param {number, width of the shape} width 
 * @param {number, height of the shape} height 
 * @param {string, fill color} fill 
 */
function drawRect(x, y, width = canvas.width, height = canvas.height, fill = 'black') {
	context.fillStyle = fill;
	context.fillRect(x, y, width, height);
}

/**
 * @param {string, text to be written} text 
 */
function write(text, x, y, fill = 'red') {
	context.fillStyle = fill;
	context.fillText(text, x, y);
}

/**
 * @param {Image, image object} bitmap 
 * @param {number, horizontal translation axis} atX 
 * @param {number, vertical translation axis} atY 
 * @param {radian, rotation angle of the bitmap} withAngle 
 */
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