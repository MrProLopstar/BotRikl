module.exports = function protect(word){
	let protectionEval = /(u0|require|length|fs|items|err|for|setInterval|setTimeout|protect|os|rq|math|mongo|qrcode|googleTTS|config.owner|login|token)/ 
	if(protectionEval.test(word.toLowerCase()) == true) return true;	
}