module.exports = function rob(count){
	if(count > 4 || count == 0){
		return "роботов"
	} else if(count < 5 && count > 0){
		return "робота"
	}
}