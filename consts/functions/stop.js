module.exports = async function stop(){
	setImmediate(save);
	await console.log(`Базы успешно сохранены!`);
	await console.log(`Бот был остановлен!`);
	return process.exit()
}