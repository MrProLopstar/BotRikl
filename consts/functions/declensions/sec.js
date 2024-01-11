module.exports = function sec(timer){
	if(timer > 4 || timer == 0){
		return "секунд"
	} else if(timer < 5 && timer > 1){
		return "секунды"
	} else if(timer == 1){
		return "секунду"
	}
}