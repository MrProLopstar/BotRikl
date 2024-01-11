module.exports = async function control(message){
	let zaprets1 = message.toLowerCase();
	let filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	let filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true || zaprets.zapr.find(x=> x === zaprets1)){
		return `Найдено запрещенное слово!`
	}
};