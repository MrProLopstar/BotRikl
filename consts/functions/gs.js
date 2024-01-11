module.exports = async function gs(message){
	if(message.attachments.length > 0){
		if(typeof message.attachments[0].url !== 'undefined' && message.attachments[0].url !== null && message.attachments.length > 0){ 
			let audio = await require("request").get(message.attachments[0].url); 
			let api = await vk.api.call('users.get',{ user_id: message.senderId, fields: "sex" });
			let text = await asr(audio);
			if(typeof text !== 'undefined' && text !== null && text.length > 1){
				let name = `@id${message.user} (${api[0].first_name} ${api[0].last_name})`; 
				let time = message.attachments[0].duration;
				let pol = api[0].sex; 
				if(pol == 1){ 
					return message.send(`🙎‍♀ ${name}\n🔷 Сказала: ${text}\n🔷 ${time} ${sec(time)}`);
				} 
				if(pol == 2){ 
					return message.send(`🙎‍♂ ${name}\n🔷 Сказал: ${text}\n🔷 ${time} ${sec(time)}`);
				} 
			} else return message.send(`Не удалось распознать голосовое сообщение! ⛔`);
		}
	}
}