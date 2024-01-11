const unixStampLeft = function unixStampLeft(stamp) {
	stamp = stamp / 1000;

	let s = stamp % 60;
	stamp = ( stamp - s ) / 60;

	let m = stamp % 60;
	stamp = ( stamp - m ) / 60;

	let	h = ( stamp ) % 24;
	let	d = ( stamp - h ) / 24;

	let text = ``;

	if(d > 0) text += Math.floor(d) + " д. ";
	if(h > 0) text += Math.floor(h) + " ч. ";
	if(m > 0) text += Math.floor(m) + " мин. ";

	return text;
}

module.exports = unixStampLeft;