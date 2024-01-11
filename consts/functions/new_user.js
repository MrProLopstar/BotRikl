module.exports = async function new_user(message){
	if(!userq){
		let [user_info] = await vk.api.call("users.get", { user_id: message.user });
   		if(message.is("message") && message.isOutbox) return;
	 	
	 	config.number += 1;
     	regs += 1;

		let $user = new User({
			level: 0,
			balance: 50000,
			bank: 0,
			rob: 0,
			don: 0,
			gl: 0,
			ev: 0,
			tm: getUnix(),
			pay_l: 0,
			limit: true,
			heal: 100,
			tabl: 0,
			ref: 0,
			snow: 0,
			adm: 0,
			refm: 1,
			block: {
				nick: 0,
				bonus: 0,
				pari: 0,
				tir: 0,
				family: 0,
				gun: 0,
				glove: 0,
				job: 0,
				kit: 0,
				rid: 0,
				prof: false
			},
			number: config.number,
			id: message.senderId,
			nick: true,
			vip: false,
			car: 0,
			air: 0,
			hel: 0,
			home: 1,
			phone: 0,
			boat: 0, 
			pet: 0,
			vig: 0,
			ban: false,
			ban_i: "",
			ban_t: 0,
			warn: 0,
			warn_p: [],
			family: 0,
			gun: 0,
			prefix: user_info.first_name,
			rtime: `${time()} | ${data()}`,
			rid: 0,
			old: false,
			button: [],
			msg: {
				lvl: 1,
				command: 0,
				last_msg: `${time()} | ${data()}`
			},
			biz: {
				id: 0,
				peop: 0,
				zarp: 0
			},
			job: {
				lvl: 0,
				id: 0
			},
			inv: {
				pet: [],
				case: {
					one: 0,
					two: 0,
					three: 0,
					four: 0,
					five: 0
				}
			},
			fabric: {
			    id: 0,
				sum: 0,
			    max: 50,
			    zarp: 0
			},
			mine: {
			    vibr: 0,
			    adam: 0,
			    krypt: 0,
			    eng: 20,
				lvl: 0
		    },
			glove: {
				glove: 0,
				souls: 0,
				str: 0,
				time: 0,
				real: 0,
				mind: 0,
				space: 0,
				activ: false
			},
			marriage: {
				part: 0,
				req: []
			},
			quest: {
				lvl: 1,
				per: 0
			}
		});
		let stone = rand(1,7);
		if(stone == 1){
			$user.glove.glove = 1;
		}
		if(stone == 2){
			$user.glove.souls = 1;
		}
		if(stone == 3){
			$user.glove.str = 1;
		}
		if(stone == 4){
			$user.glove.time = 1;
		}
		if(stone == 5){
			$user.glove.real = 1;
		}
		if(stone == 6){
			$user.glove.mind = 1;
		}
		if(stone == 7){
			$user.glove.space = 1;
		}
		await $user.save();
		let smile = [12467,11023,5785,3606,13361,9976].random()

		if(message.isChat){
			if(convers.find(x=> x.cid === message.chat)){
				await message.send(`🎉 @id${message.user}(${user_info.first_name}), вы успешно зарегистрировались!\n📝 "Помощь" - список команд.\n🔔 Так же подпишись на нашу группу [${config.name}|BotRikl] и ознакомься с правилами!
			    `,{ keyboard: JSON.stringify(help_one) });
			} else {
				await message.send(`🎉 @id${message.user}(${user_info.first_name}), вы успешно зарегистрировались!\n📝 "Помощь" - список команд.\n🔔 Так же подпишись на нашу группу [${config.name}|BotRikl] и ознакомься с правилами!
			    `,{ keyboard: JSON.stringify(main), keyboard: JSON.stringify(help_one) });
			}
		} else {
			await message.send(`🎉 @id${message.user}(${user_info.first_name}), вы успешно зарегистрировались!\n📝 "Помощь" - список команд.\n🔔 Так же подпишись на нашу группу [${config.name}|BotRikl] и ознакомься с правилами!
			    `,{ keyboard: JSON.stringify(main), keyboard: JSON.stringify(help_one) });
		}
		return message.sendSticker(smile);
	}
}