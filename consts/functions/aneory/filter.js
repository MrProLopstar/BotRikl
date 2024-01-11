const filter = (text) => {
	text = text.replace('&quot;', '"');
	text = text.replace('!&quot;', '"');
	text = text.replace('?&quot;', '"');
	text = text.replace(/(&quot;)/ig, '"');
	return text;
};

module.exports = filter;