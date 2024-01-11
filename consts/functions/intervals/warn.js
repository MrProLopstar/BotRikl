module.exports = async function warn(){
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length; i+=1){
	    if(users[i].warn > 0){
			users[i].warn -= 1;
			users[i].warn_p = [];
			await users[i].save();
		}
	}
};