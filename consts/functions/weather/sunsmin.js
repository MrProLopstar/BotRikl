const sunsmin = function sunsmin(main){
    let sunset = new Date(main*1000);
	if(sunset.getMinutes() < 10) "0" + sunset.getMinutes();
	return sunset.getMinutes();
};

module.exports = sunsmin;