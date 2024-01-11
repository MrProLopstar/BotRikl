module.exports = async function warn(){
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length; i+=1){
	    users[i].pay_l = 0;
		await users[i].save();
	}
};