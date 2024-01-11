module.exports = async function bank(){
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length; i+=1){
	    if(users[i].level == 0){
			if(users[i].bank >= 250000000000){
				await users[i].set("bank", 250000000000);
			}
		}
		if(users[i].level >= 1){
			if(users[i].bank >= 300000000000){
				await users[i].set("bank", 300000000000);
			}
		}
	}
};