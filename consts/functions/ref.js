module.exports = async function ref(message, user){
	if(message.referralSource && message.referralValue){
		if(message.referralSource && message.referralValue != message.user){
			let userm = await User.findOne({ id: message.referralValue });
			if(userm){
				if(user.refm != 0) return
				if(userm.level == 0){
					userm.balance += 1000000000;
					userm.don += 1;
					userm.ref += 1;
					user.balance += 1000000000;
					user.refm = 1;
					user.don += 1;
					await user.save();
					await userm.save();
					vk.api.call('messages.send', {
						peer_id: userm.id,
						random_id: 0,
						message: `⚠ Реферальная система: Игрок ${userp} указал ваш ID и вы получили 1.000.000.000$ и 1 рикл!`
					});
					log[user.number].push(`Активировал реф игрока ${message.ref}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Риклов: ${user.don}`);
					log[userm.number].push(`${user.number} игрок активаровал реф. Время: ${time()}|${data()} Баланс: ${spaces(userm.balance)}$ Риклов: ${userm.don}`);
					await message.send(`⭐ ➣ Вы перешли по ссылке игрока ${userm.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userm.nick.toString().replace(/true/gi, `@id${userm.id}(${userm.prefix})`).replace(/false/gi, `${userm.prefix}`)} ${userm.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} и получили 1.000.000.000$ и 1 рикл!`);
				} else {
					userm.balance += 2000000000;
					userm.don += 1;
					userm.ref += 1;
					user.balance += 2000000000;
					user.refm = 1;
					user.don += 1;
					await user.save();
					await userm.save();
					vk.api.call('messages.send', {
						peer_id: userm.id,
						random_id: 0,
						message: `⚠ Реферальная система: Игрок ${userp} указал ваш ID и вы получили 2.000.000.000$ и 1 рикл!`
					});
					log[user.number].push(`Активировал реф игрока ${message.ref}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Риклов: ${user.don}`);
					log[userm.number].push(`${user.number} игрок активаровал реф. Время: ${time()}|${data()} Баланс: ${spaces(userm.balance)}$ Риклов: ${userm.don}`);
					await message.send(`⭐ ➣ Вы перешли по ссылке игрока ${userm.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userm.nick.toString().replace(/true/gi, `@id${userm.id}(${userm.prefix})`).replace(/false/gi, `${userm.prefix}`)} ${userm.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} и получили 2.000.000.000$ и 1 рикл!`);
				}
			}
		}
	}
}