module.exports = async function DelMonetka(){
	let user = await userq;
	let mon = ``;
	userm = `${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${user.nick.toString().replace(/true/gi, `@id${user.id}(${user.prefix})`).replace(/false/gi, `${user.prefix}`)} ${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`
	for(i in monetka.games){
		if(monetka.games[i].uid == user.number){ 
			await user.inc("balance", Math.floor(monetka.games[user.number].sum));
			removearr(monetka.games, 'uid', user.number);
			return `${userm}, вы отменили ставку!`;
		} else {
			mon = `${userm}, у вас нет ставок!`;
		}
	}
	return mon
}