module.exports = function min(timer){
	if(timer > 4 || timer == 0){
		return "минут"
	} else if(timer < 5 && timer > 1){
		return "минуты"
	} else if(timer == 1){
		return "минуту"
	}
}