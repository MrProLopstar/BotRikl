module.exports = async function hours(){
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length; i+=1){
		let biz = bizs.find(x=> x.id === users[i].biz.id);
		let sb = fabric.find(x=> x.id === users[i].fabric.id);
		users[i].biz.zarp += users[i].biz.peop * config.peop;
		users[i].biz.zarp += biz.zp;
		users[i].fabric.zarp += sb.zp * users[i].fabric.sum;
		sbor = 3600000;
		if(users[i].level == 0){
			if(users[i].bank <= 250000000000){
				let per_one = users[i].bank / 100
				await users[i].inc("bank", Math.floor(per_one));
			}
		} else {
			if(users[i].bank <= 300000000000){
				let per_one = users[i].bank / 100
				await users[i].inc("bank", Math.floor(per_one));
			}
		}
		if(users[i].adm > 0){
		 	users[i].adm -= 1;
		 	if(users[i].adm == 0){
				await users[i].set("level", 0);
				await users[i].set("vip", false);
				users[i].block.kit = false;
		 		vk.api.call('messages.send', {
					user_id: users[i].id,
					random_id: 0,
					message: `Срок действия vip/vip+ прав истек.`
				});
		 	}
		}
		await users[i].save();
	}
};