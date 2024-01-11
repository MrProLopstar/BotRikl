module.exports = async function passwords(){
	let itog = rand(100,999);
	password = itog;
	password_t = getUnix() + 300000;
	vk.api.call('messages.send', {
		chat_id: chat_w,
		random_id: 0,
		message: `Код EVAL: ${password}`
	});
}