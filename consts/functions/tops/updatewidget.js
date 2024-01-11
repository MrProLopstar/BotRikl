module.exports = async function updateWidget(){
	let tops = [];
	let users = await User.find({ ban: false });
	for (let i = 0; i < users.length; i += 1) {
		if(users[i].level < 6){
			if(config.top_l.indexOf(users[i].id) === -1){
				tops.push({id: i, id: users[i].id, balance: users[i].balance, lvl: users[i].gl, prefix: users[i].prefix, koif: users[i].balance + users[i].gl * 275000000}); 
			}
		} 
	}
	tops.sort(function(a, b) { 
		if (b.koif > a.koif) return 1 
		if (b.koif < a.koif) return -1 
		return 0 
	})

	let script = {
		title: `Топ лучших игроков BotRikl`, 
		head: [

		{
			text: 'Ник 👤'
		},

		{
			text: 'Деньги 💰',
			align: 'right'
		},

		{
			text: 'Рейтинг 👑',
			align: 'right'
		}
		],
		body: []
	}

	for(let g = 0; g < 10; g++){ 
		if(tops.length > g){ 
			let ups = g; 
			ups += 1; 
			if(g <= 8) ups = `${ups}`
			if(g == 9) ups = `10` 
			script.body.push([

			{
				icon_id: `id${tops[g].id}`,
				text: `${tops[g].prefix}`,
				url: `vk.com/id${tops[g].id}`
			},

			{
				text: `${spaces(tops[g].balance)}$`
			},

			{
				text: `${spaces(tops[g].lvl)}`
			},
			])
		} 
	}
	require("request").post({url: 'https://api.vk.com/method/appWidgets.update', form:{
		v: '5.95', 
		type: 'table', 
		code: `return ${JSON.stringify(script)};`, 
		access_token: login.widget
		}
	});
};