const error = (text) => {
	text = text.replace("Unexpected identifier", "Неожиданный идентификатор");
	text = text.replace("SyntaxError", "Ошибка синтаксиса");
	return text;
};

module.exports = error;