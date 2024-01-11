module.exports = function reserv(){
	let cf = "base/reserv/configs/config_" + data() + "-" + time('logs') + ".json";
	let lg = "base/reserv/logs/log_" + data() + "-" + time('logs') + ".json";
	let text = `Конфиг `;
	fs.writeFileSync(cf, JSON.stringify(config, null, "\t"));
	if(uptime > 10){
		fs.writeFileSync(lg, JSON.stringify(log, null, "\t"));
		text += `и логи зарезервированы!`;
	} else {
		text += `зарезервирован!`;
	}
	return text;
};