const sunmin = function sunmin(main, mains){
    let sunrise = new Date(main*1000);
    let sunset = new Date(mains*1000);
	if(sunrise.getMinutes() < 10) "0" + sunrise.getMinutes();
	return sunset.getMinutes();
};

module.exports = sunmin;