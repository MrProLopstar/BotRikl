module.exports = async function tops(){
	composition = await require("../tops/composition.js")();
	top_family = await leaderfamily();
	top_money = await leadermoney();
	top_rob = await leaderrob();
	top_gl = await leadergl();
	sbor = await 3600000;
};