module.exports = async function restart(){
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length; i+=1){
		users[i].block.gun = 0;
		users[i].block.kit = 0;
		users[i].block.job = 0;
		users[i].block.tir = 0;
		users[i].block.rid = 0;
		users[i].block.nick = 0;
		users[i].block.pari = 0;
		users[i].block.bonus = 0;
		users[i].block.glove = 0;
		users[i].block.family = 0;
		await users[i].save()
	}
};