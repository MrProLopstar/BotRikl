module.exports = async function msg(){
	let user = await userq;
	config.command += 1;
	user.msg.last_msg = `${time()} | ${data()}`;
	user.msg.command += 1;
};