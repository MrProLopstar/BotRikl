module.exports = async function lottery_win(){
	if(lottery.people > 0){
		let priz = rand(1,lottery.people)
		let bonus = lottery.balance
		let userz = await User.findOne({ number: lottery.players[priz].id });
		await userz.inc("balance", Math.floor(bonus));
		log[userz.number].push(`Выиграл в лотереи. Выигрыш: ${spaces(bonus)}$ Время: ${time()}|${data()}`);
		vk.api.call('messages.send', {
			user_id: userz.id,
			random_id: 0,
			message: `Вы выйграли в лотереи ${spaces(bonus)}$!`
		});
		lottery.players = {};
		lottery.people = 0;
		lottery.balance = 0
		lottery.win_people += 1;
		lottery.win[lottery.win_people] = {
			id: userz.number,
			count: bonus
		}
		fs.writeFileSync("./base/lottery.json", JSON.stringify(lottery, null, "\t"))
	};
}