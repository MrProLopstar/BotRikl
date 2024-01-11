module.exports = async function msg_lvl(message, user){
	if(!user.msg.lvl){
		user.msg.lvl = Math.floor(user.msg.command / 1000)
	}

	if(user.msg.lvl == user.msg.command / 1000){
		if(user.msg.lvl != 0){
			let nagr = 5000000000;
			user.balance += nagr;
			user.msg.lvl += 1;
			vk.api.call('messages.send', {
				peer_id: message.user,
				random_id: 0,
				message: `⭐Вы использовали ${spaces(user.msg.command)} команд.\n${smilesuc}Вы вознаграждены ${spaces(nagr)}$`
			});
		}
	}
}