const utils = {
	filter: (text) => { 
		text = text.replace(/^(RU)/i, 'Россия')
	    text = text.replace(/^(UA)/i, 'Украина')
	    text = text.replace(/^(BY)/i, 'Беларусь')
	    text = text.replace(/^(KZ)/i, 'Казахстан')
	    text = text.replace(/^(AE)/i, 'Объединенные Арабские Эмираты')
	    return text;
	}
};

module.exports = utils;