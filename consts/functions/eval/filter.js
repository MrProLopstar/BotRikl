const filter = (text) => {
	text = text.replace("undefined", "Не определено");
	text = text.replace("boolean", "Результат");
	text = text.replace("number", "Значение");
	text = text.replace("string", "Строка");
	text = text.replace("object", "Объект");
	text = text.replace("true", "true (правда)");
	text = text.replace("false", "false (ложь)");
	return text;
};

module.exports = filter;