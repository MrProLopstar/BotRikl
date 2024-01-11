const TempTo = function TempTo(temp){
	if(temp < -20) return 'Очень, очень холодно'
	else if(temp < -10) return 'Очень холодно'
	else if(temp < -5) return 'Холодно'
	else if(temp < 5) return 'Холодновато'
	else if(temp < 20) return 'Комфортно'
	else if(temp < 25) return 'Тепло'
	else if(temp < 30) return 'Жарко'
    else if(temp < 50) return 'Очень жарко'
	else return
};

module.exports = TempTo;