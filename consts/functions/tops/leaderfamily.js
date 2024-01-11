module.exports = async function leaderfamily(){
	let text = ``;
	let tops = [];
	let yo = [];

	for(let i = 1; i <= config.family; i++){
		tops.push({ peop: family[i].people, id: family[i].id, name: family[i].name, owner: family[i].owner });
		if(i == config.family){
			tops.sort(function(a, b) {
				if (b.peop > a.peop) return 1
				if (b.peop < a.peop) return -1
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
						peop: tops[g].peop,
						name: tops[g].name,
						owner: tops[g].owner,
						smile: `${ups}`
					})
				}
			}
			let people = "👬 ТОП ПО СЕМЬЯМ 👬\n" + yo.map(a => a.smile + '. Название: "' + a.name + '" Членов семьи: ' + spaces(a.peop) + " | 🆔 семьи: " + a.id).join("\n")
			text += `${people}`;
			return text
		}
	}
}