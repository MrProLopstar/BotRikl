module.exports = async function PlayMonetka(id){
	let user = await userq;
	let userm = `${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${user.nick.toString().replace(/true/gi, `@id${user.id}(${user.prefix})`).replace(/false/gi, `${user.prefix}`)} ${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`;
	for(i in monetka.games){
		if(i != 'random'){
			if(Math.floor(i) + 1 == id){
				let mon = monetka.games[Math.floor(i)];
				if(mon){
					let userz = await User.findOne({ number: mon.uid });
					let usermz = `${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`;
					if(user.balance >= mon.sum){
						if(user.number != mon.uid){
							let itog = rand(1,2);
							let sum = Math.floor(mon.sum + (mon.sum * 0.9));
							let sums = mon.sum;
							if(mon.stav == "Решка"){
								if(itog == 1){
									userz.balance += Math.floor(sum);
									user.balance -= Math.floor(sums);
									user.save();
									userz.save();
									vk.api.call('messages.send', {
										user_id: mon.id,
										random_id: 0,
										message: `${usermz}, выпал решка, вы выиграли ${spaces(sum)}$ ${smilesuc}`
									});
									removearr(monetka.games, 'uid', userz.number);
									return `${userm}, выпал решка, вы проиграли ${spaces(sums)}$ ${smileerr}`;
									// Побеждает решка		
								} else {
									user.balance += Math.floor(sum);
									user.save();
									vk.api.call('messages.send', {
										user_id: mon.id,
										random_id: 0,
										message: `${usermz}, выпал орёл, вы проиграли ${spaces(sums)}$ ${smileerr}`
									});
									removearr(monetka.games, 'uid', userz.number);
									return `${userm}, выпал орёл, вы выиграли ${spaces(sum)}$ ${smilesuc}`;
									// Побеждает орёл
								}
							} else {
								if(itog == 1){
									userz.balance += Math.floor(sum);
									user.balance -= Math.floor(sums);
									user.save();
									userz.save();
									vk.api.call('messages.send', {
										user_id: mon.id,
										random_id: 0,
										message: `${usermz}, выпал орёл, вы выиграли ${spaces(sum)}$ ${smilesuc}`
									});
									removearr(monetka.games, 'uid', userz.number);
									return `${userm}, выпал орёл, вы проиграли ${spaces(sums)}$ ${smileerr}`;
									// Побеждает решка		
								} else {
									user.balance += Math.floor(sum);
									user.save();
									vk.api.call('messages.send', {
										user_id: mon.id,
										random_id: 0,
										message: `${usermz}, выпал решка, вы проиграли ${spaces(sums)}$ ${smileerr}`
									});
									removearr(monetka.games, 'uid', userz.number);
									return `${userm}, выпал решка, вы выиграли ${spaces(sum)}$ ${smilesuc}`;
									// Побеждает орёл
								}
							}
						} else {
							return `${userm}, это ваша ставка!`;
						}
					} else {
						return `${userm}, вам недостаточно денег!`;
					}
				} else {
					return `${userm}, данной игры не найденно!`;
				}
			}
		}
	}
	return `${userm}, данной игры не найденно!`
}