const rand = function rand(min, max){
	return Math.round(Math.random() * (max - min)) + min
}

module.exports = rand;