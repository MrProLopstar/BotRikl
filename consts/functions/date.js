module.exports = function data(vr){
	if(vr){
		let date = vr;
		let days = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		if(month < 10) month = "0" + month;
		if(days < 10) days = "0" + days;
		let datas = days + '.' + month + '.' + year;
		return datas;
	} else {
		let date = new Date();
		let days = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		if(month < 10) month = "0" + month;
		if(days < 10) days = "0" + days;
		let datas = days + '.' + month + '.' + year;
		return datas;
	}
}