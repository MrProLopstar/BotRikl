const Timer = function Timer(now){
	if(now > 18) return '🌇'
	else if(now > 22) return '🌃'
	else if(now > 4) return '🏙'
	else if(now < 6) return '🌅'
	else if(now < 14) return '🏞'
	else return
}

module.exports = Timer;