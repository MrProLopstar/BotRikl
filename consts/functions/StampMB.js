const StampMB = function StampMB(stamp) {
	stamp = stamp / 1024;

	let mb = stamp % 1024;
	stamp = stamp / 1024;

	let	gb = stamp / 1024;

	let text = ``;

	if(gb > 0) text += Math.floor(gb) + " gb. ";
	if(mb > 0) text += Math.floor(mb) + " mb. ";

	return text;
}

module.exports = StampMB;