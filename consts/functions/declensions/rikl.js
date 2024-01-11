module.exports = function rikl(count){
	if(count > 4 || count == 0){
		return "риклов"
	} else if(count < 5 && count > 1){
		return "рикла"
	} else if(count == 1){
		return "рикл"
	}
}