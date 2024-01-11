module.exports = async function new_chat(message){
	if(!chat[message.chat] && message.isChat){
		config.chats += 1
        chat[message.chat] = {
            id: message.chat,
            number: config.chats
        }
		fs.writeFileSync("./base/chat.json", JSON.stringify(chat, null, "\t"))
    }
}