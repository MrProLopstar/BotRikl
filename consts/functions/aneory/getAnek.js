const getAnek = function getAnek(){
	return require("prequest")('https://www.anekdot.ru/random/anekdot/').then(body => {
		let res = body.match(/(?:<div class="text">([^]+)<\/div>)/i);
		res = res[0].split('</div>');
		return res[0].split(`<div class="text">`).join('').split('<br>').join('\n');
	});
};

module.exports = getAnek;