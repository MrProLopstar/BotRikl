module.exports = async function course(){
	let r = rand(3800,6000)
	config.rob = r;
	config.robp = Math.floor(r * 0.95);
	const kyrs = await rq('https://api.cryptonator.com/api/ticker/btc-usd');
	if(!kyrs.ticker) return;
	if(!kyrs.ticker.price) return;
	itog = Math.floor(Number(kyrs.ticker.price/2));
	config.rob = itog;
	config.robp = Math.floor(itog * 0.95);
};