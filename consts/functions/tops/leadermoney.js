module.exports = async function leadermoney(){
	let text = ``;
	let tops = [];
	let yo = [];
	let users = await User.find({ ban: false });
	for (let i = 0; i < users.length; i += 1) {
		if(users[i].level < 6){
			if(config.top_l.indexOf(users[i].id) === -1){
				tops.push({ balance: users[i].balance, id: users[i].id, prefix: users[i].prefix });
			}
		}
	}
	tops.sort(function(a, b) {
		if (b.balance > a.balance) return 1
		if (b.balance < a.balance) return -1
		return 0
	})
	for (let g = 0; g < 10; g++) {
		if (tops.length > g) {
			let ups = g;
			ups += 1;
			if(g <= 8) ups = `${ups}&#8419;`
			if(g == 9) ups = `&#128287;`
			yo.push({
				id: tops[g].id,
				balance: tops[g].balance,
				prefix: tops[g].prefix,
				smile: `${ups}`
			})
		}
	}
	let people = "💴 ТОП ПО БАЛАНСУ 💴 \n" + yo.map(a => a.smile + ". [id" + a.id + "|" + a.prefix + "] - " + utils.formatNumber(a.balance)).join("\n")
	text += `${people}`;
	return text
};