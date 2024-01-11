module.exports = async function tm(){
	let users = await User.find({ ban: false });
	for(let i = 0; i < users.length; i += 1){
		if(users[i].tm > getUnix() + 43200000 * tim){
			vk.api.call("messages.send", {
			peer_id: owner,
			random_id: 0,
			message: `
🤖 Ты давно не заходил к нам! Не забудь поучаствовать в лотерее и собрать роботов со сборочных!
💸 Так же не забудь собрать свой ежедневный бонус!`
			});
		}
		tim = rand(2,10);
	}
}