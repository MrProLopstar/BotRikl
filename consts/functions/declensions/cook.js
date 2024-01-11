module.exports = function cook(count){
	if(count > 4 || count == 0){
		return "печенек"
	} else if(count < 5 && count > 1){
		return "печеньки"
	} else if(count == 1){
		return "печенье"
	}
}