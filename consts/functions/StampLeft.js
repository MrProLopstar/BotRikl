module.exports = function StampLeft(stamp){
	let s = stamp % 60;
	stamp = ( stamp - s ) / 60;

	let m = stamp % 60;
	stamp = ( stamp - m ) / 60;

	let	h = ( stamp ) % 24;
	stamp = ( stamp - h ) / 24;

	let d = ( stamp ) % 30;
	stamp = ( stamp - d ) / 30

	let mon = ( stamp )

	let text = ``;

	if(mon > 0) text += Math.floor(mon) + " мес. ";
	if(d > 0) text += Math.floor(d) + " д. ";
	if(h > 0) text += Math.floor(h) + " ч. ";
	if(m > 0) text += Math.floor(m) + " мин. ";
	if(s > 0) text += Math.floor(s) + " с.";

	return text;
}