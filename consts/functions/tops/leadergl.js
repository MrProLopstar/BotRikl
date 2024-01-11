module.exports = async function leadergl(){
	let text = ``;
	let tops = [];
	let users = await User.find({ ban: false });

	for(let i = 0; i < users.length; i += 1){
		if(config.top_l.indexOf(users[i].id) === -1){
			if(users[i].level < 6){
					tops.push({ gl: users[i].gl, id: users[i].id, prefix: users[i].prefix });
			}
		}
	}

	tops.sort(function(a, b) {
		if (b.gl > a.gl) return 1
		if (b.gl < a.gl) return -1
		return 0
	})
	let yo = []

	for (let g = 0; g < 10; g++) {
		if (tops.length > g) {
			let ups = g;
			ups += 1;
			if(g <= 8) ups = `${ups}&#8419;`
			if(g == 9) ups = `&#128287;`
			yo.push({
				id: tops[g].id,
				prefix: tops[g].prefix,
				gl: tops[g].gl,
				smile: `${ups}`
			})
		}
	}
	let people = "👑 ТОП ПО РЕЙТИНГУ 👑 \n" + yo.map(a => a.smile + ". [id" + a.id + "|" + a.prefix + "] - " + spaces(a.gl) + " 👑").join("\n")
	text += `${people}`;
	return text
}