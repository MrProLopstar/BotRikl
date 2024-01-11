module.exports = async function eng(){
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length; i+=1){
		let user = users[i];
		let userm = `${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${user.nick.toString().replace(/true/gi, `@id${user.id}(${user.prefix})`).replace(/false/gi, `${user.prefix}`)} ${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`;
		if(user.level == 0){
			if(user.mine.eng < 20){
				user.mine.eng += 1
				if(user.mine.eng == 20){
					vk.api.call('messages.send', {
						user_id: user.id,
						random_id: 0,
						message: `${userm}, ваш запас энергии восполнился! 🔋`
					});
				}
			}
		};
		if(user.level >= 1){
			if(user.mine.eng < 25){
				user.mine.eng += 1
				if(user.mine.eng == 25){
					vk.api.call('messages.send', {
						user_id: user.id,
						random_id: 0,
						message: `${userm}, ваш запас энергии восполнился! 🔋`
					});
				}
			}
		};
		await user.save()
	}
};