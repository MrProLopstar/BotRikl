module.exports = function tabl(count, per){
	if(count > 4 || count == 0){
		return "таблеток"
	} else if(count < 5 && count > 1){
		return "таблетки"
	} else if(count == 1){
		if(per == 1){
			return "таблетка"
		} else {
			return "таблетку"
		}
	}
}