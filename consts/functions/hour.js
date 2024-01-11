const hour = function hour(timer){
	if(timer > 4){
		return "часов"
	} else if(timer < 5 && timer > 1){
		return "часа"
	} else if(timer == 1){
		return "час"
	}
}

module.exports = hour;