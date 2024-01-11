module.exports = async function logback(){
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length; i+=1){
		if(!log[users[i].number]){
			log[users[i].number] = [];
		}
	}
};