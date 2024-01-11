module.exports = async function AddMonetka(stavka,summ){
	let user = await userq;
	let mon = ``;
	summ = summ.replace(/(\.|\,|\$)/ig, '');
	summ = summ.replace(/(к|k)/ig, '000');
	summ = summ.replace(/(вабанк|вобанк|все|вб|всё)/ig, user.balance);
	stavMessage =  convertm(stavka, 2);
	stavka =  convertm(stavka, 1);
	userm = `${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${user.nick.toString().replace(/true/gi, `@id${user.id}(${user.prefix})`).replace(/false/gi, `${user.prefix}`)} ${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`
	limit = 1000
	if(summ > limit){
		if(user.balance >= summ){
			if(!SearchMonetka()){
				if(stavka){
					await user.dec("balance", summ);
					monetka.games.push({ id: user.id, uid: user.number, stav: stavka, sum: Math.floor(summ) });
					mon = `${userm}, вы поставили ${spaces(summ)}$ на "${stavMessage}"!`;
				}
			} else {
				mon = `${userm}, вы уже делали ставку, отмените ее командой "монетка отмена"!`;
			}
		} else {
			mon = `${userm}, недостаточно денег!`
		}
	} else {
		mon = `${userm}, ставка должна быть выше ${spaces(limit)}$!`
	}
	return mon;
};