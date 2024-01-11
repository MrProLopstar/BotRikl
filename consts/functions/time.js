module.exports = function time(vr){
	if(vr == 'logs'){
		let date = new Date();
		let days = date.getDate();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		var times = hours + '.' + minutes + '.' + seconds
		return times;
	} else if(vr){
		let date = vr;
		let days = date.getDate();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		var times = hours + ':' + minutes + ':' + seconds
		return times;
	} else {
		let date = new Date();
		let days = date.getDate();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		var times = hours + ':' + minutes + ':' + seconds
		return times;
	}
}