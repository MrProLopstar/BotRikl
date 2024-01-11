module.exports = async function check(){
	let userz = await global.User.find({ ban: true });
	let times = `${time()} | ${data()}`
	tcpp.ping({
		address: 'vk.com'
	}, function(err, data) {
		console.log(`
____Statistics____
${times}
Version: ${config.ver}
Ping VK: ${Math.round(data.avg)}ms (${Math.round(data.min)}ms || ${Math.round(data.max)}ms)
UpTime Bot: ${StampLeft(uptime)}
UpTime System: ${StampLeft(os.uptime())}
Free RAM: ${StampMB(os.freemem())}
System: ${plat(os.platform())}
Commands: ${spaces(config.command)}
Messages:  ${spaces(config.msg)}
Registered: ${spaces(config.number)}
Registered per session: ${spaces(regs)}
Messages per Session: ${spaces(sms)}
Forbidden words: ${spaces(zaprets.zapr.length)}
Blocked Players: ${spaces(userz.length)}
People with a report: ${spaces(config.rep.length)}
`+(config.white == false ? `WhiteList: OFF\n` : `WhiteList: ON\n`)+
(config.admin == false ? `GiveBack: OFF` : `Giveback: ON`)+`
Family's ${spaces(config.family)}/${spaces(config.chats)} Chats
Top Limit ${spaces(config.top_l.length)}/${spaces(config.rep_b.length)} Report Block
Reports ${spaces(config.stat.rep)}/${spaces(config.stat.otv)} Replies
Lottery Win ${spaces(lottery.win_people)}/ ${spaces(config.stat.alerts)} Alerts
Sponsorship chats: ${spaces(config.spon.length)}
		`);
	}, 60000);
}