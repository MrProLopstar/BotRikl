module.exports = function save(){
	fs.writeFileSync("./base/monetka.json", JSON.stringify(monetka, null, "\t"));
	fs.writeFileSync("./base/config.json", JSON.stringify(config, null, "\t"));
	fs.writeFileSync("./base/log.json", JSON.stringify(log, null, "\t"));
};