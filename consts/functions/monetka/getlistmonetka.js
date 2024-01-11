module.exports = async function GetListMonetka(){
	let user = await userq;
	let list = [];
	let userm = `${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${user.nick.toString().replace(/true/gi, `@id${user.id}(${user.prefix})`).replace(/false/gi, `${user.prefix}`)} ${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`;
	if(Object.keys(monetka.games).length == 0){ 
		return `${userm}, сейчас никто не играет.`;
	} else {
		for(i in monetka.games){
			list.push({ sum: monetka.games[i].sum, id: Math.floor(i) + 1, stav: monetka.games[i].stav, emoji: user.balance >= monetka.games[i].sum ? '🔹' :'🔸' });
		}
		return `${userm}, доступные ставки:\n` + list.map(a => a.emoji + " " + a.id + ". " + a.stav + " - "+ spaces(a.sum) + "$").join("\n");
	}
}