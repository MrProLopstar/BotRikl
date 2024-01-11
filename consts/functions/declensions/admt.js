module.exports = function admt(timer){
	if(timer > 1){
		return `${spaces(timer)} Суток`
	} else if(timer == 1){
		return `1 Сутки`
	}
}