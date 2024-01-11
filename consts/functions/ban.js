module.exports = async function ban(message, user){
	if(message.user != owner || message.user != adm){
		if(config.white == true){
			if(!message.isChat){
				message.send(`💡Извините, бот на технических работах! Возвращайтесь чуть позже!`);
				message.sendSticker(847);
				return true;
			} else {
				return true;
			}
		} else if(user.ban == true){
			if(!message.isChat){
				message.send(`🚫Извините, но ваш аккаунт заблокирован! Если вы не согласны с данным решением, то вы можете обратиться к Создателю или к Гл.Администраторам.`);
				message.sendSticker(848);
				return true;
			} else {
				return true;
			}
		}
	}
}