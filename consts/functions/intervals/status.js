module.exports = async function status(){
	vk_user.api.call("status.set", {
		text: `${config.status} Игроков: ${spaces(config.number)} || Команд: ${spaces(config.command)}`, 
		group_id: config.group
	});
}