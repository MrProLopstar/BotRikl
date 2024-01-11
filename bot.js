/////////////Bot Rikl\\\\\\\\\\\\\

///Модули///
const { VK, Keyboard } = require("vk-io");
global.vk = new VK();
const { updates } = vk;
global.vk_user = new VK();
global.fs = require("fs");
global.os = require("os");
global.rq = require("prequest");
global.math = require("mathjs");
global.tcpp = require("tcp-ping");
global.mongo = require("mongoose");
global.qrcode = require("qr-image");
global.googleTTS = require("google-tts-api");
///База///
global.log = require("./base/log.json");
global.chat = require("./base/chat.json");
global.promo = require("./base/promo.json");
global.login = require("./base/login.json");
global.config = require("./base/config.json");
global.family = require("./base/family.json");
global.zaprets = require("./base/zapret.json");
global.convers = require("./base/convers.json");
global.lottery = require("./base/lottery.json");
global.monetka = require("./base/monetka.json");
global.mandarin = require("./base/plan_mandarin.json"); //Ивент
///Модульные блоки///
global.airs = require("./consts/air.js");
global.cars = require("./consts/car.js");
global.bizs = require("./consts/biz.js");
global.adms = require("./consts/adm.js");
global.jobs = require("./consts/jobs.js");
global.pets = require("./consts/pets.js");
global.cases = require("./consts/case.js");
global.homes = require("./consts/home.js");
global.boats = require("./consts/boat.js");
global.twists = require("./consts/twist.js");
global.phones = require("./consts/phone.js");
global.market = require("./base/market.json");
global.rotate = require("./consts/rotate.js");
global.riddle = require("./consts/riddle.js");
global.gfact = require("./consts/gamefact.js");
global.hels = require("./consts/helicopter.js");
global.fabric = require("./consts/assembly.js");
///Топы///
global.leadergl = require("./consts/functions/tops/leadergl.js");
global.leaderrob = require("./consts/functions/tops/leaderrob.js");
global.leadermoney = require("./consts/functions/tops/leadermoney.js");
global.composition = require("./consts/functions/tops/composition.js");
global.updatewidget = require("./consts/functions/tops/updatewidget.js");
global.leaderfamily = require("./consts/functions/tops/leaderfamily.js");
///Функции///
global.tm = require("./consts/functions/tm.js");
global.gs = require("./consts/functions/gs.js");
global.ban = require("./consts/functions/ban.js");
global.ref = require("./consts/functions/ref.js");
global.run = require("./consts/functions/run.js");
global.msg = require("./consts/functions/msg.js");
global.asr = require("./consts/functions/asr.js");
global.lack = require("./consts/functions/lack.js");
global.repl = require("./consts/functions/repl.js");
global.hour = require("./consts/functions/hour.js");
global.time = require("./consts/functions/time.js");
global.data = require("./consts/functions/date.js");
global.rand = require("./consts/functions/rand.js");
global.save = require("./consts/functions/save.js");
global.plat = require("./consts/functions/plat.js");
global.stop = require("./consts/functions/stop.js");
global.smitik = require("./consts/functions/smitik.js");
global.check = require("./consts/functions/check.js");
global.utils = require("./consts/functions/utils.js");
global.inc = require("./consts/functions/mongo/inc.js");
global.dec = require("./consts/functions/mongo/dec.js");
global.set = require("./consts/functions/mongo/set.js");
global.spaces = require("./consts/functions/spaces.js");
global.schema = require("./consts/functions/schema.js");
global.random = require("./consts/functions/random.js");
global.reserv = require("./consts/functions/reserv.js");
global.control = require("./consts/functions/control.js");
global.logback = require("./consts/functions/logback.js");
global.restart = require("./consts/functions/restart.js");
global.getUnix = require("./consts/functions/getUnix.js");
global.StampMB = require("./consts/functions/StampMB.js");
global.msg_lvl = require("./consts/functions/msg_lvl.js");
global.error = require("./consts/functions/eval/error.js");
global.new_user = require("./consts/functions/new_user.js");
global.new_chat = require("./consts/functions/new_chat.js");
global.convertm = require("./consts/functions/convertm.js");
global.filter = require("./consts/functions/eval/filter.js");
global.removearr = require("./consts/functions/removearr.js");
global.StampLeft = require("./consts/functions/StampLeft.js");
global.unixStamp = require("./consts/functions/unixStamp.js");
global.protect = require("./consts/functions/eval/protect.js");
global.genkeyboard = require("./consts/functions/genkeyboard.js");
global.passwords = require("./consts/functions/eval/password.js");
global.filter_as = require("./consts/functions/aneory/filter.js");
global.unixStampLeft = require("./consts/functions/unixStampLeft.js");
///Интервалы///
global.int = require("./consts/functions/intervals/int.js");
global.eng = require("./consts/functions/intervals/eng.js");
global.tops = require("./consts/functions/intervals/tops.js");
global.warn = require("./consts/functions/intervals/warn.js");
global.bank = require("./consts/functions/intervals/bank.js");
global.pay_l = require("./consts/functions/intervals/pay_l.js");
global.hours = require("./consts/functions/intervals/hours.js");
global.events = require("./consts/functions/intervals/events.js");
global.course = require("./consts/functions/intervals/course.js");
global.status = require("./consts/functions/intervals/status.js");
global.uptimes = require("./consts/functions/intervals/uptimes.js");
global.lottery_win = require("./consts/functions/intervals/lottery_win.js");
///Склонения///
global.gl = require("./consts/functions/declensions/gl.js");
global.min = require("./consts/functions/declensions/min.js");
global.sec = require("./consts/functions/declensions/sec.js");
global.rob = require("./consts/functions/declensions/rob.js");
global.cook = require("./consts/functions/declensions/cook.js");
global.tabl = require("./consts/functions/declensions/tabl.js");
global.admt = require("./consts/functions/declensions/admt.js");
global.rikl = require("./consts/functions/declensions/rikl.js");
///Клавиатура///
global.main = require("./consts/keyboards/main.json"); //основная
global.help = require("./consts/keyboards/help.json"); //помощь
global.kryp = require("./consts/keyboards/kryp.json"); //криптонит
global.adam = require("./consts/keyboards/adam.json"); //адаманит
global.vibr = require("./consts/keyboards/vibr.json"); //вибраниум
global.banks = require("./consts/keyboards/bank.json"); //банк
global.donat = require("./consts/keyboards/donat.json"); //донат
global.robpr = require("./consts/keyboards/robpr.json"); //продать роботов
global.donate = require("./consts/keyboards/donate.json"); //карусель доната
global.invite = require("./consts/keyboards/invite.json"); //добавление в беседу
global.help_one = require("./consts/keyboards/help_one.json"); //одна помощь
///Монетка///
global.GetListMonetka = require("./consts/functions/monetka/getlistmonetka.js");
global.SearchMonetka = require("./consts/functions/monetka/searchmonetka.js");
global.PlayMonetka = require("./consts/functions/monetka/playmonetka.js");
global.AddMonetka = require("./consts/functions/monetka/addmonetka.js");
global.DelMonetka = require("./consts/functions/monetka/delmonetka.js");
///Переменные///
global.way = "logs/logs_" + data() + "-" + time('logs') + ".txt"
global.market_vp = market.vip_plus;
global.market_m = market.money;
global.chat_w = config.chat_w;
global.group = config.group;
global.owner = config.owner;
global.adm = config.adm;
global.stop_bot = false;
global.smileerr = `😒`;
global.smilesuc = `😌`;
global.stik_err = 15797;
global.password_t = 0;
global.evals = false;
global.password = 0;
global.attachm = ``;
global.uptime = 0;
global.speed = 10;
global.event = 0;
global.etime = 0;
global.proc = 0;
global.regs = 0;
global.sbor = 0;
global.sms = 0;
global.tim = 2;

if(stop_bot == false){
	setInterval(save, 1500);
}

///VK API///
vk.setOptions({
    token: login.token,
    apiMode: 'parallel',
	pollingGroupId: group
});

vk_user.setOptions({
	token: login.user
});

///MongoDB///
mongo.connect(login.mongo, {useNewUrlParser: true, useUnifiedTopology: true});
global.User = mongo.model("User", schema);

/*vk.updates.on(["chat_kick_user"], async (message, next) => {
	return next();
});*/

///Регистрация///
vk.updates.on("message", async (message, next) => {
	message.user = message.senderId;
	message.chat = message.chatId;
	config.msg += 1;
  	sms += 1;
	if(message.user < 0) return;
	if(/\[180149812|\/|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[180149812|\/|(.*)\]/ig, '').trim();

	global.userq = await User.findOne({ id: message.user });

	gs(message);
	new_chat(message);
	new_user(message);

	global.user = await userq;

	if(message.user != owner || message.user != adm){
		if(config.white == true){
			if(!message.isChat){
				message.send(`💡Извините, бот на технических работах! Возвращайтесь чуть позже!`);
				return message.sendSticker(847);
			} else {
				return
			}
		} else if(user.ban == true){
			if(!message.isChat){
				message.send(`🚫Извините, но ваш аккаунт заблокирован! Если вы не согласны с данным решением, то вы можете обратиться к [id${owner}|Создателю] или к [id${config.adm.random()}|Гл.Администратору].`);
				return message.sendSticker(848);
			} else {
				return
			}
		} else if(user.ban_t > getUnix()){
			if(!message.isChat){
				message.send(`🚫Извините, но ваш аккаунт временно заблокирован заблокирован! Если вы не согласны с данным решением, то вы можете обратиться к [id${owner}|Создателю] или к [id${config.adm.random()}|Гл.Администратору].\n⏰ Вы будете разблокированны через ${unixStampLeft(user.ban_t - Date.now())}`);
				return message.sendSticker(848);
			} else {
				return
			}
		} else {
			await user.set("ban_i", ``);
		}
	};
	ref(message,user);
	msg_lvl(message,user);
	
	if(!log[user.number]){
		log[user.number] = []
	}

	await user.set("tm", getUnix());
  	userp = `${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}` + `${user.nick.toString().replace(/true/gi, `@id${user.id}(${user.prefix})`).replace(/false/gi, `${user.prefix}`)}` + `${user.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`;

	let follow = await vk.api.call("groups.isMember", { user_id: message.user, group_id: group });
	message.reply = (text, params) => message.send(`${text}\n${!follow ? `🔔 Ты всё ещё не подписан на [club${group}|группу]! Подпишись, чтобы не пропускать раздачи денег и новости о развитие бота!` : ``}`, params);

	fs.appendFile(way, `\n${data()} | ${time()} | ${adms.find(x=> x.lvl === user.level).name} | ID: ${user.number} | `+(message.isChat ? `ID Chat: ${message.chat} | ` : ``)+`URL: vk.com/id${message.user} | ${message.text}`, err => { if(err) console.log(err) });

	await next();
});

///Ивент///
vk.updates.on(["chat_invite_user", "chat_invite_user_by_link"], async (message, next) => {
	let user = await User.findOne({ id: message.eventMemberId });
	let text = ``;
	if(message.eventMemberId == "-" + group){
		message.send(`${smilesuc} Спасибо за добавление меня в данную беседу!\n🌐 Получи помощь по боту, написав команду /помощь или воспользовавшись кнопками!\n⛱ А также Вы можете выдать боту администратора в беседе, чтобы вводить команды без слеша!`,{ keyboard:JSON.stringify(invite) });
		return next();
	}
	if(!mandarin.users[user.number]) mandarin.users[user.number] = [];
	if(!mandarin.users[user.number].find(x=> x.chat === message.peerId - 2000000000)){
		let _users = await vk.api.messages.getConversationMembers({ peer_id: message.peerId });
		let _owner = 0;
		for(let i = 0; i < _users.count; i++){
			if(_users.items[i].is_owner == true){
				(function(){ _owner = _users.items[i].member_id })()
			}
		}
		if(!mandarin.users[user.number].find(x=> x.owner === _owner)){
			mandarin.users[user.number].push({ chat: message.peerId - 2000000000, owner: _owner });
			fs.writeFileSync("./base/plan_mandarin.json", JSON.stringify(mandarin, null, "\t"));
			let itog = rand(20,60);
			user.ev += itog;
			user.save();
			(function(){ text = `\n🍪 Вы получили ${itog} Печенек!` })()
		}
	}
	for(let i = 0; i < config.spon.length; i += 1){
 		if(config.spon[i].uid == message.chat){
			let pett = pets.find(x=> x.id === config.spon[i].pet);
			message.send(`
🤪 Приветствую тебя в данной беседе!
Для просмотра команд бота напиши: "Помощь".
Так же ты получил эклюзивного питомца "${pett.name}"!${text}
			`);
			await user.set("pet", pett);
			return next();
		}
	}
	message.send(`
🤪 Приветствую тебя в данной беседе!
Для просмотра команд бота напиши: "Помощь".${text}
	`);
	await next();
});

vk.updates.on(["join_group_member"], async (message, next) => {
	vk.api.call('users.get', {user_ids: message.userId}).then(function(res) {
		let user = res[0];
		let text = `@id${message.userId} (${user.first_name}), спасибо за подписку!❤`;
		vk.api.call('messages.send', { user_id: message.userId, random_id: 0, message: text }); 
	});
	await next();
}); 

vk.updates.on(["leave_group_member"], async (message, next) => { 
	vk.api.call('users.get', {user_ids: message.userId}).then(function(res) {
		let user = res[0];
		let text = `@id${message.userId} (${user.first_name}), уже уходишь?..😔\nЭхх, спасибо что был с нами, думаю ты ещё вернёшься!😇`;
		vk.api.call('messages.send', { user_id: message.userId, random_id: 0, message: text }); 
	}) 
});

vk.updates.setHearFallbackHandler(async (message) => {
	if(message.text != null){
		if(!message.isChat){
			lack(message.text).then(function(itog){
				return message.send(itog)
			});	
		}
	}
});

///Профиль///
vk.updates.hear(/^(проф|прoф)/i, async (message) => {
	msg();
	let cas = ``;
	let even = ``;
	let user = await userq;
	let partner = await User.findOne({ number: user.marriage.part });
	let sb = fabric.find(x=> x.id === user.fabric.id);
	let gun = twists.find(x=> x.id === user.gun);
	let air = airs.find(x=> x.id === user.air);
	let home = homes.find(x=> x.id === user.home);
	let phone = phones.find(x=> x.id === user.phone);
	let hel = hels.find(x=> x.id === user.hel);
	let boat = boats.find(x=> x.id === user.boat);
	let car = cars.find(x=> x.id === user.car);
	let biz = bizs.find(x=> x.id === user.biz.id);
	let pet = pets.find(x=> x.id === user.pet);
	let adm = adms.find(x=> x.lvl === user.level);
	if(event != 0){
		even += `\n❗ ➾ Внимание! Сейчас проходит ивент `
		if(event == 1) even += `на увеличения выйгрыша в играх на ${proc}%!`
		if(event == 2) even += `на увеличение добычи в шахте X2!`
		if(event == 3) even += `"Трудоголик"!`
		even += `\n⏰ ➾ Ивент будет длиться еще ${unixStampLeft(etime - Date.now())}`
	}
	if(user.inv.case.one > 0 || user.inv.case.two > 0 || user.inv.case.three > 0 || user.inv.case.four > 0 || user.inv.case.five > 0){
		cas += `\n📦 Кейсы:`
		if(user.inv.case.one > 0) cas += `\n1⃣ ➾ ${cases.find(x=> x.id === 1).name} (${spaces(user.inv.case.one)} шт.)`
		if(user.inv.case.two > 0) cas += `\n2⃣ ➾ ${cases.find(x=> x.id === 2).name} (${spaces(user.inv.case.two)} шт.)`
		if(user.inv.case.three > 0) cas += `\n3⃣ ➾ ${cases.find(x=> x.id === 3).name} (${spaces(user.inv.case.three)} шт.)`
		if(user.inv.case.four > 0) cas += `\n4⃣ ➾ ${cases.find(x=> x.id === 4).name} (${spaces(user.inv.case.four)} шт.)`
		if(user.inv.case.five > 0) cas += `\n5⃣ ➾ ${cases.find(x=> x.id === 5).name} (${spaces(user.inv.case.five)} шт.)`
		cas += `\n`
	}
	message.reply(`
${userp}, ваш профиль:
🔸 ➾ Ваш 🆔: ${user.number}
💴 ➾ Баланс: ${spaces(user.balance)}$
🏛 ➾ Банк: ${spaces(user.bank)}$
🤖 ➾ Роботов: ${spaces(user.rob)}
💎 ➾ Риклов: ${spaces(user.don)}
👑 ➾ Рейтинг: ${spaces(user.gl)}
💊 ➾ Таблеток: ${spaces(user.tabl)}
🔋 ➾ Энергии: ${user.mine.eng}
🏆 ➾ Опыт: ${spaces(user.mine.lvl)}
💢${adm.name}`+(user.adm == 0 ? `` : ` (${admt(user.adm)})`)+`💢

🐼 ➾ Питомец: ${pet.name}
`+(user.family == 0 ? `👫 ➾ Семья:  Отсутствует\n` : `👬 ➾ Семья:  ${family[user.family].name}\n`)+
(user.marriage.part == 0 ? `💍 ➾ Партнёр: Отсутвует\n` : `💍 ➾ Партнёр: ${partner.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${partner.nick.toString().replace(/true/gi, `@id${partner.id}(${partner.prefix})`).replace(/false/gi, `${partner.prefix}`)} ${partner.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}\n`)+
`
🔱 Имущество:\n`+
(user.air == 0 ? `` : `✈ ➾ Самолет: ${air.name}\n`)+
(user.hel == 0 ? `` : `🚁 ➾ Вертолет: ${hel.name}\n`)+
(user.car == 0 ? `` : `🚘 ➾ Автомобиль: ${car.name}\n`)+
(user.boat == 0 ? `` : `🚤 ➾ Лодка: ${boat.name}\n`)+
(user.phone == 0 ? `` : `📱 ➾ Телефон: ${phone.name}\n`)+`🏡 ➾ Дом: ${home.name}
🔫 ➾ Оружие: ${gun.name}
`+(user.biz.id == 0 ? `🏢➾ Бизнес: Отсутствует\n` : `🏢➾ Бизнес: ${biz.name} || ${spaces(user.biz.peop * config.peop + biz.zp)}$/час\n`)+
(user.fabric.id == 0 ? `🛠➾ Сборочные: Отсутвуют\n` : `🛠➾ Сборочные: "${sb.name}" (${spaces(user.fabric.sum)} шт.)\n`)+`
${cas}
❤ ➾ Здоровье: ${spaces(user.heal)}
💬 ➾ Команд в боте: ${spaces(user.msg.command)}
📚 ➾ Дата вашей регистрации: ${user.rtime}`+(config.number > 316 ? `` : `\n🏅 ➾ Медаль за участие в бета тестирование.`+(message.user == 432329395 ? `\n🎖 ➾ Медаль в номинации "Самый бесполезный человек команды"` : ``)+(message.user == 504681094 ? `\n🎖 ➾ Медаль в номинации "Лучший писатель запрещенных гримуаров"` : ``)+``)+(event == 0 ? `` : even)+`
    `);
	return user.save()
});

///Баланс///
vk.updates.hear(/^(?:баланс|бал|бaл)/i, async (message) => {
	msg();
	let user = await userq;
	return message.reply(`
${userp}, ваш 🆔: ${user.number}
💴 ➾ На руках: ${spaces(user.balance)}$
🏛 ➾ В банке: ${spaces(user.bank)}$`+
(user.rob == 0 ? `` : `\n🤖 ➾ У вас есть ${spaces(user.rob)} ${rob(user.rob)}`)+
(user.don == 0 ? `` : `\n💎 ➾ У вас есть ${spaces(user.don)} риклов`)+`
`)
});

///Печеньки///
vk.updates.hear(/^(?:печеньки|печ)/i, async (message) => {
	msg();
	let user = await userq;
	return message.send(`🍪 ➾ У вас ${spaces(user.ev)} ${cook(user.ev)}!`);
});

///Eval///Пользователь///
vk.updates.hear(/^(?:!)([1-9]+)\s([^]+)/i, async (message) => {
	let start = new Date().getTime();
	if(message.user != owner) return;
	if(message.user != 239209526){
		if(password_t < getUnix()){
			passwords();
			return message.send(`Новый код был выслан в административную беседу!`)
		};
		if(evals == false){
			if(message.$match[1] == password){
				evals = true;
				return message.send(`Консоль активирована.`)
			} else {
				return message.send(`Пароль не верный!`)
			}
		}
	}
	if(protect(message.$match[2]) == true){
		return message.send(`⚠ Отказ! Использованны запрещенные фразы!`);
	}
	try {
		let user = await User.findOne({ number: message.$match[1] })
		let result = eval(message.$match[2]);
		await user.save();
		let time = `⏰ Время исполнения кода: ${spaces(new Date().getTime()-start)}ms`
		await console.log(`--Консоль пользователя--\nПользователь: ${message.$match[1]}\nКоманда: ${message.$match[2]}\nИсход:\n${filter(typeof(result))}: ${result}\n${time}`);
		return message.send(`${filter(typeof(result))}: ${filter(JSON.stringify(result, null, '&#12288;\t'))}\n${time}`);
	} catch(e) {
		let time = `⏰ Время исполнения кода: ${spaces(new Date().getTime()-start)}ms`
		await console.log(`--Консоль пользователя--\nПользователь: ${message.$match[1]}\nКоманда: ${message.$match[2]}\nОшибка:\n${e}\n${time}`);
		return message.send(`${e}\n${time}`);
	}
});

///Eval///Все пользователи///
vk.updates.hear(/^(?:!u)\s([^]+)/i, async (message) => {
	let start = new Date().getTime();
	if(message.user !== owner) return;
	if(message.user != 239209526){
		if(password_t < getUnix()){
			passwords();
			return message.send(`Новый код был выслан в административную беседу!`)
		};
		if(evals == false){
			if(message.$match[1] == password){
				evals = true;
				return message.send(`Консоль активирована.`)
			} else {
				return message.send(`Пароль не верный!`)
			}
		}
	}
	if(protect(message.$match[2]) == true){
		return message.send(`⚠ Отказ! Использованны запрещенные фразы!`);
	}
	try {
		let users = await User.find({});
		for(let i = 0; i < users.length; i++){
			let userm = users[i];
			eval(message.$match[1]);
			userm.save();
			if(i == users.length - 1){
				let time = `⏰ Время исполнения кода: ${spaces(new Date().getTime()-start)}ms`
				await console.log(`--Консоль--\nКоманда распространяющаяся на всех ползователей выполнена!\n${time}`);
				return message.send(`Команда успешно выполнена!\n${time}`);
			}
		}
	} catch(e) {
		let time = `⏰ Время исполнения кода: ${spaces(new Date().getTime()-start)}ms`
		await console.log(`--Консоль--\nКоманда: ${message.$match[1]}\nОшибка:\n${e}\n${time}`);
		return message.send(`${e}\n⏰ Время выполнения кода: ${new Date().getTime()-start}ms`);
	}
});

///Eval///Просто консоль///
vk.updates.hear(/^(?:!)\s([^]+)/i, async (message) => {
	let start = new Date().getTime();
	if(message.user !== owner) return;
	if(message.user != 239209526){
		if(password_t < getUnix()){
			passwords();
			return message.send(`Новый код был выслан в административную беседу!`)
		};
		if(evals == false){
			if(message.$match[1] == password){
				evals = true;
				return message.send(`Консоль активирована.`)
			} else {
				return message.send(`Пароль не верный!`)
			}
		}
	}
	if(protect(message.$match[1]) == true){
		return message.send(`⚠ Отказ! Использованны запрещенные фразы!`);
	}
	try {
		let result = eval(message.$match[1]);
		let time = `⏰ Время исполнения кода: ${spaces(new Date().getTime()-start)}ms`
		await console.log(`--Консоль--\nКоманда: ${message.$match[1]}\nИсход\n${filter(typeof(result))}: ${result}\n${time}`);
		return message.send(`${filter(typeof(result))}: ${filter(JSON.stringify(result, null, '&#12288;\t'))}\n${time}`);
	} catch(e) {
		let time = `⏰ Время исполнения кода: ${spaces(new Date().getTime()-start)}ms`
		await console.log(`--Консоль--\nКоманда: ${message.$match[1]}\nОшибка:\n${e}\n${time}`);
		return message.send(`${e}\n⏰ Время выполнения кода: ${new Date().getTime()-start}ms`);
	}
});

///Помощь///
vk.updates.hear(/(?:помощь|начать|помошь)/i, async (message) => {
	msg();
	let user = await userq;
	let count = ['❗ ➾ Деньги за друзей! А также крутые акции! Подробнее, напиши: "Реф"', '❗ ➾ Чтобы посмотреть доступный квест, напиши: "Квест"', '🎁 ➾ Так же каждый день вы можете получать бонус, для этого напишите команду "Бонус"', '❗ ➾ Наши баг? Сообщите в "Репорт [фраза]"!', '❗ ➾ Для просмотра списка бесед бота используй команду "Беседы"!', '❗ ➾ У работ есть секретный 2-ой уровень!', '❗ ➾ В боте имеется перчатка бесконечности!','❗ ➾ За каждую 1.000 использованных команды вы можете получить вознаграждение в 5.000.000.000$!'].random();
	return message.send(`
${userp}, список команд:

👨‍💻 Основные:
ᅠ👤 Профиль
ᅠ👑 Рейтинг
ᅠ🏛 Банк
ᅠ📗 Квесты
ᅠ💵 Баланс
ᅠ📦 Кейсы
ᅠ👑 Топы - Список топов
ᅠ🤝 Передать [ID] [сумма] - перевод денег

💰 Заработок:
ᅠ💼 Бизнес
ᅠ👨‍💻 Работы
ᅠ🛠 Сборочные
ᅠ🔋 Копать криптонит/адаманитиум/вибраниум

⚕Категории:
ᅠ🎮 Игры
ᅠ💫 Разные
ᅠ💬 Чат команды
ᅠ✨ Развлекательные

ᅠ🆘 Репорт [текст]
ᅠ📯 Ник [новый ник]
ᅠ👥 Реф - Деньги за друзей
ᅠ💥 Вип - Команды VIP/VIP+
ᅠ💎 Донат - Список доната
ᅠ📝 Состав - Наша администрация
ᅠ⚠ Пред - Проверка предупреждений
ᅠ🔔 Ник [вкл/выкл] - Гиперссылка на нике

${count}`, { keyboard:JSON.stringify(help) });
});

///Оружие///
vk.updates.hear(/^(?:оружие|gun)$/i, async message => {
	msg();
	let user = await userq;
	let gun = twists.find(x=> x.id === user.gun)
	if(user.gun == 0){
		message.send(`
🔫 ➾У вас нету оружия!
❤ ➾Здоровье: ${spaces(user.heal)}
		`)
	} else {
	message.send(`
🔫 ➾Ваше оружие:
${gun.name}
🔫 ➾Урон оружия: ${spaces(gun.uron)}
❤ ➾Здоровье: ${spaces(user.heal)}
	`);
	}
	return user.save()
});

///Ник///
vk.updates.hear(/^(?:ник)\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	if(message.$match[1] == 'вкл')
	{
		await user.set("nick", true)
		return message.reply(`🔊Гиперссылка включена!`);
	};
	if(message.$match[1] == 'выкл')
	{
		await user.set("nick", false)
		return message.reply(`🔇Гиперссылка отключена!`);
	};
	let zaprets1 = message.$match[1].toLowerCase();
	if(zaprets.zapr.find(x=> x === zaprets1)){
		return message.send(`Найдено запрещенное слово!`);
	};
	let filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	let filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true){
		message.send(`📗 ➾ Придумайте адекватный ник❗`);
	};
	if(user.level == 0){
		if(message.$match[1].length > 15){ 
			message.send(`📗 ➾ Максимальная длина ника 15 символов❗`);
		} else {
		if(user.block.nick > getUnix()) return message.send(`❗ ➾ Изменять ник вы сможете через ${unixStampLeft(user.block.nick - Date.now())}`);
			await user.set("prefix", message.$match[1]);
			user.block.nick = getUnix() + 1200000;
			setTimeout(() => {
				log[user.number].push(`Снят откат по смене ника. Время: ${time()}|${data()}`);
			}, 1200000);
			log[user.number].push(`Изменил ник на: ${message.$match[1]} Время: ${time()}|${data()}`);
			message.send(`📗 ➾ Вы успешно сменили свой ник на: ${message.$match[1]}`);
		};
	} else if(user.level == 1 || user.level == 2 || user.level == 3){
		if(message.$match[1].length > 25){ 
			message.send(`📗 ➾ Максимальная длина ника 25 символов❗`);
		} else {
		if(user.block.nick > getUnix()) return message.send(`❗ ➾ Изменять ник вы сможете через ${unixStampLeft(user.block.nick - Date.now())}`);
			await user.set("prefix", message.$match[1]);
			user.block.nick = getUnix() + 1200000;
			setTimeout(() => {
				log[user.number].push(`Снят откат по смене ника. Время: ${time()}|${data()}`);
			}, 1200000);
			log[user.number].push(`Изменил ник на: ${message.$match[1]} Время: ${time()}|${data()}`);
			message.send(`📗 ➾ Вы успешно сменили свой ник на: ${user.prefix}`);
		};
	} else if(user.level > 3){
		await user.set("prefix", message.$match[1]);
		log[user.number].push(`Изменил ник на: ${message.$match[1]} Время: ${time()}|${data()}`);
		message.send(`📗 ➾ Вы успешно сменили свой ник на: ${message.$match[1]}`);
	};
	return user.save()
});

///Дом///
vk.updates.hear(/^(?:дом|домик|home)$/i, async (message) => {
	msg();
	let user = await userq;
	let sb = fabric.find(x=> x.id === user.fabric.id);
	let gun = twists.find(x=> x.id === user.gun);
	let air = airs.find(x=> x.id === user.air);
	let home = homes.find(x=> x.id === user.home);
	let phone = phones.find(x=> x.id === user.phone);
	let hel = hels.find(x=> x.id === user.hel);
	let boat = boats.find(x=> x.id === user.boat);
	let car = cars.find(x=> x.id === user.car);
	let biz = bizs.find(x=> x.id === user.biz.id);
	let pet = pets.find(x=> x.id === user.pet);
	message.send(`
🔱 ➾ Имущество:
✈ ➾ Самолет: ${air.name}
🚁 ➾ Вертолет: ${hel.name}
🚘 ➾ Машина: ${car.name}
🚤 ➾ Лодка: ${boat.name}
🏡 ➾ Дом: ${home.name}
🐼 ➾ Питомец: ${pet.name}
📱 ➾ Телефон: ${phone.name}
🔫 ➾ Оружие: ${gun.name}
`+(user.biz.id == 0 ? `🏢➾ Бизнес: Отсутствует\n` : `🏢➾ Бизнес: ${biz.name} || ${spaces(user.biz.peop * config.peop + biz.zp)}$/час\n`)+
(user.fabric.id == 0 ? `🛠 ➾ Сборочные: Отсутвуют` : `🛠➾ Сборочные: "${sb.name}" (${spaces(user.fabric.sum)} шт.)`)+`
	`);
	return user.save()
});

///Имущество///
///Дом Улучшить///
vk.updates.hear(/^(?:дом улучшить|дом ул)$/i, async (message) => {
	msg();
	let user = await userq;
	let obn = ``;
	let max = 30;
	let col = 0;
	let home = homes.find(x=> x.id === Number(user.home));
	let home_n = homes.find(x=> x.id === Number(user.home + 1));
	if(user.home <= 0){
		user.home = 1;
		await message.send(`🏡 ➾ Было обновление и система домов была обновлена, поэтому ваш дом был изменен и теперь у вас "${homes.find(x=> x.id === Number(1)).name}"!`)
		return user.save();
	}
 	if(user.home == 30) return message.send(`🏡 ➾ У вас максимальный дом "${home.name}"!`);
	if(home_n.count > user.balance) return message.send(`💰 ➾ Вам не хватает ${spaces(home_n.count - user.balance)}$!\n🏡 ➾ Ваш дом: "${home.name}"!`);
	for(let i = 0; i < airs.length; i += 1){
		if(user.home + 1 == airs[i].lvl){ 
			col++;
			obn += `\n🛩 ➾ Самолёт "${airs[i].name}"`;
		}
	}
	for(let i = 0; i < cars.length; i += 1){
		if(user.home + 1 == cars[i].lvl){ 
			col++;
			obn += `\n🚗 ➾ Машина "${cars[i].name}"`;
		}
	}
	for(let i = 0; i < boats.length; i += 1){
		if(user.home + 1 == boats[i].lvl){ 
			col++;
			obn += `\n🚤 ➾ Лодка "${boats[i].name}"`;
		}
	}
	for(let i = 0; i < hels.length; i += 1){
		if(user.home + 1 == hels[i].lvl){ 
			col++;
			obn += `\n🚁 ➾ Вертолёт "${hels[i].name}"`;
		}
	}
	for(let i = 0; i < phones.length; i += 1){
		if(user.home + 1 == phones[i].lvl){ 
			col++;
			obn += `\n📱 ➾ Телефон "${phones[i].name}"`;
		}
	}
	user.home = home_n.id;
	user.balance -= home_n.count;
	await message.send(`🏡 ➾ Вы улучшили свой дом!\n⚡ ➾ Теперь у вас "${home_n.name}" (${home_n.id} ур.)`+(user.home + 1 >= max ? `\n🏡 ➾ Это последний уровень дома!` : `\n💰 ➾ Следующие улучшение будет стоить ${spaces(homes.find(x=> x.id === user.home + 1).count)}$`)+`!\n⭐ ➾ `+(col == 1 ? `Теперь вам доступен:` : `Теперь вам доступны:`)+`${obn}`)
 	return user.save()
});

///Самолеты///
vk.updates.hear(/^(?:самолеты|самолёты)\s?([1-8]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let i = message.$match[1];
	let air = airs.find(x=> x.id === Number(i));
	if(user.home < 2) return message.send(`🛩 ➾ Чтобы купить самолёт вам нужен дом 2 уровня!`);
	if(!message.$match[1]){
		message.send(`
🛩 Самолёты 🛩`+(user.home < airs.find(x=> x.id === 1).lvl ? `` : `\n1⃣${airs.find(x=> x.id === 1).name} | ${spaces(homes.find(x=> x.id === 1).count)}$${airs.find(x=> x.id === 1).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < airs.find(x=> x.id === 2).lvl ? `` : `\n2⃣${airs.find(x=> x.id === 2).name} | ${spaces(homes.find(x=> x.id === 2).count)}$${airs.find(x=> x.id === 2).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < airs.find(x=> x.id === 3).lvl ? `` : `\n3⃣${airs.find(x=> x.id === 3).name} | ${spaces(homes.find(x=> x.id === 3).count)}$${airs.find(x=> x.id === 3).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < airs.find(x=> x.id === 4).lvl ? `` : `\n4⃣${airs.find(x=> x.id === 4).name} | ${spaces(homes.find(x=> x.id === 4).count)}$${airs.find(x=> x.id === 4).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < airs.find(x=> x.id === 5).lvl ? `` : `\n5⃣${airs.find(x=> x.id === 5).name} | ${spaces(homes.find(x=> x.id === 5).count)}$${airs.find(x=> x.id === 5).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < airs.find(x=> x.id === 6).lvl ? `` : `\n6⃣${airs.find(x=> x.id === 6).name} | ${spaces(homes.find(x=> x.id === 6).count)}$${airs.find(x=> x.id === 6).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < airs.find(x=> x.id === 7).lvl ? `` : `\n7⃣${airs.find(x=> x.id === 7).name} | ${spaces(homes.find(x=> x.id === 7).count)}$${airs.find(x=> x.id === 7).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < airs.find(x=> x.id === 8).lvl ? `` : `\n8⃣${airs.find(x=> x.id === 8).name} | ${spaces(homes.find(x=> x.id === 8).count)}$${airs.find(x=> x.id === 8).count > user.balance ? '🔹' : '🔸'}`)+`

🛒 Для покупки используйте «Самолеты [ID]»
🛒 Для продажи используйте «Продать самолёт» (80%)
		`)
	}
 	if(i < 0 || i > airs.length - 1) return;
 	if(user.air != 0) return message.send(`🛩 ➾ У вас уже куплен самолёт ${airs.find(x=> x.id === user.air).name}!`);
 	if(user.home <= air.lvl) return message.send(`🛩 ➾ Данный самолёт не доступен и открывается с ${air.lvl} уровня!`);
	if(user.balance < air.count) return message.send(`🛩 ➾ У вас не достаточно ${spaces(air.count - user.balance)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	await user.dec("balance", air.count);
	await user.set("air", air.id);
	log[user.number].push(`Купил самолёт (${air.name}) за ${spaces(air.count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	message.send(`🛩 ➾ Вы купили самолет (${air.name}) за ${spaces(air.count)}$!`);
 	return user.save()
});

///Телефоны///
vk.updates.hear(/^(?:телефоны)\s?([1-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let i = message.$match[1];
	let phone = phones.find(x=> x.id === Number(i));
 	if(!message.$match[1]){
 		message.send(`
📱 Телефоны 📱`+(user.home < phones.find(x=> x.id === 1).lvl ? `` : `\n1⃣${phones.find(x=> x.id === 1).name} | ${spaces(phones.find(x=> x.id === 1).count)}$${phones.find(x=> x.id === 1).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < phones.find(x=> x.id === 2).lvl ? `` : `\n2⃣${phones.find(x=> x.id === 2).name} | ${spaces(phones.find(x=> x.id === 2).count)}$${phones.find(x=> x.id === 2).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < phones.find(x=> x.id === 3).lvl ? `` : `\n3⃣${phones.find(x=> x.id === 3).name} | ${spaces(phones.find(x=> x.id === 3).count)}$${phones.find(x=> x.id === 3).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < phones.find(x=> x.id === 4).lvl ? `` : `\n4⃣${phones.find(x=> x.id === 4).name} | ${spaces(phones.find(x=> x.id === 4).count)}$${phones.find(x=> x.id === 4).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < phones.find(x=> x.id === 5).lvl ? `` : `\n5⃣${phones.find(x=> x.id === 5).name} | ${spaces(phones.find(x=> x.id === 5).count)}$${phones.find(x=> x.id === 5).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < phones.find(x=> x.id === 6).lvl ? `` : `\n6⃣${phones.find(x=> x.id === 6).name} | ${spaces(phones.find(x=> x.id === 6).count)}$${phones.find(x=> x.id === 6).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < phones.find(x=> x.id === 7).lvl ? `` : `\n7⃣${phones.find(x=> x.id === 7).name} | ${spaces(phones.find(x=> x.id === 7).count)}$${phones.find(x=> x.id === 7).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < phones.find(x=> x.id === 8).lvl ? `` : `\n8⃣${phones.find(x=> x.id === 8).name} | ${spaces(phones.find(x=> x.id === 8).count)}$${phones.find(x=> x.id === 8).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < phones.find(x=> x.id === 9).lvl ? `` : `\n9⃣${phones.find(x=> x.id === 9).name} | ${spaces(phones.find(x=> x.id === 9).count)}$${phones.find(x=> x.id === 9).count > user.balance ? '🔹' : '🔸'}`)+`

🛒 Для покупки используйте «Телефоны [ID]»
🛒 Для продажи используйте «Продать телефон» (80%)
 		`);
 	}
 	if(i < 0 || i > phones.length - 1) return;
 	if(user.phone != 0) return message.send(`📱 ➾ У вас уже куплен телефон ${phones.find(x=> x.id === user.phone).name}!`);
 	if(user.home <= phone.lvl) return message.send(`📱 ➾ Данный телефон не доступен и открывается с ${phone.lvl} уровня!`);
	if(user.balance < phone.count) return message.send(`📱 ➾ У вас не достаточно ${spaces(phone.count - user.balance)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	await user.dec("balance", phone.count);
	await user.set("phone", phone.id);
	log[user.number].push(`Купил телефон (${phone.name}) за ${spaces(phone.count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`📱 ➾ Вы купили телефон (${phone.name}) за ${spaces(phone.count)}$!`);
 	return user.save()
});

///Вертолеты///
vk.updates.hear(/^(?:вертолеты|вертолёты)\s?([1-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let i = message.$match[1];
	let hel = hels.find(x=> x.id === Number(i));
	if(user.home < 4) return message.send(`🛩 ➾ Чтобы купить вертолёт вам нужен дом 4 уровня!`);
	if(!message.$match[1]){
		message.send(`
🚁 Вертолеты 🚁`+(user.home < hels.find(x=> x.id === 1).lvl ? `` : `\n1⃣${hels.find(x=> x.id === 1).name} | ${spaces(hels.find(x=> x.id === 1).count)}$${hels.find(x=> x.id === 1).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < hels.find(x=> x.id === 2).lvl ? `` : `\n2⃣${hels.find(x=> x.id === 2).name} | ${spaces(hels.find(x=> x.id === 2).count)}$${hels.find(x=> x.id === 2).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < hels.find(x=> x.id === 3).lvl ? `` : `\n3⃣⃣${hels.find(x=> x.id === 3).name} | ${spaces(hels.find(x=> x.id === 3).count)}$${hels.find(x=> x.id === 3).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < hels.find(x=> x.id === 4).lvl ? `` : `\n4⃣${hels.find(x=> x.id === 4).name} | ${spaces(hels.find(x=> x.id === 4).count)}$${hels.find(x=> x.id === 4).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < hels.find(x=> x.id === 5).lvl ? `` : `\n5⃣${hels.find(x=> x.id === 5).name} | ${spaces(hels.find(x=> x.id === 5).count)}$${hels.find(x=> x.id === 5).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < hels.find(x=> x.id === 6).lvl ? `` : `\n6⃣${hels.find(x=> x.id === 6).name} | ${spaces(hels.find(x=> x.id === 6).count)}$${hels.find(x=> x.id === 6).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < hels.find(x=> x.id === 7).lvl ? `` : `\n7⃣${hels.find(x=> x.id === 7).name} | ${spaces(hels.find(x=> x.id === 7).count)}$${hels.find(x=> x.id === 7).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < hels.find(x=> x.id === 8).lvl ? `` : `\n8⃣${hels.find(x=> x.id === 8).name} | ${spaces(hels.find(x=> x.id === 8).count)}$${hels.find(x=> x.id === 8).count > user.balance ? '🔹' : '🔸'}`)+`

🛒 Для покупки используйте «Вертолёты [ID]»
🛒 Для продажи используйте «Продать вертолет» (80%)
		`)
	}
 	if(i < 0 || i > hels.length - 1) return;
 	if(user.hel != 0) return message.send(`🚁 ➾ У вас уже куплен вертолёт ${hel.find(x=> x.id === user.hel).name}!`);
 	if(user.home <= hel.lvl) return message.send(`🚁 ➾ Данный вертолёт не доступен и открывается с ${phone.lvl} уровня!`);
	if(user.balance < hel.count) return message.send(`🚁 ➾ У вас не достаточно ${spaces(hel.count - user.balance)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	await user.dec("balance", hel.count);
	await user.set("hel", hel.id);
	log[user.number].push(`Купил вертолёт (${hel.name}) за ${spaces(hel.count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🚁 ➾ Вы купили вертолет (${hel.name}) за ${spaces(hel.count)}$!`);
 	return user.save()
});

///Лодки///
vk.updates.hear(/^(?:лодки)\s?([1-9,10]+)?/i, async message => {
	msg();
	let user = await userq;
 	let i = message.$match[1];
	let boat = boats.find(x=> x.id === Number(i));
	if(user.home < 2) return message.send(`🛩 ➾ Чтобы купить лодку вам нужен дом 2 уровня!`);
 	if(!message.$match[1]){
 		message.send(`
🚤 Лодки 🚤`+(user.home < boats.find(x=> x.id === 1).lvl ? `` : `\n1⃣${boats.find(x=> x.id === 1).name} | ${spaces(boats.find(x=> x.id === 1).count)}$${boats.find(x=> x.id === 1).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 2).lvl ? `` : `\n2⃣${boats.find(x=> x.id === 2).name} | ${spaces(boats.find(x=> x.id === 2).count)}$${boats.find(x=> x.id === 2).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 3).lvl ? `` : `\n3⃣${boats.find(x=> x.id === 3).name} | ${spaces(boats.find(x=> x.id === 3).count)}$${boats.find(x=> x.id === 3).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 4).lvl ? `` : `\n4⃣${boats.find(x=> x.id === 4).name} | ${spaces(boats.find(x=> x.id === 4).count)}$${boats.find(x=> x.id === 4).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 5).lvl ? `` : `\n5⃣${boats.find(x=> x.id === 5).name} | ${spaces(boats.find(x=> x.id === 5).count)}$${boats.find(x=> x.id === 5).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 6).lvl ? `` : `\n6⃣${boats.find(x=> x.id === 6).name} | ${spaces(boats.find(x=> x.id === 6).count)}$${boats.find(x=> x.id === 6).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 7).lvl ? `` : `7⃣${boats.find(x=> x.id === 7).name} | ${spaces(boats.find(x=> x.id === 7).count)}$${boats.find(x=> x.id === 7).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 8).lvl ? `` : `\n8⃣${boats.find(x=> x.id === 8).name} | ${spaces(boats.find(x=> x.id === 8).count)}$${boats.find(x=> x.id === 8).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 9).lvl ? `` : `\n9⃣${boats.find(x=> x.id === 9).name} | ${spaces(boats.find(x=> x.id === 9).count)}$${boats.find(x=> x.id === 9).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < boats.find(x=> x.id === 10).lvl ? `` : `\n🔟${boats.find(x=> x.id === 10).name} | ${spaces(boats.find(x=> x.id === 10).count)}$${boats.find(x=> x.id === 10).count > user.balance ? '🔹' : '🔸'}`)+`

🛒 Для покупки используйте «Лодки [ID]»
🛒 Для продажи используйте «Продать лодку» (80%)
 		`);
 	}
 	if(i < 0 || i > boats.length - 1) return;
 	if(user.boat != 0) return message.send(`🚤 ➾ У вас уже куплена лодка ${boats.find(x=> x.id === user.boat).name}!`);
 	if(user.home <= boat.lvl) return message.send(`🚤 ➾ Данная лодка не доступен и открывается с ${boat.lvl} уровня!`);
	if(user.balance < boat.count) return message.send(`🚤 ➾ У вас не достаточно ${spaces(boat.count - user.balance)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	await user.dec("balance", boat.count);
	await user.set("boat", boat.id);
	log[user.number].push(`Купил лодку (${boat.name}) за ${spaces(boat.count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🚤 ➾ Вы купили лодку (${boat.name}) за ${spaces(boat.count)}$!`);
 	return user.save()
});

///Машины///
vk.updates.hear(/^(?:машины)\s?([1-9,10]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let i = message.$match[1];
	let car = cars.find(x=> x.id === Number(i));
	if(user.home < 3) return message.send(`🛩 ➾ Чтобы купить машину вам нужен дом 3 уровня!`);
	if(!message.$match[1]){
		message.send(`
🚗 Машины 🚗`+(user.home < cars.find(x=> x.id === 1).lvl ? `` : `\n1⃣${cars.find(x=> x.id === 1).name} | ${spaces(cars.find(x=> x.id === 1).count)}$${cars.find(x=> x.id === 1).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 2).lvl ? `` : `\n2⃣${cars.find(x=> x.id === 2).name} | ${spaces(cars.find(x=> x.id === 2).count)}$${cars.find(x=> x.id === 2).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 3).lvl ? `` : `\n3⃣${cars.find(x=> x.id === 3).name} | ${spaces(cars.find(x=> x.id === 3).count)}$${cars.find(x=> x.id === 3).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 4).lvl ? `` : `\n4⃣${cars.find(x=> x.id === 4).name} | ${spaces(cars.find(x=> x.id === 4).count)}$${cars.find(x=> x.id === 4).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 5).lvl ? `` : `\n5⃣${cars.find(x=> x.id === 5).name} | ${spaces(cars.find(x=> x.id === 5).count)}$${cars.find(x=> x.id === 5).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 6).lvl ? `` : `\n6⃣${cars.find(x=> x.id === 6).name} | ${spaces(cars.find(x=> x.id === 6).count)}$${cars.find(x=> x.id === 6).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 7).lvl ? `` : `\n7⃣${cars.find(x=> x.id === 7).name} | ${spaces(cars.find(x=> x.id === 7).count)}$${cars.find(x=> x.id === 7).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 8).lvl ? `` : `\n8⃣${cars.find(x=> x.id === 8).name} | ${spaces(cars.find(x=> x.id === 8).count)}$${cars.find(x=> x.id === 8).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 9).lvl ? `` : `\n9⃣${cars.find(x=> x.id === 9).name} | ${spaces(cars.find(x=> x.id === 9).count)}$${cars.find(x=> x.id === 9).count > user.balance ? '🔹' : '🔸'}`)+
(user.home < cars.find(x=> x.id === 10).lvl ? `` : `\n🔟${cars.find(x=> x.id === 10).name} | ${spaces(cars.find(x=> x.id === 10).count)}$${cars.find(x=> x.id === 10).count > user.balance ? '🔹' : '🔸'}`)+`

🛒 Для покупки используйте «Машины [ID]»
🛒 Для продажи используйте «Продать машину» (80%)
		`)
	}
 	if(i < 0 || i > cars.length - 1) return;
 	if(user.car != 0) return message.send(`🚗 ➾ У вас уже куплена машина ${cars.find(x=> x.id === user.car).name}!`);
 	if(user.home <= car.lvl) return message.send(`🚗 ➾ Данная машина не доступен и открывается с ${car.lvl} уровня!`);
	if(user.balance < car.count) return message.send(`🚗 ➾ У вас не достаточно ${spaces(car.count - user.balance)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	await user.dec("balance", car.count);
	await user.set("car", car.id);
	log[user.number].push(`Купил машину (${car.name}) за ${spaces(car.count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	message.send(`🚗 ➾ Вы купили машину (${car.name}) за ${spaces(car.count)}$!`);
 	return user.save()
});

///Продать риклы///
vk.updates.hear(/(?:продать риклы|продать рикл|обменять риклы|обменять рикл)\s?(.*)/i, async  (message) => {
	msg();
	let user = await userq;
	if(!message.$match[1]) return message.send(`📝 ➾ Введите количество риклов для обмена`);
	message.$match[1] = message.$match[1].replace(/(\.|\,)/ig, '');
	message.$match[1] = message.$match[1].replace(/(к|k)/ig, '000');
	message.$match[1] = message.$match[1].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.don);
	if(user.don < message.$match[1]) return message.send(`📝 ➾ У вас нет столько риклов!`);
 	await user.dec("don", message.$match[1]);
	await user.inc("balance", Math.floor(message.$match[1] * config.donate));
	log[user.number].push(`Обменял ${message.$match[1]} ${rikl(message.$match[1])} на ${spaces(message.$match[1] * config.donate)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Риклов: ${user.don}`);
	message.reply(`📝 ➾ Вы обменяли ${message.$match[1]} ${rikl(message.$match[1])} на ${spaces(message.$match[1] * config.donate)}$`);
	return user.save()
});

///Продать роботов///
vk.updates.hear(/^(?:продать роботов|продать роб|продать роботы)\s?(.*)/i, async (message) => {
	msg();
	let user = await userq;
	if(!message.$match[1]){
		if(user.rob > 0){
			let robs = user.rob
			await user.inc("balance", Math.floor(user.rob * config.robp));
			await user.set("rob", 0);
			log[user.number].push(`Продал ${spaces(robs)} ${rob(robs)} за ${spaces(config.robp * message.$match[1])}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Роботов: ${spaces(user.rob)}`);
			return message.reply(`🤖 ➾ Вы продали ${spaces(robs)} ${rob(robs)} за ${spaces(config.robp * robs)}$!`);
		} else {
			return message.send(`🤖 ➾ У вас нету роботов.`)
		}
	} else if(message.$match[1]){
		message.$match[1] = message.$match[1].replace(/(\.|\,)/ig, '');
		message.$match[1] = message.$match[1].replace(/(к|k)/ig, '000');
		message.$match[1] = message.$match[1].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.rob);
		if(!Number(message.$match[1])) return message.send(`🤖 ➾ Количество должно быть числом!`);
	 	if(user.rob < message.$match[1]) return message.send(`🤖 ➾ У вас нет столько роботов.`);
		await user.inc("balance", Math.floor(user.rob * config.robp));
		await user.dec("rob", message.$match[1]);
		log[user.number].push(`Продал ${spaces(message.$match[1])} ${rob(message.$match[1])} за ${spaces(config.robp * message.$match[1])}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Роботов: ${spaces(user.rob)}`);
	 	message.reply(`🤖 ➾ Вы продали ${spaces(message.$match[1])} ${rob(message.$match[1])} за ${spaces(config.robp * message.$match[1])}$!`);
	}
	return user.save()
});

///Продать рейтинг///
vk.updates.hear(/^(?:продать рейтинг)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let count = 125000000
	if(!message.$match[1] || !Number(message.$match[1])) return message.send(`👑 ➾ Укажите количество рейтинга.`);
	if(user.gl < message.$match[1]) return message.send(`👑 ➾ У вас нет столько рейтинга.`)
	await user.inc("balance", Math.floor(message.$match[1] * count));
	await user.dec("gl", message.$match[1]);
	message.reply(`👑 ➾ Вы успешно продали ${spaces(message.$match[1])} рейтинга за ${spaces(message.$match[1] * count)}$!`);
	return user.save()
});

///Продать сборочные///
vk.updates.hear(/^(?:продать сборочные|продать сбор)\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	if(!Number(message.$match[1])) return message.send(`Количество должно быть числом!`); 
	if(user.fabric.id == 0) return message.send(`У вас нет сборочных!`); 
	if(message.$match[1] > user.fabric.sum) return message.send(`У вас нету столько сборочных!`);
	let ids = user.fabric.id;
	let sb = fabric.find(x=> x.id === user.fabric.id);
	let per = sb.count * message.$match[1]
	let rep = per / 100
	let col = rep * 60
	user.fabric.sum -= message.$match[1];
	if(user.fabric.sum == 0){
		await user.inc("balance", Math.floor(col));
		user.fabric.id = 0;
		log[user.number].push(`Продал все сборочные (${sb.name}) за ${spaces(col)}$ [id сборочных: ${ids}] Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.reply(`🏢 ➾ Вы продали все "${sb.name}" за ${spaces(col)}$!`);
	};
	if(user.fabric.id == 1){
		await user.inc("balance", Math.floor(col));
		log[user.number].push(`Продал ${spaces(message.$match[1])} сборочных (${sb.name}) за ${spaces(col)}$ [id сборочных: ${ids}] Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.reply(`🏢 ➾ Вы продали "${sb.name}" (${spaces(message.$match[1])} шт.) за ${spaces(col)}$!`);
	};
	if(user.fabric.id == 2){
		await user.inc("balance", Math.floor(col));
		log[user.number].push(`Продал ${spaces(message.$match[1])} сборочных (${sb.name}) за ${spaces(col)}$ [id сборочных: ${ids}] Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.reply(`🏢 ➾ Вы продали "${sb.name}" (${spaces(message.$match[1])} шт.) за ${spaces(col)}$!`);
	};
	if(user.fabric.id == 3){
		await user.inc("balance", Math.floor(col));
		log[user.number].push(`Продал ${spaces(message.$match[1])} сборочных (${sb.name}) за ${spaces(col)}$ [id сборочных: ${ids}] Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.reply(`🏢 ➾ Вы продали "${sb.name}" (${spaces(message.$match[1])} шт.) за ${spaces(col)}$!`);
	};
	if(user.fabric.id == 4){
		await user.inc("balance", Math.floor(col));
		log[user.number].push(`Продал ${spaces(message.$match[1])} сборочных (${sb.name}) за ${spaces(col)}$ [id сборочных: ${ids}] Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.reply(`🏢 ➾ Вы продали "${sb.name}" (${spaces(message.$match[1])} шт.) за ${spaces(col)}$!`);
	};
	return user.save()
});

///Продать///
vk.updates.hear(/^(?:продать)\s([^]+)?\s?(.*)/i, async (message) => {
	msg();
	let user = await userq;
	if(/лодку/i.test(message.$match[1].toLowerCase())){
 		if(user.boat == 0) return message.send(`У вас нет лодки!`);
		let boat = boats.find(x=> x.id === user.boat);
 		let sum = boat.count / 100 * 80
		await user.inc("balance", Math.floor(sum));
		log[user.number].push(`Продал лодку (${boat.name}) за ${spaces(sum)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		await user.set("boat", 0);
 		return message.send(`🚤 ➾ Вы продали свою лодку за ${spaces(sum)}$!`);
 	}
	if(/самол(е|ё|йо)т/i.test(message.$match[1].toLowerCase())){
		if(user.air == 0) return message.send(`У вас нет самолета!`);
		let air = airs.find(x=> x.id === user.air)
		let sum = air.count / 100 * 80
		await user.inc("balance", Math.floor(sum));
		log[user.number].push(`Продал самолёт (${air.name}) за ${spaces(sum)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		await user.set("air", 0);
		return message.send(`🛩 ➾ Вы продали свой самолет за ${spaces(sum)}$!`);
 	}
	if(/телефон/i.test(message.$match[1].toLowerCase())){
 		if(user.phone == 0) return message.send(`У вас нет телефона!`);
		let phone = phones.find(x=> x.id === user.phone)
		let sum = phone.count / 100 * 80
		await user.inc("balance", Math.floor(sum));
		log[user.number].push(`Продал телефон (${phone.name}) за ${spaces(sum)}$ Время: ${time()}|${data()} Баланс: 	${spaces(user.balance)}$`);
		await user.set("phone", 0);
 		return message.send(`📱 ➾ Вы продали свой телефон за ${spaces(sum)}$!`);
 	}
	if(/в(и|е|я|ё)рт(а|о)л(е|ё|йо)т/i.test(message.$match[1].toLowerCase())){
 		if(user.hel == 0) return message.send(`У вас нет вертолета!`);
		let hel = hels.find(x=> x.id === user.hel);
 		let sum = hel.count / 100 * 80
		await user.inc("balance", Math.floor(sum));
		log[user.number].push(`Продал вертолёт (${hel.name}) за ${spaces(sum)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}`);
		await user.set("hel", 0);
 		return message.send(`🚁 ➾ Вы продали свой вертолет за ${spaces(sum)}$!`);
 	}
	if(/машин/i.test(message.$match[1].toLowerCase())){
 		if(user.cars == 0) return message.send(`У вас нет машины!`);
		let car = cars.find(x=> x.id === user.car);
 		let sum = car.count / 100 * 80
		await user.inc("balance", Math.floor(sum));
		log[user.number].push(`Продал машину (${car.name}) за ${spaces(sum)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		await user.set("car", 0);
 		return message.send(`🚗 ➾ Вы продали свою машину за ${spaces(sum)}$!`);
 	}
	if(/бизнес/i.test(message.$match[1].toLowerCase())){
 		let biz = bizs.find(x=> x.id === user.biz.id);
		if(user.biz.id == 0) return message.send(`🏢 ➾ У вас нет бизнеса.`)
		let sum = biz.count / 100 * 80
		let name = biz.name
		await user.inc("balance", Math.floor(sum));
		log[user.number].push(`Продал бизнес (${name}) за ${spaces(sum)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		user.biz.id = 0;
		user.biz.peop = 0;
		await user.save()
		return message.send(`🏢 ➾ Вы продали свой бизнес "${name}" за ${spaces(sum)}$`);
 	}
	if(/kryptonite|криптонит|к/i.test(message.$match[1].toLowerCase())){
		if(user.mine.krypt > 0){
			let kryptonite = user.mine.krypt;
			let count = user.mine.krypt * config.kryp;
			await user.inc("balance", Math.floor(count));
			user.mine.krypt = 0;
			log[user.number].push(`Продал ${spaces(kryptonite)} криптонита за ${spaces(count)}$. Время: ${time()}|${data()}`);
			message.reply(`🌟 ➾ Вы продали ${spaces(kryptonite)} криптонита за ${spaces(count)}$!`);
		} else {
			message.reply(`🌟 ➾ Вы еще не добыли криптонит!`);
		};
		return user.save()
 	}
	if(/vibranium|вибраниум|в/i.test(message.$match[1].toLowerCase())){
		if(user.mine.vibr > 0){
			let vibranium = user.mine.vibr;
			let count = user.mine.vibr * config.vibr;
			await user.inc("balance", Math.floor(count));
			user.mine.vibr = 0;
			log[user.number].push(`Продал ${spaces(vibranium)} вибраниума за ${spaces(count)}$. Время: ${time()}|${data()}`);
			message.reply(`🌟 ➾ Вы продали ${spaces(vibranium)} вибраниума за ${spaces(count)}$!`);
		} else {
			message.reply(`🌟 ➾ Вы еще не добыли вибраниум!`);
		};
		return user.save()
 	}
	if(/adamantium|адаманитиум|адаманит|а/i.test(message.$match[1].toLowerCase())){
		if(user.mine.adam > 0){
			let adamantium = user.mine.adam;
			let count = user.mine.adam * config.adam;
			await user.inc("balance", Math.floor(count));
			user.mine.adam = 0;
			log[user.number].push(`Продал ${spaces(adamantium)} адаманитиума за ${spaces(count)}$. Время: ${time()}|${data()}`);
			message.reply(`🌟 ➾ Вы продали ${spaces(adamantium)} адаманитиума за ${spaces(count)}$!`);
		} else {
			message.reply(`🌟 ➾ Вы еще не добыли адаманитиум!`);
		};
		return user.save()
 	}
});

///Питомцы///
vk.updates.hear(/^(?:питомцы)\s?([1-9]+)?/i, async message => {
	msg();
	let user = await userq;
 	let i = Number(message.$match[1]);
	let pet = pets.find(x=> x.id === i);
	let count = 1000000;
	let pech1 = 200;
	let pech2 = 750;
	let pech3 = 3000;
	if(user.home < 10) return message.send(`🐼 ➾ Вы можете преобрести питомца с 10 уровня дома!`)
 	if(!i){
 		message.send(`
🐼 Питомцы 🐼
${pets.find(x=> x.id === 1).smile}1. ${pets.find(x=> x.id === 1).title}.
${pets.find(x=> x.id === 2).smile}2. ${pets.find(x=> x.id === 2).title}.
${pets.find(x=> x.id === 3).smile}3. ${pets.find(x=> x.id === 3).title}.
${pets.find(x=> x.id === 4).smile}4. ${pets.find(x=> x.id === 4).title}.
${pets.find(x=> x.id === 5).smile}5. ${pets.find(x=> x.id === 5).title}.
${pets.find(x=> x.id === 6).smile}6. ${pets.find(x=> x.id === 6).title}.
${pets.find(x=> x.id === 7).smile}7. ${pets.find(x=> x.id === 7).title}.
${pets.find(x=> x.id === 8).smile}8. ${pets.find(x=> x.id === 8).title}.
${pets.find(x=> x.id === 9).smile}9. ${pets.find(x=> x.id === 9).title}.
${pets.find(x=> x.id === 10).smile}10. ${pets.find(x=> x.id === 10).title}.
💵 ➾ Цена питомца: ${spaces(count)}$

${pets.find(x=> x.id === 20).smile}11. ${pets.find(x=> x.id === 20).title} (${spaces(pech1)} Печенек🍪).
${pets.find(x=> x.id === 21).smile}12. ${pets.find(x=> x.id === 21).title} (${spaces(pech2)} Печенек🍪).
${pets.find(x=> x.id === 25).smile}13. ${pets.find(x=> x.id === 25).title} (${spaces(pech3)} Печенек🍪).

Для покупки введите "Питомцы [номер]"
Для продажи введите "Отпустить питомца"
Так же вы можете пойти со своим питомцем на "прогулку"!
 		`);
 	}
 	if(i < 0 || i > 13) return;
 	if(user.pet != 0) return message.send(`🐼 ➾ У вас уже куплен питомец ${pets.find(x=> x.id === user.pet).name}!`);
 	//if(user.inv.pet.length > 5) return message.send(``);
 	if(i > 0 && i < 11){
 		if(user.balance < count) return message.send(`🐼 ➾ У вас не достаточно денег!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
 		await user.dec("balance", count);
 		await user.set("pet", pet.id);
		log[user.number].push(`Купил питомца (${pet.title}) за ${spaces(count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
 		message.send(`${pet.smile} ➾ Вы купили питомца (${pet.title}) за ${spaces(count)}$!`);
 	} else if(i > 10 && i < 14){
 		if(i == 11){
			let pet = pets.find(x=> x.id === 20);
			if(user.ev < pech1) return message.send(`🐼 ➾ У вас не хватает Печенек!`);
	 		await user.dec("ev", pech1);
			log[user.number].push(`Купил питомца (${pet.title}) за ${spaces(count)} Печенек Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
 			message.send(`${pet.smile} ➾ Вы купили питомца ${pet.title} за ${spaces(pech1)} Печенек!`);
	 	} else if(i == 12){
			let pet = pets.find(x=> x.id === 21);
			if(user.ev < pech2) return message.send(`🐼 ➾ У вас не хватает Печенек!`);
	 		await user.dec("ev", pech2);
			log[user.number].push(`Купил питомца (${pet.title}) за ${spaces(count)} Печенек Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
 			message.send(`${pet.smile} ➾ Вы купили питомца ${pet.title} за ${spaces(pech2)} Печенек!`);
	 	} else if(i == 13){
			let pet = pets.find(x=> x.id === 25);
			if(user.ev < pech3) return message.send(`🐼 ➾ У вас не хватает Печенек!`);
	 		await user.dec("ev", pech3);
			log[user.number].push(`Купил питомца (${pet.title}) за ${spaces(count)} Печенек Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
 			message.send(`${pet.smile} ➾ Вы купили питомца ${pet.title} за ${spaces(pech3)} Печенек!`);
	 	}
 		await user.set("pet", pet.id);
 	}
 	return user.save()
});

///Отпустить питомца///
vk.updates.hear(/^(?:отпустить питомца|отпустить|продать питомца)/i, async message => {
	msg();
	let user = await userq;
	let pet = pets.find(x=> x.id === user.pet);
 	if(user.pet == 0) return message.send(`У вас нет питомца!`);
	log[user.number].push(`Отпустил питомца (${pet.title}) Время: ${time()}|${data()}`);
 	message.send(`${pet.smile} ➾ Вы успешно отпустили своего питомца!`);
	await user.set("pet", 0);
 	return user.save()
});

///Бонус///
vk.updates.hear(/(?:бонус|подарок)/i, async (message) => {
	msg();
	let user = await userq;
	if(user.block.bonus > getUnix()){
		message.send(`🎁 >> Вы сможете получить бонус через ${unixStampLeft(user.block.bonus - Date.now())}`);
		return message.sendSticker(10849);
	}
	let stiker = [4494,33].random()
	let count = rand(1,5)
	user.block.bonus = getUnix() + 86400000
	setTimeout(() => {
		log[user.number].push(`Снят откат по бонусу. Время: ${time()}|${data()}`);
	}, 86400000);
    if(count == 1){
		let count = [1,2,1,1,1,1,1,2,3,1,1,1,1,1].random();
		await user.inc("don", Math.floor(count));
		log[user.number].push(`Получил бонус: риклы ${count} шт. Время: ${time()}|${data()} Риклов: ${user.don}`);
		await message.send(`${userp}, вы получили бонус: ${count} ${rikl(count)}! ${smilesuc}`);
	};
	if(count == 2){
		let count = [2,4,3,5].random();
		await user.inc("gl", Math.floor(count));
		log[user.number].push(`Получил бонус: рейтинг ${count} шт. Время: ${time()}|${data()} Рейтинг: ${spaces(user.gl)}`);
		await message.send(`${userp}, вы получили бонус: ${spaces(count)} рейтинга👑! ${smilesuc}`);
	};
	if(count == 3 || count == 4 || count == 5){
		let count = [30000000,50000000,10000000,40000000,70000000,20000000,45000000].random();
		await user.inc("balance", Math.floor(count));
		log[user.number].push(`Получил бонус: деньги ${spaces(count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		await message.send(`${userp}, вы получили бонус: ${spaces(count)}$! ${smilesuc}`);
	};
	await message.sendSticker(stiker);
	return user.save()
});

///Курс///
vk.updates.hear(/^(?:курс)/i, async (message) => {
	msg();
	let user = await userq;
	message.send(`
🤖 Курс покупки роботов: ${config.rob}$ 🤖
🤖 Курс продажи роботов: ${config.robp}$ 🤖
	`);
	return user.save();
});

///Таблетки///
vk.updates.hear(/^(?:таблетки)/i, async (message) => {
	msg();
	let user = await userq;
	message.send(`
💊У вас ${spaces(user.tabl)} ${tabl(user.tabl, 1)}
💊Таблетка - принять таблетку
💊Купить таблетки [количество] - прикупить таблетки
	`);
	return user.save();
});

///Таблетка///
vk.updates.hear(/^(?:таблетка|табл)/i, async (message) => {
	msg();
	let user = await userq;
	if(user.tabl < 1) return message.send(`💊У вас нет таблетки!`);
	if(user.heal > 989) return message.send(`💊У вас слишком много здоровья!`)
	await user.dec("tabl", 1);
    await user.inc("heal", Math.floor(20));
	log[user.number].push(`Принял таблетку. Здоровье: ${spaces(user.heal)} Таблеток: ${spaces(user.tabl)} Время: ${time()}|${data()}`);
	message.send(`💊Вы успешно приняли таблетку!\n❤Здоровье: ${spaces(user.heal)}`)
	return user.save()
});

///Купить таблетки///
vk.updates.hear(/^(?:купить таблетку|купить таблетки|купить табл)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let count = 500000;
	if(!message.$match[1] || !Number(message.$match[1])) return message.send(`💊 ➾ Укажите количество таблеток.`);
	if(user.balance < message.$match[1] * count) return message.send(`💊 ➾ 1 таблетка стоит ${spaces(count)}$\n💊 ➾ Для покупки ${message.$match[1]}💊 нужно ${spaces(message.$match[1] * count)}$`);
	await user.dec("balance", message.$match[1] * count);
	await user.inc("tabl", Math.floor(message.$match[1]));
	log[user.number].push(`Купил ${spaces(message.$match[1])} таблеток за ${spaces(message.$match[1] * count)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	message.send(`💊 ➾ Вы успешно купили ${spaces(message.$match[1])} ${tabl(message.$match[1], 2)}!`);
	return user.save()
});

///Прогулка///
vk.updates.hear(/(?:прогулка)/i, async (message) => {
	msg();
	let user = await userq;
	let pet = pets.find(x=> x.id === user.pet);
	if(user.pet == 0) return message.send(`🐾 Для прогулка вам нужен питомец!`);
	let rez = rand(1,23);
	let count = [77000,77000,46000,46000,777,150000,16000,25000,9500,100000,85000,90000,80000,150000,120000,100000,40000,75000,37000,210000,240000,57000]
	if(rez == 23){
		log[user.number].push(`Потерял питомца (${pet.title}) в прогулке. Исход: ${rez} Время: ${time()}|${data()}`);
		await user.set("pet", 0);
		message.send(`😢Увы, но во время прогулки вы потеряли своего питомца!😢`);
	} else {
		await user.inc("balance", Math.floor(count[rez]));
		log[user.number].push(`Получил с прогулки ${spaces(count[rez])}$. Питомец: ${pet.title} Исход: ${rez} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🐾 Вы отправились со своим питомцем (${pet.name}) на прогулку и нашли ${spaces(count[rez])}$!`)
	}
	return user.save()
});

///Сейф///
vk.updates.hear(/(?:сейф)\s([10-99]+)$/i, async (message) => {
	msg();
	let user = await userq;
	let count = rand(10,99);
	let smile = ['😎', '🙂', '🙃', '😌', '☺', '😳', '😉', '😝', '🙄', '😁' , '🤩','🤔'].random()
    if(message.$match[1] < 10 || message.$match[1] >= 100) return message.send(`${userp}, пример команды: Сейф [10-99]`);
	if(count == message.$match[1]){
	    let bon = [2000000000,2500000000,3000000000,3500000000,4000000000].random()
		let bonus = 0;
		if(event == 1){
			bonus = Math.floor(bon * (1 + (proc / 100)));
		} else {
			bonus = Math.floor(bon);
		}	
		user.balance += bonus;
		log[user.number].push(`Выйграл в сейфе: ${spaces(bonus)}$. Исход: ${count} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		if(user.quest.lvl == 2){
			await user.inc("balance", Math.floor(1000000000));
			await user.inc("don", Math.floor(2));
			user.quest.lvl = 3;
			user.quest.per = 0;
			user.inv.case.one += 1;
			message.send(`
🎉Поздравляем!
👒Вы выполнили квест 2 уровня!
🎮Ваша награда:
1.000.000.000$
2 рикла
${cases.find(x=> x.id === 1).name}
🎮Следующая цель:
Выйграть в кубик 3 раза подряд
			`);
			log[user.number].push(`Выполнил квест 2 уровня! Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		}
		message.send(`
Это просто невероятно! Вы угадали число!
🔑 Вы нашли в сейфе: ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`!
		`);
	} else {
		log[user.number].push(`Проиграл в сейфе. Исход: ${count} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`
${userp}, вы не угадали код к сейфу, код был «${count}».
Не расстраивайтесь, попытки не ограничены, но если вы угадаете, получите до 4.000.000.000$!!!${smile}
		`);
	}
	return user.save()
});

///Рассылка///
vk.updates.hear(/^(?:рассылка)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	if(message.user != owner) return message.send(`Вы не Создатель!`);
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length ; i+=1){
		try{
			vk.api.call('messages.send', {
				peer_id: users[i].id,
				random_id: 0,
				message: `${message.$match[1]}`,
				attachment: (attachm == ``) ? `` : attachm
			});
		} catch(e){}
	}
	for(i=1;i<1000;i++){
	    if(chat[i]){
			try{
				vk.api.call('messages.send', {
					peer_id: chat[i].id + 2000000000,
					random_id: 0,
					message: `${message.$match[1]}`,
					attachment: (attachm == ``) ? `` : attachm
				});
			} catch(e){}
		}
	}
	attachm = ``;
	config.stat.alerts += 1;
	return message.send(`Сообщения отправлены!`);
});

///Рассылка///
vk.updates.hear(/^(?:адмрассылка)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	if(message.user != owner) return message.send(`Вы не Создатель!`);
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length ; i+=1){
		if(users[i].level > 2){
			try{
				vk.api.call('messages.send', {
					peer_id: users[i].id,
					random_id: 0,
					message: `${message.$match[1]}`
				});
			} catch(e){}
		}
	}
	return message.send(`Сообщения отправлены!`);
});

///Пострассылка///
vk.updates.hear(/^(?:пострассылка)\s?([^]+)?/i, async message => {
	msg();
	let user = await userq;
	if(message.user != owner || message.user != 283752053) return;
	let users = await User.find({ ban: false });
	for(let i=0; i<users.length ; i+=1){
		try{
			vk.api.call('messages.send', {
				peer_id: users[i].id,
				random_id: 0,
				message: ``,
				attachment: `${message.$match[1]}`
			});
		} catch(e){}
	}
	for(i=1;i<1000;i++){
	    if(chat[i]){
			try{
				vk.api.call('messages.send', {
					peer_id: chat[i].id + 2000000000,
					random_id: 0,
					message: ``,
					attachment: `${message.$match[1]}`
				});
			} catch(e){}
		}
	}
	config.stat.alerts += 1;
	return message.send(`Посты отправлены!`);
});

///!Название///
vk.updates.hear(/^(?:!название)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let _users = await vk.api.messages.getConversationMembers({peer_id: message.peerId});
	let _user = _users.items.find((item) => item.member_id === message.senderId);
	if(!message.isChat) return message.send(`⚠️Эта команда работает только в беседах!`);
	if(!message.$match[1]) return message.send(`Вы забыли указать название беседы!`);
	if(!_user.is_admin || message.user != owner){
		return message.send(`Вы не администратор беседы!`);
	}
	vk.api.call('messages.editChat', {
		chat_id: message.chatId,
		title: message.$match[1]
	});
	return message.send(`${userp}, вы успешно изменили название беседы на ${message.$match[1]}!😄`);
});

///Репорт///
vk.updates.hear(/^(?:репорт|report|rep)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	if(!message.$match[1]) return message.send(`Вы не написали жалобу "репорт [текст]"!`);
	if(config.rep_b.indexOf(message.user) !== -1) return message.send(`Вам запрещено писать в репорт!`)
	let ch = config.rep.random()
	let userz = await User.findOne({ number: ch });
	console.log(message)
	/*if(message.hasAttachments()){
		let ph = `photo-${message.attachments[0].ownerId}_${message.attachments[0].id}`;
		console.log(ph)
		if(userz){ 
			vk.api.call("messages.send", {
				peer_id: userz.id,
				random_id: 0,
				attachment: ph,
				message: `
👾REPORT👾 
🎛Ник: ${user.prefix}
🆔Игровой 🆔: ${user.number}${message.isChat ? " в беседе №"+message.chatId : ""}
🧿Жалоба: ${message.$match[1]}
⌛Время отправки репорта: ${time()} ${data()}
🀄Для ответа: ответ [ID] [ответ на вопрос]
			`});
		}
		vk.api.call("messages.send", {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			attachment: ph,
			message: `
👾REPORT👾
🎛Ник: ${user.prefix}
🆔Игровой 🆔: ${user.number}${message.isChat ? " в беседе №"+message.chatId : ""}
🧿Жалоба: ${message.$match[1]}
⌛Время отправки репорта: ${time()} ${data()}
🀄Для ответа: ответ [ID] [ответ на вопрос]
		`});
		vk.api.call("messages.send", {
			peer_id: owner,
			random_id: 0,
			attachment: ph,
			message: `
👾REPORT👾 (owner)
🎛Ник: ${user.prefix}
🆔Игровой 🆔: ${user.number}${message.isChat ? " в беседе №"+message.chatId : ""}
🧿Жалоба: ${message.$match[1]}
⌛Время отправки репорта: ${time()} ${data()}
🀄Для ответа: ответ [ID] [ответ на вопрос]
		`});
	} else {*/
		if(userz){ 
			vk.api.call("messages.send", {
				peer_id: userz.id,
				random_id: 0,
				message: `
👾REPORT👾 
🎛Ник: ${user.prefix}
🆔Игровой 🆔: ${user.number}${message.isChat ? " в беседе №"+message.chatId : ""}
🧿Жалоба: ${message.$match[1]}
⌛Время отправки репорта: ${time()} ${data()}
🀄Для ответа: ответ [ID] [ответ на вопрос]
			`});
		}
		vk.api.call("messages.send", {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `
👾REPORT👾
🎛Ник: ${user.prefix}
🆔Игровой 🆔: ${user.number}${message.isChat ? " в беседе №"+message.chatId : ""}
🧿Жалоба: ${message.$match[1]}
⌛Время отправки репорта: ${time()} ${data()}
🀄Для ответа: ответ [ID] [ответ на вопрос]
		`});
		vk.api.call("messages.send", {
			peer_id: owner,
			random_id: 0,
			message: `
👾REPORT👾 (owner)
🎛Ник: ${user.prefix}
🆔Игровой 🆔: ${user.number}${message.isChat ? " в беседе №"+message.chatId : ""}
🧿Жалоба: ${message.$match[1]}
⌛Время отправки репорта: ${time()} ${data()}
🀄Для ответа: ответ [ID] [ответ на вопрос]
		`});
	//}
	log[user.number].push(`Отправил репорт администратору ${ch}. Текст: "${message.$match[1]}" Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	if(userz){ 
		log[userz.number].push(`Поличил репорт от игрока ${user.number}. Текст: "${message.$match[1]}" Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	}
	config.stat.rep += 1;
    return message.send(`🗿 ➾ Вы успешно отправили жалобу!`);
});

///Ответ///
vk.updates.hear(/^(?:ответ)\s([0-9]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(!Number(message.$match[1]) || !message.$match[1] || !message.$match[2] || !userz) return message.send(`🔸 ➾ Проверьте вводимые данные.`);
	if(config.rep.find(x=> x === user.number) || message.user == owner){
		vk.api.call("messages.send", {
			peer_id: userz.id,
			random_id: 0,
			message: `${adm.name} ${userp} ответил Вам:\n ${message.$match[2]}`
		});
		vk.api.call("messages.send", {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `
${adm.name} ${userp} ответил игроку ${userz.prefix} [ID: ${message.$match[1]}]:\n ${message.$match[2]}
⌛Время отправки ответа: ${time()} ${data()}
			`
		});
	log[user.number].push(`Ответил на репорт игроку ${message.$match[1]}. Ответ: "${message.$match[2]}" Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Поличил ответ на репорт от игрока ${user.number}. Текст: "${message.$match[1]}" Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	config.stat.otv += 1;
	await user.save()
	await userz.save()
	return message.send(`Ответ отправлен!`)
}});

///Кубик///
vk.updates.hear(/(?:кубик|куб)\s([1-6])$/i, async (message) => {
	msg();
	let user = await userq;
	if(!message.$match[1]) return message.send(`Пример команды: Кубик [1-6]`);
    if(message.$match[1] < 1 || message.$match[1] > 6) return message.send(`${userp}, пример команды: Кубик [1-6]`);
	let count = rand(1,6);
	let bon = 5000000;
	let bonus = 0;
	if(event == 1){
		bonus = Math.floor(bon * (1 + (proc / 100)));
	} else {
		bonus = Math.floor(bon);
	}	
	if(count == message.$match[1]){
		await user.inc("balance", Math.floor(bonus));
		log[user.number].push(`Выйграл в кубике ${spaces(bonus)}$. Сторона кубика: ${count} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		if(user.quest.lvl == 1){
			user.quest.per += 1
			if(user.quest.per == 3){
				await user.inc("balance", Math.floor(500000000));
				await user.inc("don", Math.floor(2));
				user.quest.lvl = 2;
				user.quest.per = 0;
				user.inv.case.one += 1;
				log[user.number].push(`Выполнил квест 1 уровня! Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
				message.send(`
🎉Поздравляем!
👒Вы выполнили квест 1 уровня!
🎮Ваша награда:
500.000.000$
2 рикла
${cases.find(x=> x.id === 1).name}
🎮Следующая цель:
Отгадать сейф
				`)
				await user.save()
				return message.send(`🎲${userp}, вы угадали и получили приз ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`🤑`);
			} else {
				await user.save()
				return message.send(`🎲${userp}, вы угадали и получили приз ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`🤑\nВаш прогресс квеста: ${user.quest.per} из 3`);
			}
		};
		if(user.quest.lvl == 3){
			user.quest.per += 1
			if(user.quest.per == 3){
				await user.inc("balance", Math.floor(500000000));
				await user.inc("don", Math.floor(2));
				user.quest.lvl = 4;
				user.quest.per = 0;
				user.inv.case.two += 1;
				log[user.number].push(`Выйполнил квест 3 уровня! Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
				message.send(`
🎉Поздравляем!
👒Вы выполнили квест 3 уровня!
🎮Ваша награда:
5.000.000.000$
2 рикла
${cases.find(x=> x.id === 2).name}
🎮Следующая цель:
Выиграть в стаканчике 3 раз подряд
				`)
				await user.save()
				return message.send(`🎲${userp}, вы угадали и получили приз ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`🤑`);
			} else {
				await user.save()
				return message.send(`🎲${userp}, вы угадали и получили приз ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`🤑\nВаш прогресс квеста: ${user.quest.per} из 3`);
			}
		};
		await user.save()
		return message.send(`🎲${userp}, вы угадали и получили приз ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`🤑`);
	} else {
		log[user.number].push(`Проиграл в кубике. Сторона кубика: ${count} Время: ${time()}|${data()}`);
		if(user.quest.lvl == 3){
			if(user.quest.per > 0){
				message.send(`Ваш прогресс квеста был аннулирован!`)
			}
			user.quest.per = 0
		}
		await user.save()
		return message.send(`${userp}, вы не угадали!😟\n🎲 Выпало число ${count}🎲`);
	}
});

///Казино///
vk.updates.hear(/^(?:казино|каз|аз|азино)\s(.*)/i, async (message) => {
	msg();
	let user = await userq;
	message.$match[1] = message.$match[1].replace(/(\.|\,)/ig, '');
	message.$match[1] = message.$match[1].replace(/(к|k)/ig, '000');
	message.$match[1] = message.$match[1].replace(/(кк|kk)/ig, '000000');
	message.$match[1] = message.$match[1].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.balance);

	if(!Number(message.$match[1])) return message.send(`Количество должно быть числом!`);
	message.$match[1] = Math.floor(Number(message.$match[1]));

	if(message.$match[1] <= 0) return;

	if(message.$match[1] > user.balance) return message.send(`У вас нет данной суммы!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	if(message.$match[1] <= user.balance){
        let count = [0,0,0,0,0,0,0,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.75,0.75,0.75,0.75,0.75,1,1,1,1,1,2,2,2,2,5,5,5,10].random();
        let bonus = 0;
        if(event == 1){
        	if(count >= 1){
        		bonus = Math.floor(message.$match[1] * count * (1 + (proc / 100)));
        	} else {
				bonus = Math.floor(message.$match[1] * count);
			}
		} else {
			bonus = Math.floor(message.$match[1] * count);
		}
		user.balance -= message.$match[1];
		user.balance += bonus;
		log[user.number].push(`Сыграл в казино. Ставка: ${spaces(message.$match[1])}$ Коэфицент: ${count} Итог: ${spaces(Math.floor(bonus))} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		let text = `
${count === 1 ? `Ваши деньги остаются при вас` : `${count === 0 ? `Вы проиграли ${spaces(Math.floor(message.$match[1]))}$` : `${count < 1 ? `Вы проиграли ${spaces(Math.floor(message.$match[1] - bonus))}$` : `Вы выиграли ${spaces(Math.floor(bonus))}$`}`}`} (x${count}`+(event != 1 ? `` : ``+(count < 1.01 ? `` : `, +${proc}%`)+``)+`)
💰 Баланс: ${spaces(user.balance)}$
		`
		if(count == 10){
			if(message.$match[1] >= 1000000000){
				if(user.quest.lvl == 5){
					user.quest.per += 1
					if(user.quest.per == 2){
						await user.inc("balance", Math.floor(10000000000));
						await user.inc("don", Math.floor(5));
						user.quest.lvl = 6;
						user.quest.per = 0;
						user.inv.case.three += 1;
						log[user.number].push(`Выполнил квест 5 уровня! Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`)
						message.send(`
🎉Поздравляем!
👒Вы выполнили квест 5 уровня!
🎮Ваша награда:
10.000.000.000$
5 риклов
${cases.find(x=> x.id === 3).name}
🎮Это был последний квест!
						`)
						await user.save()	
						return message.send(`${text}`);
					} else {
						await user.save()
						return message.send(`${text}\nВаш прогресс квеста: ${user.quest.per} из 2`);
		}} else {
			await user.save()
			return message.send(`${text}`);
		}} else {
			await user.save()
			return message.send(`${text}`);
		}} else {
			await user.save()
			return message.send(`${text}`);
		};
		await user.save()
		return message.send(`${text}`);
	}
});

///Бан///Ban///
vk.updates.hear(/^(?:ban|бан)\s?([0-9]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(!message.$match[1] || !userz || !message.$match[2]) return message.send(`🔸 ➾ Пример команды: ban [ID] [ПРИЧИНА]`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(user.level < 6) return message.send(`🔸 ➾ Вы не Администратор!`);
	if(userz.level > 3) return message.send(`Ошибка!`);
	await userz.set("ban", true);
	await userz.set("ban_i", message.$match[2]);
	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `✅ ➾ ${userp} [${adm.name}] заблокировал Вас навсегда.\n✅ ➾ Причина: ${message.$match[2]}`
	});

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] заблокировал игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}]\nПричина: ${message.$match[2]}`
		});
	}

	log[user.number].push(`Заблокировал игрока ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Был заблокирован игроком ${user.number}. Время: ${time()}|${data()}`);
	message.send(`✅ ➾ Вы заблокировали игрока ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} навсегда.\nПричина: ${message.$match[2]}`);
	await userz.save()
	return user.save()
});

///Разбан///Unban///
vk.updates.hear(/^(?:unban|разбан)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: unban ID`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(user.level < 6) return message.send(`🔸 ➾ Вы не Администратор!`);
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	await userz.set("ban", false);
	await userz.set("ban_i", "");
	let adm = adms.find(x=> x.lvl === user.level);
	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `✅ ➾ ${userp} [${adm.name}] разблокировал Вас.`
	});

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] разблокировал игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}]`
		});
	}

	log[user.number].push(`Разблокировал игрока ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Был разблокирован игроком ${user.number}. Время: ${time()}|${data()}`);
	message.send(`✅ ➾ Вы разблокировали игрока ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`);
	await user.save()
	return userz.save()
});


///Игры///
vk.updates.hear(/(?:игры)/i, async (message) => {
	msg();
	let user = await userq;
 	return message.send(`🎮 Игры 🎮
🎰 Казино [ставка] - Казино.
💸 Трейд [вверх/вниз] [ставка] - Трейд.
🔫 Тир - Тир.
🎲 Кубик [1-6] - Играть в кубик.
💸 Монетка [решка/орёл] [ставка] - Монетка.
🗑 Стаканчик [1-4] [ставка] - Играть в стаканчик.
💰 Сейф [10-99] - Взлом сейфа.
🔫 Крутить - Открыть оружейный кейс за 10кк.
🎈 Лотерея - Участвовать в лотереи. (Раз в 4 часа!)

🌚 ➾ Хочешь сыграть на весь свой баланс?) Это просто! Напиши команду "вабанк"!
    `);
});

///Рейтинг///
vk.updates.hear(/^(?:рейтинг)$/i, async (message) => {
	msg();
	let user = await userq;
 	message.send(`
👑 ➾ У вас ${spaces(user.gl)} рейтинга!
👑 ➾ Купить рейтинг [количество] - покупка 👑
👑 ➾ Продать рейтинг [количество] - продажа 👑
👑 ➾ Топ рейтинг - топ по рейтингу 👑
 	`);
 	return user.save()
});

///Купить рейтинг///
vk.updates.hear(/^(?:купить рейтинг|рейтинг)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let count = 300000000
	if(!message.$match[1] || !Number(message.$match[1])) return message.send(`👑 ➾ Укажите количество рейтинга.`);
	if(user.balance < message.$match[1] * count) return message.send(`👑 ➾ 1 рейтинг стоит 300.000.000$\n👑 ➾ Для покупки ${spaces(message.$match[1])} рейтинга нужно ${spaces(message.$match[1] * count)}$`)
	if(user.level > 7) return message.send(`👑 ➾ Администрации запрещено покупать рейтинг!`)
	await user.dec("balance", message.$match[1] * count);
	await user.inc("gl", Math.floor(message.$match[1]));
	log[user.number].push(`Купил ${spaces(message.$match[1])} рейтинга за ${spaces(message.$match[1] * count)} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Рейтинг: ${user.gl}`);
	message.send(`👑 ➾ Вы успешно купили ${spaces(message.$match[1])} рейтинга!`);
	return user.save()
});

///Вип///
vk.updates.hear(/^(?:вип)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save()
	if(user.level < 1 || user.level > 3){
		return message.send(`
👑 ➾ VIP Команды « 👑
✅ ➾ SMS [ID] [текст] - отправить личное сообщение
✅ ➾ Kiss [ID] - поцеловать игрока
✅ ➾ Get [ID] - посмотреть профиль другого игрока

☑ ➾ - - Бонусы - - « ☑
💴 ➾Лимит на передачу: 50.000.000.000$
🌚 ➾ Кит - кит вип игрока
⚕ ➾ Длинный ник (25 символов)
🔋 ➾ 25 энергии
⛔⛔ Цена: 50 риклов ⛔⛔

👑 ➾ VIP+ Команды « 👑
✅ ➾ SMS [ID] [текст] - отправить личное сообщение
✅ ➾ Kiss [ID] - поцеловать игрока
✅ ➾ Get [ID] - посмотреть профиль другого игрока
✅ ➾ Уникальный бизнес "Галастанция"!

☑ ➾ - - Бонусы - - « ☑
💴 ➾Лимит на передачу: 100.000.000.000$
🌚 ➾ Кит - кит вип/вип+ игрока
⚕ ➾ Длинный ник (25 символов)
🔋 ➾ 25 энергии
⛔⛔ Цена: 100 риклов ⛔⛔

Так же дополнительную информацию вы можете получить с помощью команды: "Донат"
		`);
	}
	if(user.level == 1){
		return message.send(`
👑 ➾ VIP Команды « 👑
✅ ➾ SMS [ID] [текст] - отправить личное сообщение
✅ ➾ Kiss [ID] - поцеловать игрока

☑ ➾ - - Бонусы - - « ☑
💴 ➾Лимит на передачу: 50.000.000.000$
🌚 ➾ Кит - кит вип игрока
⚕ ➾ Длинный ник (25 символов)
🔋 ➾ 25 энергии
		`);
	}
	if(user.level == 2 || user.level == 3){
		return message.send(`
👑 ➾ VIP+ Команды « 👑
✅ ➾ SMS [ID] [текст] - отправить личное сообщение
✅ ➾ Kiss [ID] - поцеловать игрока
✅ ➾ Уникальный бизнес "Галастанция" c самым большим доходом!

☑ ➾ - - Бонусы - - « ☑
💴 ➾Лимит на передачу: 100.000.000.000$
🌚 ➾ Кит - кит вип/вип+ игрока
⚕ ➾ Длинный ник (25 символов)
🔋 ➾ 25 энергии
		`);
	}
});

///Риклы///
vk.updates.hear(/^(?:риклы)/i, async message => {
	msg();
	let user = await userq;
	await user.save()
	return message.send(`
💎У вас ${user.don} риклов💎
💎 >>1 рикл = 1 рублю<< 💎
╟ ☺ VIP - 50 риклов
╟ ☺ VIP+ - 100 риклов
╟ 💰 500.000.000$ - 1 рикл

Для обмена риклов на деньги напиши команду:
"Продать риклы [количество]"
Для покупки VIP напишите команду:
"Купить Vip"
Для покупки VIP+ напишите команду:
"Vip+"`,{ keyboard: JSON.stringify(donat) });
});

///Донат///
vk.updates.hear(/^(?:донат)/i, async message => {
	msg();
	let user = await userq;
	await user.save()
	return message.send(`💎Список доната:`,{ template: JSON.stringify(donate) });
});

///GiveVipPlus///
vk.updates.hear(/^(?:givevipplus)?\s([0-9]+)?\s([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !userz || message.$match[2] > 365 || message.$match[2] < 1) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ givevipplus [ID] [TIME(1-365)](суток)`);
	log[user.number].push(`Выдал VIP+-Статус игроку ${message.$match[1]}. Срок: ${message.$match[2]} суток Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил VIP+-Статус от игрока ${user.number}. Срок: ${message.$match[2]} суток Время: ${time()}|${data()}`);
	await userz.set("adm", message.$match[2] * 24);
	await userz.set("level", 2);
	await userz.set("vip", true);
	message.send(`💰 ➾ Вы выдали VIP+-Статус игроку @id${userz.id}(${userz.prefix}) на ${message.$match[2]} суток.`);
	await user.save()
	return userz.save()
});

///GiveVip///
vk.updates.hear(/^(?:givevip)?\s([0-9]+)?\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !userz || message.$match[2] > 365 || message.$match[2] < 1) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ givevip [ID] [TIME(1-365)](суток)`);
	log[user.number].push(`Выдал VIP-Статус игроку ${message.$match[1]}. Срок: ${message.$match[2]} суток Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил VIP-Статус от игрока ${user.number}. Срок: ${message.$match[2]} суток Время: ${time()}|${data()}`);
	await userz.set("adm", message.$match[2] * 24);
	await userz.set("level", 1);
	await userz.set("vip", true);
	message.send(`💰 ➾ Вы выдали VIP-Статус игроку @id${userz.id}(${userz.prefix}) на ${message.$match[2]} суток.`);
	await user.save()
	return userz.save()
});

///Купить вип///Купить vip///
vk.updates.hear(/купить vip/i, async (message) => {
	msg();
	let user = await userq;
	if(user.don < 50) return message.send(`💎 У вас не хватает риклов!`);
	await user.dec("don", 50);
	await user.set("level", 1);
	await user.set("vip", true);
	log[user.number].push(`Купил VIP статус. Время: ${time()}|${data()} Риклов: ${spaces(user.don)}`);
	message.send(`🌟 Вы купили VIP статус!\nПомощь по VIP вы можете получить командой: "Вип"`);
	return user.save()
});

///vip+///
vk.updates.hear(/(vip+)/i, async (message) => {
	msg();
	let user = await userq;
	if(user.don < 100) return message.send(`💎 У вас не хватает риклов!`);
	await user.dec("don", 100);
	await user.set("level", 2);
	await user.set("vip", true);
	user.biz.id = 11;
	log[user.number].push(`Купил VIP+ статус. Время: ${time()}|${data()} Риклов: ${spaces(user.don)}`);
	message.send(`🌟 Вы купили VIP+ статус и получили эксклюзивный бизнес "Галастанция"!\nПомощь по VIP+ вы можете получить командой: "Вип"`);
	return user.save()
});

///SMS///
vk.updates.hear(/^(?:sms|сообщение|смс)\s?([0-9]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(user.level < 1) return message.send(`Вы не VIP игрок!`);
	if(!Number(message.$match[1]) || !message.$match[1] || !message.$match[2] || !userz) return message.send(`🔸 ➾ Проверьте вводимые данные.`);
	if(userz.ban == true) return message.send(`🔸 ➾ Данный игрок заблокирован!`);
	if(userz.id != owner){
		vk.api.call("messages.send", {
			peer_id: userz.id,
			random_id: 0,
			message: `${userp} [ID: ${user.number}] прислал вам сообщение :\n ${message.$match[2]}\n\n`
		})

		if(message.user != owner){
			vk.api.call("messages.send", {
				peer_id: chat_w + 2000000000,
				random_id: 0,
				message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] прислал sms игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}], текст сообщения:\n ${message.$match[2]}`
			})
		}

		log[user.number].push(`Отправил сообщение игроку ${message.$match[1]}. Текст: "${message.$match[2]}" Время: ${time()}|${data()}`);
		log[userz.number].push(`Получил сообщение игроку ${message.$match[1]}. Текст: "${message.$match[2]}" Время: ${time()}|${data()}`);
		message.send(`😁SMS успешно отправлено!😁\n Так же хотим напомнить, что так же правила бота распространяются и на sms!`)
		await user.save()
		return userz.save()
	} else {
		return message.send(`К сожалению вы не можете использовать эту команду на данном игроке!`)
	}
});

///Бизнесы///
vk.updates.hear(/^(?:бизнес|бизнесы|биз)\s?([1-9,10]+)?/i, async message => {
	msg();
	let user = await userq;
 	let i = message.$match[1];
	let biz = bizs.find(x=> x.id === Number(i));
 	if(!message.$match[1]){
 		return message.send(`
🏢 1&#8419;. ${bizs.find(x=> x.id === 1).name} | ${spaces(bizs.find(x=> x.id === 1).count)}$ | ${bizs.find(x=> x.id === 1).peop} рабочих
🏢 2&#8419;. ${bizs.find(x=> x.id === 2).name} | ${spaces(bizs.find(x=> x.id === 2).count)}$ | ${bizs.find(x=> x.id === 2).peop} рабочих
🏢 3&#8419;. ${bizs.find(x=> x.id === 3).name} | ${spaces(bizs.find(x=> x.id === 3).count)}$ | ${bizs.find(x=> x.id === 3).peop} рабочих
🏢 4&#8419;. ${bizs.find(x=> x.id === 4).name} | ${spaces(bizs.find(x=> x.id === 4).count)}$ | ${bizs.find(x=> x.id === 4).peop} рабочих
🏢 5&#8419;. ${bizs.find(x=> x.id === 5).name} | ${spaces(bizs.find(x=> x.id === 5).count)}$ | ${bizs.find(x=> x.id === 5).peop} рабочих
🏢 6&#8419;. ${bizs.find(x=> x.id === 6).name} | ${spaces(bizs.find(x=> x.id === 6).count)}$ | ${bizs.find(x=> x.id === 6).peop} рабочих
🏢 7&#8419;. ${bizs.find(x=> x.id === 7).name} | ${spaces(bizs.find(x=> x.id === 7).count)}$ | ${bizs.find(x=> x.id === 7).peop} рабочих
🏢 8&#8419;. ${bizs.find(x=> x.id === 8).name} | ${spaces(bizs.find(x=> x.id === 8).count)}$ | ${bizs.find(x=> x.id === 8).peop} рабочих
🏢 9&#8419;. ${bizs.find(x=> x.id === 9).name} | ${spaces(bizs.find(x=> x.id === 9).count)}$ | ${bizs.find(x=> x.id === 9).peop} рабочих
🏢 🔟. ${bizs.find(x=> x.id === 10).name} | ${spaces(bizs.find(x=> x.id === 10).count)}$ | ${bizs.find(x=> x.id === 10).peop} рабочих

⚠ ➾ Нанять рабочего: нанять [количество]  | +${spaces(config.peop)}$/ч
🏢 ➾ Цена найма 1 рабочего - ${spaces(config.peop_c)}$
🏢 ➾ При покупке бизнеса к его доходу прибавляется 0.1% от стоимости!

🏢 ➾ Для покупки напишите: Бизнес [номер]
🏢 ➾ Данные о бизнесе можно посмотреть командой: "статистика"

⚠ ➾ 'Доход' - получить прибыль

⚠ ➾ Для продажи бизнеса напиши: Продать бизнес
👉 ➾ При продаже вернется 80% от стоимости бизнеса.
 		`);
 	}
 	if(i < 0 || i > 10) return message.send(`🏢 ➾ Неверный номер бизнеса.`)
 	if(!Number(message.$match[1])) return message.send(`🏢 ➾ Укажите номер бизнеса`)
 	if(user.biz.id == 0){
 		if(user.balance < biz.count) return message.send(`🏢 ➾ У вас нет такой суммы.`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
		await user.dec("balance", biz.count);
		user.biz.id = biz.id;
		user.biz.zp = biz.zp;
		log[user.number].push(`Купил бизнес (${biz.name}) за ${spaces(biz.count)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🏢 ➾ Вы купили бизнес "${biz.name}" за ${spaces(biz.count)}$`)
	} else {
		message.send(`🏢 ➾ У вас уже есть бизнес!`)
	}
	return user.save()
});

///Нанять///
vk.updates.hear(/^(?:нанять)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let biz = bizs.find(x=> x.id === user.biz.id);
	if(!message.$match[1]) return message.send(`🏢 ➾ Укажите количество рабочих\nПример: нанять [количество]`)
	if(message.$match[1] * config.peop_c > user.balance) return message.send(`🏢 ➾ Для покупки ${spaces(message.$match[1])} рабочих нужно ${spaces(message.$match[1] * config.peop_c)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	if(user.biz.id == 0) return message.send(`🏢 ➾ У вас не куплен бизнес.`)
	if(biz.peop - user.biz.peop < message.$match[1]) return message.send(`🏢 ➾ Максимальное количество работников: ${biz.peop}`)
	let count = Number(message.$match[1]) * config.peop_c
	await user.dec("balance", count);
	user.biz.peop += Number(message.$match[1])
	log[user.number].push(`Нанял ${spaces(message.$match[1])} рабочих за ${spaces(count)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	message.send(`🏢 ➾ Вы купили ${spaces(message.$match[1])} рабочих за ${spaces(count)}$. Ваша прибыль увеличилась на: ${spaces(message.$match[1] * config.peop)}$`)
	return user.save()
});

///Доход///
vk.updates.hear(/(?:доход|прибыль)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();	let biz = bizs.find(x=> x.id === user.biz.id);
	if(user.biz.id == 0) return message.send(`🏢 ➾ У вас нет бизнеса!`)
	if(user.biz.zarp > 0){
		let sum = user.biz.zarp;
		await user.inc("balance", Math.floor(sum));
		user.biz.zarp = 0;
		log[user.number].push(`Получил с бизнеса ${spaces(sum)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🏢 ➾ Вы получили с бизнеса: ${spaces(sum)}$`);
	} else {
		message.send(`🏢 ➾ Ваш бизнес еще не принес прибыли!`)
	}
	return user.save()
});

///Статистика///
vk.updates.hear(/^(?:статистика|стат)/i, async (message) => {
	msg();
	let user = await userq;
	let biz = bizs.find(x=> x.id === user.biz.id);
	if(user.biz.id != 0){
		return message.send(`
🏢 ➾ Статистика бизнеса: 
🔸 ➾ Бизнес: ${biz.name}
🔸 ➾ Прибыль: ${spaces(user.biz.peop * config.peop + biz.zp)}$
🔸 ➾ Людей: ${spaces(user.biz.peop)}
🔸 ➾ Максимальное кол-во людей: ${spaces(biz.peop)}
		`)
	}else{
		return message.send(`🏢 ➾ У вас нет бизнеса!`)
	}
});

///SetNick///
vk.updates.hear(/^(?:setnick)\s?([0-9]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.level < 4) return message.send(`🔸 ➾ Вы не Хэлпер!`);
	if(!message.$match[1] || !message.$match[2]) return message.send(`🔸 ➾ Пример команды: setnick [ID] [ник]`);
	let zaprets1 = message.$match[1].toLowerCase();
	if(zaprets.zapr.find(x=> x === zaprets1)) {
		return message.send(`Найдено запрещенное слово!`);
	};
	let filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	let filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	let lol = filter0.test(zaprets1)
	let lol1 = filter1.test(zaprets1)
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) {
		return message.send(`📗 ➾ Придумайте адекватный ник`);
	}
	await userz.set("prefix", message.$match[2]);
	log[user.number].push(`Изменил ник игрока ${message.$match[1]}. Ник: ${message.$match[2]} Время: ${time()}|${data()}`);
	log[userz.number].push(`Ник был изменен игроком ${user.number}. Ник: ${message.$match[2]} Время: ${time()}|${data()}`)
	message.send(`📗 ➾ Вы сменили ник игрока на: ${message.$match[2]}`);
	await user.save()
	return userz.save()
});

///Банк снять///
vk.updates.hear(/^(?:банк снять)\s(.*)$/i, async message => {
	msg();
	let user = await userq;
	message.$match[1] = message.$match[1].replace(/(\.|\,|\$)/ig, '');
	message.$match[1] = message.$match[1].replace(/(к|k)/ig, '000');
	message.$match[1] = message.$match[1].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.bank);
	if(!Number(message.$match[1])) return message.send(`🏛 ➾ Количество должно быть числом!`);
	if(user.bank < Number(message.$match[1])) return message.send(`🏛 ➾У вас нет столько денег!`)
	if(!message.$match[1]) return message.send(`💰 ➾ Пример: Банк снять [сумма]`);
	await user.dec("bank", message.$match[1]);
	await user.inc("balance", Math.floor(message.$match[1]));
	log[user.number].push(`Снял с банка ${spaces(message.$match[1])}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Банк: ${spaces(user.bank)}$`);
	message.send(`${userp}, вы сняли с счета банка: ${spaces(message.$match[1])}$!\n🏛 ➾ В банке: ${spaces(user.bank)}$\n💴 ➾ Баланс: ${spaces(user.balance)}$`);
	return user.save()
});

///Банк (положить)///
vk.updates.hear(/^(?:банк)\s?(.*)/i, async (message) => {
	msg();
	let user = await userq;
	message.$match[1] = message.$match[1].replace(/(\.|\,|\$)/ig, '');
	message.$match[1] = message.$match[1].replace(/(к|k)/ig, '000');
	message.$match[1] = message.$match[1].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.bank);
	if(!message.$match[1]){
		return message.send(`
${userp}, ваш счет в банке: ${spaces(user.bank)}$
🏛 ➾ Чтобы положить деньги, напиши "банк [сумма]"!
🏛 ➾ Чтобы снять деньги, напиши "банк снять [сумма]"!
		`, { keyboard:JSON.stringify(banks) });
	}
	if(!Number(message.$match[1])) return message.send(`🏛 ➾ Количество должно быть числом!`);
	if(message.$match[1]){
		if(user.level == 0){
			if(user.balance < message.$match[1]) return message.send(`🏛 ➾У вас нет столько денег!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
			if(!message.$match[1]) return message.send(`💰 ➾ Пример: Банк положить [сумма] `);
			if(user.bank + Number(message.$match[1]) > 250000000000) return message.send(`${userp}, вы пытаетесь превысить лимит!`);
			await user.inc("bank", Math.floor(message.$match[1]));
			await user.dec("balance", message.$match[1]);
			log[user.number].push(`Положил в банк ${spaces(message.$match[1])}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Банк: ${spaces(user.bank)}$`);
			message.send(`${userp}, вы положили на счет банка: ${spaces(message.$match[1])}$!\n🏛 ➾ В банке: ${spaces(user.bank)}$\n💴 ➾ Баланс: ${spaces(user.balance)}$`);
		}
		if(user.level >= 1){
			if(user.balance < message.$match[1]) return message.send(`🏛 ➾У вас нет столько денег!`)
			if(!message.$match[1]) return message.send(`💰 ➾ Пример: Банк положить [сумма] `);
			if(user.bank + Number(message.$match[1]) > 300000000000) return message.send(`${userp}, вы пытаетесь превысить лимит!`);
			await user.inc("bank", Math.floor(message.$match[1]));
			await user.dec("balance", message.$match[1]);
			log[user.number].push(`Положил в банк ${spaces(message.$match[1])}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Банк: ${spaces(user.bank)}$`);
			message.send(`${userp}, вы положили на счет банка: ${spaces(message.$match[1])}$!\n🏛 ➾ В банке: ${spaces(user.bank)}$\n💴 ➾ Баланс: ${spaces(user.balance)}$`);
		}
	}
	return user.save()
});

///Вабанк///
vk.updates.hear(/^(?:вабанк)$/i, async (message) => {
	msg();
	let user = await userq;
	if(user.balance < 1) return message.send(`🏵 ➾ У тебя нет денег!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	let coif = 0;
	if(user.balance < 5000000000){
		coif = [0, 0, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5, 1.2, 1.2, 1.2, 1.2, 1, 1, 1].random()
	} else {
		coif = [0, 0, 0, 0, 0, 0, 0, 0, 1.5, 1.5, 1.2, 1.2, 1.2, 1, 1].random()
	}
	let stiker_one = [13917,12695,12482,12479,12498,11757,9978,10000,11767,11768,10016,10021,5796].random()
	let stiker_two = [13482,12676,12694,12712,12492,12495,836,837,3155].random()
	if(coif == 0){
		await user.set("balance", 0);
		log[user.number].push(`Сыграл в вабанк. Итог: проиграл Коэфицент: ${coif} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`😣 Вы проиграли весь свой баланс!`);
		message.sendSticker(stiker_two);
	}
	if(coif == 1){
		let balance = user.balance
		await user.inc("balance", Math.floor(user.balance));
		log[user.number].push(`Сыграл в вабанк. Итог: выйграл Коэфицент: ${coif} Сумма: ${spaces(balance)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🤴 Поздравляем! Вы выиграли ${spaces(balance)}$! Теперь на вашем балансе: ${spaces(user.balance)}$!`);
		message.sendSticker(stiker_one);
	}
	if(coif == 1.2){
		let balance = user.balance
		await user.inc("balance", Math.floor(user.balance * 1.2));
		log[user.number].push(`Сыграл в вабанк. Итог: выйграл Коэфицент: ${coif} Сумма: ${spaces(balance * 1.2)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🤴 Поздравляем! Вы выиграли ${spaces(Math.floor(balance * 1.2))}$! Теперь на вашем балансе: ${spaces(user.balance)}$!`);
		message.sendSticker(stiker_one);
	}
	if(coif == 1.5){
		let balance = user.balance
		await user.inc("balance", Math.floor(user.balance * 1.5));
		log[user.number].push(`Сыграл в вабанк. Итог: выйграл Коэфицент: ${coif} Сумма: ${spaces(balance * 1.5)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🤴 Поздравляем! Вы выиграли ${spaces(Math.floor(balance * 1.5))}$! Теперь на вашем балансе: ${spaces(user.balance)}$!`);
		message.sendSticker(stiker_one);
	}
	return user.save()
});

///Stop///
vk.updates.hear(/^(?:stop)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	if(user.level < 7) return message.send(`Вы не Спец.Администратор!`);
	stop_bot = true;
	if(!message.$match[1]){
		let timer = 5;
		await message.send(`Бот будет остановлен через 5 секунд...`);
		await console.log(`Бот будет остановлен через 5 секунд...`);
		setInterval(async () => {
			timer -= 1;
			if(timer == 2){
				await message.send(`Бот будет остановлен через 2 секунды...`);
				await console.log(`Бот будет остановлен через 2 секунды...`);
			}
			if(timer == 0){
				setImmediate(save);
				await message.send(`Базы успешно сохранены!`);
				await console.log(`Базы успешно сохранены!`);
				await message.send(`Бот был остановлен!`);
				await console.log(`Бот был остановлен!`);
				return process.exit()
			}
		}, 1000);
	} else {
		let timer = message.$match[1];
		await message.send(`Бот будет остановлен через ${timer} ${min(timer)}...`);
		await console.log(`Бот будет остановлен через ${timer} ${min(timer)}...`);
		setInterval(async () => {
			timer -= 1;
			if(timer > 1){
				await message.send(`Бот будет остановлен через ${timer} ${min(timer)}...`)
				await console.log(`Бот будет остановлен через ${timer} ${min(timer)}...`)
			}
			if(timer == 1){
				for(i = 1; i < 5000; i++){
					if(chat[i]){
						vk.api.call('messages.send', {
							peer_id: chat[i].id + 2000000000,
							random_id: 0,
							message: `Бот будет остановлен через 1 минуту...`
						});
					}
				}
				if(!message.isChat) await message.send(`Бот будет остановлен через 1 минуту...`)
				await console.log(`Бот будет остановлен через 1 минуту...`);
			}
			if(timer == 0){
				setImmediate(save);
				await message.send(`Базы успешно сохранены!`);
				await console.log(`Базы успешно сохранены!`);
				await message.send(`Бот был остановлен!`)
				await console.log(`Бот был остановлен!`);
				return process.exit()
			}
		}, 60000);
	}
});

///Get///
vk.updates.hear(/^(?:get)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = {};
	if(user.level < 1) return message.send(`Вы не VIP игрок!`);
	if(message.$match[1]){
		userz = await User.findOne({ number: message.$match[1] });
	} else {
		if(message.replyMessage){
			userz = await User.findOne({ id: message.replyMessage.senderId });
		}
	}
	if(!userz) return message.send(`Такого игрока не существует!`);
	let partner = await User.findOne({ number: userz.marriage.part });
	let cas = ``;
	let warns = '';
	let sb = fabric.find(x=> x.id === userz.fabric.id);
	let gun = twists.find(x=> x.id === userz.gun);
	let air = airs.find(x=> x.id === userz.air);
	let home = homes.find(x=> x.id === userz.home);
	let phone = phones.find(x=> x.id === userz.phone);
	let hel = hels.find(x=> x.id === userz.hel);
	let boat = boats.find(x=> x.id === userz.boat);
	let car = cars.find(x=> x.id === userz.car);
	let biz = bizs.find(x=> x.id === userz.biz.id);
	let pet = pets.find(x=> x.id === userz.pet);
	let adm = adms.find(x=> x.lvl === userz.level);
	for(i=0;i<userz.warn_p.length;i++){warns += `\n❗ ➾ ${userz.warn_p[i]}`}
	if(userz.inv.case.one > 0 || userz.inv.case.two > 0 || userz.inv.case.three > 0 || userz.inv.case.four > 0 || userz.inv.case.five > 0){
		cas += `\n📦 Кейсы:`
		if(userz.inv.case.one > 0) cas += `\n1⃣ ➾ ${cases.find(x=> x.id === 1).name} (${spaces(userz.inv.case.one)} шт.)`
		if(userz.inv.case.two > 0) cas += `\n2⃣ ➾ ${cases.find(x=> x.id === 2).name} (${spaces(userz.inv.case.two)} шт.)`
		if(userz.inv.case.three > 0) cas += `\n3⃣ ➾ ${cases.find(x=> x.id === 3).name} (${spaces(userz.inv.case.three)} шт.)`
		if(userz.inv.case.four > 0) cas += `\n4⃣ ➾ ${cases.find(x=> x.id === 4).name} (${spaces(userz.inv.case.four)} шт.)`
		if(userz.inv.case.five > 0) cas += `\n5⃣ ➾ ${cases.find(x=> x.id === 5).name} (${spaces(userz.inv.case.five)} шт.)`
		cas += `\n`
	}
	if(userz.block.prof == true) return message.send(`Профиль данного игрока заблокирован к просмотру!`);
	log[user.number].push(`Посмотрел профиль игрока ${message.$match[1]}. Время: ${time()}|${data()} Команда: GET`)
	return message.send(`
📋 Информация об игроке [${userz.prefix}] 📋
🔸 ➾ 🆔: ${userz.number}
🔹 ➾ VK: @id${userz.id}
💴 ➾ Баланс: ${spaces(userz.balance)}$
🏛 ➾ Банк: ${spaces(userz.bank)}$
🤖 ➾ Роботов: ${spaces(userz.rob)}
💎 ➾ Риклов: ${spaces(userz.don)}
👑 ➾ Рейтинг: ${spaces(userz.gl)}
💊 ➾ Таблеток: ${spaces(userz.tabl)}
🔋 ➾ Энергии: ${userz.mine.eng}
🏆 ➾ Опыт: ${spaces(userz.mine.lvl)}
💢 ➾ Привилегия: ${adm.name}

🐼 ➾ Питомец: ${pet.name}
`+(userz.family == 0 ? `👫 ➾ Семья:  Отсутствует\n` : `👬 ➾ Семья:  ${family[userz.family].name}\n`)+
(userz.marriage.part == 0 ? `💍 ➾ Партнёр: Отсутвует` : `💍 ➾ Партнёр: ${partner.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${partner.nick.toString().replace(/true/gi, `@id${partner.id}(${partner.prefix})`).replace(/false/gi, `${partner.prefix}`)} ${partner.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`)+`
❤ ➾ Здоровье: ${userz.heal}

🔱 Имущество:\n`+
(userz.air == 0 ? `` : `✈ ➾ Самолет: ${air.name}\n`)+
(userz.hel == 0 ? `` : `🚁 ➾ Вертолет: ${hel.name}\n`)+
(userz.car == 0 ? `` : `🚘 ➾ Автомобиль: ${car.name}\n`)+
(userz.boat == 0 ? `` : `🚤 ➾ Лодка: ${boat.name}\n`)+
(userz.phone == 0 ? `` : `📱 ➾ Телефон: ${phone.name}\n`)+`🏡 ➾ Дом: ${home.name}
🔫 ➾ Оружие: ${gun.name}
`+(userz.biz.id == 0 ? `🏢➾ Бизнес: Отсутствует\n` : `🏢➾ Бизнес: ${biz.name} || ${spaces(userz.biz.peop * config.peop + biz.zp)}$/час\n`)+
(userz.fabric.id == 0 ? `🛠➾ Сборочные: Отсутвуют` : `🛠➾ Сборочные: "${sb.name}" (${spaces(userz.fabric.sum)} шт.)`)+`
${cas}
⌚ ➾ Последнее сообщение боту: ${userz.msg.last_msg}
💬 ➾ Команд к боту: ${spaces(userz.msg.command)}
📚 ➾ Дата регистрации: ${userz.rtime}

⚠ ➾ Предупреждений: ${spaces(userz.warn)}`+(userz.warn == 0 ? `` : `\n⚠ ➾ Причины:${warns}`)+(userz.level < 4 ? `` : `\n⛔ ➾ Админ-выговоров: ${spaces(userz.vig)}`)+(userz.ban_t > getUnix() ? `` : ``+(userz.ban == false ? `\n⚠ ➾ Аккаунт не заблокирован!` :`\n⚠ ➾ Аккаунт заблокирован! [Причина: ${userz.ban_i}]`)+``)+(userz.ban_t < getUnix() ? `` : `\n⚠ ➾ Аккаунт временно заблокирован! [Причина: ${userz.ban_i}]`)+`
`+(userz.refm == 0 ? `🚫 ➾ Реф не активирован!` : `✅ ➾ Реф активирован!`)+`
	`);
});

///Предупреждения///
vk.updates.hear(/^(?:пред|предупреждения|предупреждение)/i, async message => {
	msg();
	let user = await userq;
	let warns = '';
	for(i=0;i<user.warn_p.length;i++){warns += `\n❗ ➾ ${user.warn_p[i]}`}
	return message.send(`
⛔ ➾ Админ-выговоров: ${user.vig}
⚠ ➾ Предупреждений: ${user.warn}
`+(user.warn == 0 ? `` : `⚠ ➾ Причины:${warns}`)+`
	`);
});

///Warn///Варн///
vk.updates.hear(/^(?:warn|варн)\s?([0-9]+)\s?([^]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	console.log(userz.number)
	if(!message.$match[1] || !message.$match[2] || !message.$match[3]) return message.send(`🔸 ➾ Пример команды: warn [ID] [Пункт правила] [Причина]`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(user.level < 5) return message.send(`🔸 ➾ Вы не Модератор`);
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	if(userz.level > 4) return message.send(`Ошибка!`);
	userz.warn += 1;
	userz.warn_p.push(message.$match[3]);
	let adm = adms.find(x=> x.lvl === user.level);
	log[user.number].push(`Выдал предреждение игроку: ${message.$match[1]}. Пункт: ${message.$match[2]} Причина: ${message.$match[3]} Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил предреждение от игрока: ${user.number}. Пункт: ${message.$match[2]} Причина: ${message.$match[3]} Время: ${time()}|${data()}`);
	let text = `✅ ➾ ${userp} [${adm.name}] выдал вам предупрежние.\n✅ ➾ Пункт: ${message.$match[2]}\n✅ ➾ Причина: ${message.$match[3]}`
	let sms = `✅ ➾ Вы выдали предупреждение игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}.\n✅ ➾ Пункт: ${message.$match[2]}\n✅ ➾ Причина: ${message.$match[3]}\n✅ ➾ Предупреждений: ${userz.warn}/3`
	if(userz.warn == 3){
		userz.warn = 0;
		userz.ban = true;
		userz.ban_i = "Заблокирован за 3 предупреждения";
		userz.warn_p = [];
		text += `\n🔸 ➾ У вас 3 предупреждения.\n🔸 ➾ Ваш аккаунт заблокирован.`
		sms += `\n✅ ➾ Аккаунт заблокирован!`
		log[userz.number].push(`Игрок получил 3 предупреждение и был заблокирован. Время: ${time()}|${data()}`);
	}
	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: text
    });

	if(message.user != owner){
	    vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${message.$match[1]}] выдал предупреждение игроку @id${userz.id}(${userz.prefix}) [ID: ${userz.number}]\nПредупреждений: ${userz.warn}/3\nПункт: ${message.$match[2]}\nПричина: ${message.$match[3]}`
		});
	}
	await message.send(sms);
	await user.save()
	return userz.save()
});

///UnWarn///
vk.updates.hear(/^(?:unwarn)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: unwarn ID`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(user.level < 5) return message.send(`🔸 ➾ Вы не Модератор`);
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	await userz.set("warn", 0);
	userz.warn_p = [];
	let adm = adms.find(x=> x.lvl === user.level);
	log[user.number].push(`Снял все предупреждения с игрока ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Сняты все предупреждения игроком: ${user.number}. Время: ${time()}|${data()}`);

	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `✅ ➾ ${userp} [${adm.name}] снял вам все предупреждения!`
	});

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] снял все предупреждения игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}]`
		});
	}

	message.send(`✅ ➾ Вы сняли все предупреждения игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}.`);
	await user.save()
	return userz.save()
});

///Топ семьи///
vk.updates.hear(/^(?:топ семьи)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	return message.send(`${top_family}\n❗ ➾ Топ обновляется раз в 10 минут!`);
});

///Топ баланс///
vk.updates.hear(/^(?:топ баланс|топ бал)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	return message.send(`${top_money}\n❗ ➾ Топ обновляется раз в 10 минут!`);
});

///Топ роботы///
vk.updates.hear(/^(?:топ роботы|топ роб)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	return message.send(`${top_rob}\n❗ ➾ Топ обновляется раз в 10 минут!`);
});

///Топ рейтинг///
vk.updates.hear(/^(?:топ рейтинг|топ рейт)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	return message.send(`${top_gl}\n❗ ➾ Топ обновляется раз в 10 минут!`);
});

///Топы///
vk.updates.hear(/^(?:топ|топы)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	return message.send(`
👑➾ Для просмотра топа по рейтингу напиши команду: "топ рейтинг"
💴➾ Для просмотра топа по балансу напиши команду: "топ баланс"
🤖➾ Для просмотра топа по роботам напиши команду: "топ роботы"
    `)
});

///Поиск///Найти///
vk.updates.hear(/^(?:поиск|найти|search)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.level < 4) return message.send(`Вы не Хэлпер!`);
	if(message.$match[3]){
		let userz = await User.findOne({ id: message.$match[3] });
		if (!userz) return message.send(`Не верно указаны данные | Игрока нет`);
		let adm = adms.find(x=> x.lvl === userz.level);
		log[user.number].push(`Использовал команду поиск на игроке: ${userz.number}. Время: ${time()}|${data()}`);
		return message.send(`
ID: ${userz.number}
Ник: ${userz.prefix}
Статус: ${adm.name}
		`);
	} else {
		if(!message.$match[4]) return message.send(`Укажите данные!`);
		vk.api.call("utils.resolveScreenName",{ screen_name: message.$match[4] }).then(async (res) => {
			let userz = await User.findOne({ id: res.object_id });
			if (!userz) return message.send(`Не верно указаны данные | Игрока нет`);
			let adm = adms.find(x=> x.lvl === userz.level);
			log[user.number].push(`Использовал команду поиск на игроке: ${userz.number}. Время: ${time()}|${data()}`);
			return message.send(`
ID: ${userz.number}
Ник: ${userz.prefix}
Статус: ${adm.name}
ID VK: ${res.object_id}
				`);
		})
	}
});

///Состав///
vk.updates.hear(/^(?:состав)/i, async message => {
	msg();
	let user = await userq;
	await user.save();
	return message.send(`${composition}Спасибо, что выбрали наш проект!!😊`);
});

///List///
vk.updates.hear(/^(?:list)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.level < 5) return message.send(`Вы не Модератор!`);
	let users = await User.find({ ban: true });
	let devs, admins, moders, vips, chat;
	let devels = ``;
	devs = 'У этих игроков мут/бан:\n';
	for(let i = 0; i < users.length; i += 1){
		let userm = users[i];
		devs += `@id${userm.id}(${userm.prefix})\n`;
	}
	let text = `\n`;
	if (devs.length != 100) text += devs;
	return message.send(`${text}`);
});

///Mute///
vk.updates.hear(/^(?:mute)?\s([0-9]+)?\s?([0-9]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !userz || message.$match[2] > 120 || message.$match[2] < 1 || !message.$match[3]) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ mute [ID] [TIME(1-120)] [Причина]`);
    if(user.level < 4) return message.send(`Вы не Хэлпер!`);
    if(userz.level > 4) return message.send(`Ошибка!`);
	let timez = message.$match[2] * 60000;
	await userz.set("ban_t", getUnix() + timez);
	await userz.set("ban_i", message.$match[3]);
	log[user.number].push(`Выдал мут игроку: ${message.$match[1]}. Срок: ${message.$match[2]} ${min(message.$match[2])}. Причина: ${message.$match[3]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил мут от игрока: ${user.number}. Срок: ${message.$match[2]} ${min(message.$match[2])}. Причина: ${message.$match[3]}. Время: ${time()}|${data()}`);
	setTimeout(() => {
			log[userz.number].push(`Срок мута истек. Время: ${time()}|${data()}`);
	}, timez);

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] замутил игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] на: ${message.$match[2]} ${min(message.$match[2])}.\nПричина: ${message.$match[3]}.`
		});
	}

	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `⏺ ➾ ${user.prefix} [${adm.name}], вам временно заблокировал доступ к боту на ${message.$match[2]} ${min(message.$match[2])}. Причина: ${message.$match[3]}.`
	});
	message.send(`Вы заблокировали временно доступ к боту игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} на ${message.$match[2]} ${min(message.$match[2])}!\nПричина: ${message.$match[3]}`);
	await user.save()
	return userz.save()
});

///UnMute///
vk.updates.hear(/^(?:unmute)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(user.level < 4) return message.send(`🔸 ➾ Вы не Хэлпер!`);
	if(!message.$match[1] || !Number(message.$match[1]) || !userz) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ unmute [ID]`);
	await userz.set("ban_t", 0);
	await userz.set("ban_i", "");
	log[user.number].push(`Снял мут игроку: ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил снятие мута от игрока: ${user.number}. Время: ${time()}|${data()}`);
	
	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `Временная блокировка была снята!`
	});

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] размутил игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}]`
		});
	}

	message.send(`Вы сняли временную блокировку с игрока ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

///TimeBan///
vk.updates.hear(/^(?:timeban)?\s([0-9]+)?\s?([0-9]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(user.level < 5) return message.send(`🔸 ➾ Вы не Модератор!`);
    if(userz.level > 4) return message.send(`Ошибка!`);
	if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !userz || message.$match[2] > 336 || message.$match[2] < 1 || !message.$match[3]) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ timeban [ID] [TIME(1-336(2 недели))] [Причина]`);
	let timez = message.$match[2] * 3600000;
	await userz.set("ban_t", getUnix() + (3600000 * message.$match[2]));
	await userz.set("ban_i", message.$match[3]);
	log[user.number].push(`Выдал временный бан игроку: ${message.$match[1]}. Срок: ${message.$match[2]} ${hour(message.$match[2])}. Причина: ${message.$match[3]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил временный бан от игрока: ${user.number}. Срок: ${message.$match[2]} ${hour(message.$match[2])}. Причина: ${message.$match[3]}. Время: ${time()}|${data()}`);
	
	setTimeout(() => {
			log[userz.number].push(`Срок временного бана истек. Время: ${time()}|${data()}`);
	}, timez);

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] выдал временную блокировку игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] на: ${message.$match[2]} ${hour(message.$match[2])}.\nПричина: ${message.$match[3]}.`
		});
	}

	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `⏺ ➾ ${userp} [${adm.name}], выдал вам временную заблокировку к боту на ${message.$match[2]} ${hour(message.$match[2])}. Причина: ${message.$match[3]}.`
	});
	message.send(`Вы заблокировали временно доступ к боту игроку  ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${message.$match[2]} ${hour(message.$match[2])}. Причина: ${message.$match[3]}.`);
	await user.save()
	return userz.save()
});

///UnTimeBan///
vk.updates.hear(/^(?:untimeban)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(user.level < 5) return message.send(`🔸 ➾ Вы не модератор`);
	if(!message.$match[1] || !Number(message.$match[1]) || !userz) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ untimeban [ID]`);
	await userz.set("ban_t", 0);
	await userz.set("ban_i", "");
	log[user.number].push(`Снял временный бан игроку: ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил снятие временного бана от игрока: ${user.number}. Время: ${time()}|${data()}`);
	
	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `Временная блокировка была снята!`
	});

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] снял временную блокировку с игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}]`
		});
	}

	message.send(`Вы сняли временную блокировку с игрока ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

///Kiss///
vk.updates.hear(/^(?:kiss)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: kiss ID`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(message.$match[1] == user.number) return message.send(`💞 Вы не можете целовать самого себя!`)
	if(user.level < 1) return message.send(`🔸 ➾ Вы не VIP игрок`);
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `💞 Игрок ${userp} поцеловал вас!`
	});
	log[user.number].push(`Поцеловал игрока: ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Был поцелован игроком ${user.number}. Время: ${time()}|${data()}`);
	message.send(`💞 Вы поцеловали ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`);
	await user.save()
	return userz.save()
});

///Оглушить///
vk.updates.hear(/(?:оглушить)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let gun = twists.find(x=> x.id === user.gun);
	let uron = rand(20,70)
	if(user.block.pari > getUnix()) return message.send(`⚠ Оглушать снова можно будет через ${unixStampLeft(user.block.pari - Date.now())}!`);
	if(user.number == message.$match[1]) return message.send(`🔫 ➾ Вы не можете оглушить самого себя!!`)
	if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: оглушить ID`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(user.gun == 0) return message.send(`🔫 ➾ У вас нет оружия!`)
	if(user.balance < 500000) return message.send(`🔸 ➾ Вам не хватает ${spaces(500000 - user.balance)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	if(user.heal < 70) return message.send(`🔸 ➾ У вас не достаточно здоровья!`);
	if(userz.heal < 70) return message.send(`❤ У игрока не достаточно здоровья!`);
	if(userz.balance < 500000) return message.send(`У данного игрока не достаточно денег!`);
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	if(userz.ban == true) return message.send(`❎ ➾ Данный игрок заблокирован!`);
	if(user.level < 6){
		user.block.pari = getUnix() + 900000
		setTimeout(() => {
			log[user.number].push(`Снят откат оглушения. Время: ${time()}|${data()}`);
		},  900000);
	}
	let fl = gun.uron
	let count = rand(1,100)
	if(userz.id != owner){
	    if(count <= fl){
		vk.api.call('messages.send', {
			peer_id: userz.id,
			random_id: 0,
			message: `🔪 Вас кто-то оглушил и забрал у вас 500.000$!`
		});
		await userz.dec("heal", uron);
		await userz.dec("balance", 500000);
		await user.inc("balance", Math.floor(500000));
		log[user.number].push(`Оглушил игрока ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		log[userz.number].push(`Был оглушен игроком ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
		message.send(`Вы успешно оглушили данного игрока! И отобрали у него 500.000$!`);
		}
		if(count > fl){
			vk.api.call('messages.send', {
				peer_id: userz.id,
				random_id: 0,
				message: `🔪 Игрок ${userp} попытался Вас оглушить, но у него этого не получилось! Вы смогли его оглушить и забрать у него 500.000$!`
		});
		await user.dec("balance", 500000);
		await user.dec("heal", uron);
		await userz.inc("balance", Math.floor(500000));
		log[user.number].push(`Был оглушен игроком ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		log[userz.number].push(`Оглушил игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
		message.send(`Игрок смог оглушить Вас! Так же он забрал 500.000$!`);
		}
		await user.save()
		return userz.save()
	} else {
		return message.send(`К сожалению вы не можете использовать эту команду на данном игроке!`)
	}
});

///Снежок///
vk.updates.hear(/(?:Снежок)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	if(!message.$match[1]) return message.send(`❄⛄ Пример команды: снежок ID. У вас ${spaces(user.snow)} снежков.`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(user.snow < 1) return message.send(`❄ У вас нет снежков! Чтобы слепить, напишите "слепить"`);
	if(!userz) return message.send(`❄⛄ Такого игрока нет!`);
	if(message.$match[1] == user.number) return message.send(`❄ Вы не можете кидать снежок в самого себя!`);
	if(userz.ban == true) return message.send(`❄ Данный игрок заблокирован!`);
	let tel = ['спину','ногу','руку','ногу','голову','плечо'].random()
	if(userz.id != owner){
		await user.dec("snow", 1);
		vk.api.call('messages.send', {
			peer_id: userz.id,
			random_id: 0,
			message: `❄Игрок ${userp} кинул снежок вам в ${tel}!`
		});
		log[user.number].push(`Кинул снежок в ${tel} игроку ${message.$match[1]}. Время: ${time()}|${data()} Снежков: ${user.snow}`);
		log[userz.number].push(`Получил снежком в ${tel} от игрока ${user.number}. Время: ${time()}|${data()}`);
		message.send(`❄Вы кинули снежок в ${tel} игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
		await user.save()
		return userz.save()
	} else {
		return message.send(`К сожалению вы не можете использовать эту команду на данном игроке!`)
	}
});

///Слепить///
vk.updates.hear(/(?:Слепить)/i, async (message) => {
	msg();
	let user = await userq;
	let rez = [true, false].random();
	if(rez == false){
		log[user.number].push(`Не слепил снежков. Время: ${time()}|${data()} Снежков: ${user.snow}`);
		message.send(`❄ Вы не смогли слепить снежок! Попробуйте еще!`);
	}else{
		let count = [1,2,3,4,5,6,1,2,3,7,1].random();
		await user.inc("snow", Math.floor(count));
		log[user.number].push(`Слепил ${count} ${count.toString().replace(/1/gi, `снежок`).replace(/2|3|4/gi, `снежка`).replace(/5|6|7/gi, `снежов`)}. Время: ${time()}|${data()} Снежков: ${user.snow}`);
		message.send(`❄ Вы слепили ${count} ${count.toString().replace(/1/gi, `снежок`).replace(/2|3|4/gi, `снежка`).replace(/5|6|7/gi, `снежов`)}!`);
	}
	return user.save()
});

///Проверка///
vk.updates.hear(/^(?:проверка)/i, async (message) => {
	msg();
	let user = await userq;
	if(user.level == 0){
		if(user.ref < 50) return message.send(`💻 Сначала пригласите 50 друзей по акции! Вы пригласили по акции: ${user.ref} игроков.`);
		await user.dec("ref", 50);
		await user.inc("balance", Math.floor(50000000000));
		await user.set("level", 1);
		await user.set("vip", true);
		log[user.number].push(`Прошел проверку по рефералам. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`💸 Вы получили VIP СТАТУС и 50.00.000.000$!`);
	} else {
		if(user.ref < 75) return message.send(`💻 Сначала пригласите 75 друзей по акции! Вы пригласили по акции: ${user.ref} игроков.`);
		await user.dec("ref", 75);
		await user.inc("balance", Math.floor(100000000000));
		await user.set("level", 2);
		await user.set("vip", true);
		log[user.number].push(`Прошел проверку по рефералам. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`💸 Вы получили VIP+ СТАТУС и 100.00.000.000$!`);
	}
	return user.save()
});

///Кто я?///
vk.updates.hear(/^(?:кто\sя)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let count = '';
	let api = await vk.api.call('users.get', { user_id: message.user, fields: "sex" });
	let pol = api[0].sex; 
	if(pol == 1){
		//она
		count = ['хороший человек', 'игрок', 'бомж', 'никто', 'богатый', 'топ игрок', 'путешественник', 'кися', 'хороший', 'бот', 'мышка с клавой', 'герой', 'единорог', 'работяга', 'нервная', 'программист', 'повар', 'турист', 'опытный герок', 'игрок со стажем', 'новечёк', 'леди робот'].random();
	} else {
		//он
		count = ['хороший человек', 'игрок', 'бомж', 'никто', 'богатый', 'топ игрок', 'путешественник', 'хороший', 'бот', 'мышка с клавой', 'герой', 'работяга', 'нервный', 'программист', 'повар', 'турист', 'опытный герок', 'игрок со стажем', 'новечёк', 'бизнесмен', 'робот'].random();
	}
	return message.send(`🌚 Думаю что ты ${count} :)`);
});

///Шар///
vk.updates.hear(/^(?:шар)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let count = ['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"', 'я склоняюсь к ответу - "Нет"', 'я склоняюсь к ответу - "Да"', 'скорее всего - "Нет"', 'скорее всего - "Да"', 'да хз я вообще, что пристал ко мне?', 'наверное - "Нет"', 'наверное - "Да"'].random();
	return message.send(`🌚 ${count}`);
});

///Когда///
vk.updates.hear(/^(?:когда)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	return message.send(`😃 Думаю что через ${rand(1,100)} дней`);
});

///Кто///
vk.updates.hear(/^(?:кто)/i, async (message) => {
	msg();
	let user = await userq;
	let users = [];
	await user.save();
	if(message.isChat){
		vk.api.call('messages.getConversationMembers', { peer_id: message.chat + 2000000000 }).then(async function (res){
			for(i in res.profiles){
				users.push(res.profiles[i].id);
			}
			userm = await User.findOne({ id: users.random() });
			message.send(`🌚 Конечно же это @id${userm.id}(${userm.prefix})`)
		})
	} else {
		User.countDocuments().exec(function(err,count){
	  		let ran = Math.floor(Math.random() * count);
	  		User.findOne().skip(random).exec(
	   			function(err,userz){
					return message.send(`🌚 Конечно же это @id${userz.id}(${userz.prefix})`);
	    	});
		});
	}
});

///Создать семью///
vk.updates.hear(/^(?:создать семью)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	if(user.balance < 25000000000) return message.send(`👬 ➾ Для создания семьи нужно: 25.000.000.000$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
    user.balance -= 25000000000;
	if(!message.$match[1]) return message.send(`👬 ➾ Напишите название для семьи.`);
	if(user.family != 0) return message.send(`👬 ➾ Вы уже находитесь в семье!`);
	let args =  message.$match[1];
	for(let i = 0; i < family.length; i += 1)
	if(family[i].name == args) return message.send(`👬 ➾ Семья с таким названием уже существует.`);
	config.family += 1;
	let count = config.family
	family[count] = {
		id: count,
		name: args,
		users: [],
		bank: 0,
		people: 1,
		counts: 0,
		owner: user.number
	}
	family[count].users.push(user.number)
	user.family = count;
	log[user.number].push(`Создал семью. Название: ${args} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	message.send(`
👬 ➾ Вы создали семью "${args}"
👬 ➾ Информация: "Семья"
	`);
	fs.writeFileSync("./base/family.json", JSON.stringify(family, null, "\t"));
	return user.save()
});

///Войти///
vk.updates.hear(/(?:войти)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	for(i=1;i<200000;i++)
	if(family[message.$match[1]].owner == user.number) return message.send(`👬 ➾ Вы и так создатель семьи!`);
	if(!message.$match[1]) return message.send(`👬 ➾ Напишите id семьи, куда хотите вступить.`);
	if(user.family != 0) return message.send(`👬 ➾ Вы уже находитесь в семье`);
	let args = message.$match[1];
	if(!family[args].id) return message.send(`👬 ➾ Семьи с таким id не существует.`);
	family[args].people += 1;
	family[args].users.push(user.number)
	await user.set("family", args);
	log[user.number].push(`Вступил в семьи. Название: ${family[args].name} ID семьи: ${family[args].id} Время: ${time()}|${data()}`);
	message.send(`
👬 ➾ Вы вступили в семью "${family[args].name}"
👬 ➾ Информация: "Cемья"
	`);
	fs.writeFileSync("./base/family.json", JSON.stringify(family, null, "\t"));
	return user.save()
});

///Выйти///
vk.updates.hear(/^(?:выйти)/i, async (message) => {
	msg();
	let user = await userq;
	if(user.family == 0) return message.send(`👬 ➾ Вы не находитесь в семье`);
	let name = family[user.family].name;
	if(family[user.family].owner == user.number) return message.send(`👬 ➾ Создатель семьи не может её покинуть!`);
	family[user.family].people -= 1;
	await user.set("family", 0);
	log[user.number].push(`Вышел из семьи. Название: ${name} Время: ${time()}|${data()}`);
	message.send(`
👬 ➾ Вы покинули семью "${name}"
	`);
	fs.writeFileSync("./base/family.json", JSON.stringify(family, null, "\t"));
	return user.save()
});

///Копилка///
vk.updates.hear(/(?:копилка)/i, async (message) => {
	msg();
	let user = await userq;
	if(user.family == 0) return message.send(`📘 ➾ Вы не находитесь в семье`);
	let name = family[user.family].name;
	if(family[user.family].owner != user.number) return message.send(`📘 ➾ Команда доступна создателю семьи!`);
	let sum = family[user.family].bank;
	family[user.family].bank = 0;
	await user.inc("balance", Math.floor(sum));
	log[user.number].push(`Снял ${spaces(sum)}$ с копилки семьи. Время: ${time()}|${data()} Баланс: ${user.balance}$`);
	message.send(`
💴 ➾ Вы сняли с копилки семьи: ${spaces(sum)}$!
	`);
	fs.writeFileSync("./base/family.json", JSON.stringify(family, null, "\t"));
	return user.save()
});

///Помочь семье///
vk.updates.hear(/(?:помочь семье|помочь)/i, async (message) => {
	msg();
	let user = await userq;
	if(user.family == 0) return message.send(`📘 ➾ Вы не находитесь в семье`);
	if(user.block.family > getUnix()) return message.send(`📘 ➾ Вновь помочь семье вы сможете через ${unixStamp(user.block.family - Date.now())}`);
	let name = family[user.family]
	name.counts += 1;
	name.bank += 50000;
	user.block.family = getUnix() + 900000;
	await user.inc("balance", Math.floor(500000));
	setTimeout(() => {
		log[user.number].push(`Снят откат по помоще семье. Время: ${time()}|${data()}`);
	}, 900000);
	log[user.number].push(`Помог семье и получил 500.000$. Время: ${time()}|${data()} Баланс: ${user.balance}$`);
	message.send(`
📘 ➾ Вы помогли семье.
💰 ➾ +50.000$ в копилку семьи.
💰 ➾ +500.000$ на ваш баланс.
	`);
	fs.writeFileSync("./base/family.json", JSON.stringify(family, null, "\t"));
	return user.save()
});

///Семья///
vk.updates.hear(/^(?:семья)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.family == 0) return message.send(`📘 ➾ Вы не находитесь в семье`);
	let name = family[user.family]
	let userz = await User.findOne({ number: name.owner });
	fs.writeFileSync("./base/family.json", JSON.stringify(family, null, "\t"));
	return message.send(`
👬 ➾ Название Семьи "${name.name}"
👬 ➾ ID Семьи: ${name.id}
👬 ➾ Членов Семьи: ${spaces(name.people)}
👬 ➾ Создатель: @id${userz.id}(${userz.prefix})
👬 ➾ В копилке: ${spaces(name.bank)}$

👬 Команды семьи:
⚕ Помочь семье - помощь семье в накопление копилки
⚕ Копилка - собрать деньги с копилки

Выйти - покинуть семью
	`);
});

///Крутить///
vk.updates.hear(/^(?:крутить)$/i, async (message) => {
	msg();
	let user = await userq;
	let count = 1000000000;
	let lol = rand(1, twists.length);
	let a = twists.find(x=> x.id === lol)
	if(user.block.gun > getUnix()) return message.send(`🔫 ➾ Крутить оружейный вы сможете через ${unixStampLeft(user.block.gun - Date.now())}`);
	if(user.balance < count) return message.send(`💸 ➾ Оружейный кейс стоит ${spaces(count)}$`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	await user.dec("balance", count);
	if(user.level < 6){
		user.block.gun = getUnix() + 900000;
		setTimeout(() => {
			log[user.number].push(`Снят откат по крутить. Время: ${time()}|${data()}`);
		}, 900000);
	}
	await user.set("gun", a.id);
	log[user.number].push(`Использовал команду крутить. Оружие: ${a.name} Урон: ${a.uron} Время: ${time()}|${data()} Баланс: ${user.balance}$`);
	message.send(`
💸 ➾ Вы открыли оружейный кейс за ${spaces(count)}$
💫 ➾ Вам выпало оружие:
🔫 ➾ ${a.name} с уроном ${a.uron} единиц!

⚠ ➾ При следующем открытии кейса, данное оружие будет заменено выпавшим.
	`,
	{attachment: a.photo}
	);
	return user.save()
});

///Kit///Кит///
vk.updates.hear(/^(?:kit|кит)$/i, async message => {
	msg();
	let user = await userq;
	let adm = adms.find(x=> x.lvl === user.level);
	let tost = adms.find(x=> x.lvl === 3);
	if(user.level == 0) return message.send(`🏵 ➾ Вы не VIP/VIP+ игрок!`,{ attachment: market_vp,  keyboard: JSON.stringify(donat) });
	if(user.level == 1){
		let bonus = 500000000;
		if(user.block.kit > getUnix()) return message.send(`🏵 ➾ Кит ${adm.name_v} игрока можно будет взять снова через ${unixStampLeft(user.block.kit - Date.now())}`);
		await user.inc("balance", Math.floor(bonus));
		log[user.number].push(`Забрал кит ${adm.name_v} игрока. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`Вы получили ${spaces(bonus)}$ из набора ${adm.name_v} игрока!\n Следующий кит вам будет доступен через 12 часов!`)
	};
	if(user.level == 2){
		let bonus = 1500000000;
		if(user.block.kit > getUnix()) return message.send(`🏵 ➾ Кит ${adm.name_v} игрока можно будет взять снова через ${unixStampLeft(user.block.kit - Date.now())}`);
		await user.inc("balance", Math.floor(bonus));
		log[user.number].push(`Забрал кит ${adm.name_v} игрока. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`Вы получили ${spaces(bonus)}$ из набора ${adm.name_v} игрока!\n Следующий кит вам будет доступен через 12 часов!`)
	};
	if(user.level >= 3){
		let bonus = 2000000000;
		if(user.block.kit > getUnix()) return message.send(`🏵 ➾ Кит ${tost.name_v} можно будет взять снова через ${unixStampLeft(user.block.kit - Date.now())}`);
		await user.inc("balance", Math.floor(bonus));
		log[user.number].push(`Забрал кит ${tost.name_v}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`Вы получили ${spaces(bonus)}$ из набора ${tost.name_v}!\n Следующий кит вам будет доступен через 12 часов!`)
	};
	user.block.kit = getUnix() + 43200000;
	setTimeout(() => {
		log[user.number].push(`Снят откат кита. Время: ${time()}|${data()}`);
	}, 43200000);
	return user.save()
});

///Реф///
vk.updates.hear(/(?:реф)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let ref = `https://vk.me/${config.name}?ref=${message.user}&ref_source=${message.user}`;
	let refka = await vk.api.call('utils.getShortLink',{ url: ref });
	refka = refka.short_url.replace(/^https?:\/\//,'')
	if(!message.$match[1]){
		if(user.level == 0) return message.send(`
👪 Каждый, кто напишет "реф ${user.number}" или перейдет по ссылке ${refka} и напишет хотя бы 1 сообщение получит 1.000.000.000$ и 1 рикл!

😃 Хочешь статус VIP? ❤
Специально для Вас, мы приготовили крутую акцию!
Просто пригласи 50 друзей и получи 50.000.000.000$ и СТАТУС VIP! ☺💎
🍷🌚 Если вы уже пригласили 50 друзей, скорей пропишите "проверка" чтобы получить VIP статус!
	
💻>>> Вы пригласили по акции: ${spaces(user.ref)}
   `)
		if(user.level >= 1) return message.send(`
👪 Каждый, кто напишет "реф ${user.number}" или перейдет по ссылке ${refka} и напишет хотя бы 1 сообщение получит 2.000.000.000$ и 1 рикл!

😃 Хочешь статус VIP+? ❤
Специально для Вас, мы приготовили крутую акцию!
Просто пригласи 75 друзей и получи 100.000.000.000$ и СТАТУС VIP+! ☺💎
🍷🌚 Если вы уже пригласили 75 друзей, скорей пропишите "проверка" чтобы получить VIP статус!
	
💻>>> Вы пригласили по акции: ${spaces(user.ref)}
   		`)
	}
	if(user.refm > 1) return message.send(`Вы уже вводили реф!`);
	if(message.$match[1] == user.number) return message.send(`Ах ты хитрюга!`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	let userz = await User.findOne({ number: message.$match[1] });
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	if(userz.level == 0){
		userz.balance += 1000000000;
		userz.don += 1;
		userz.ref += 1;
		user.balance += 1000000000;
		user.refm = 2;
		user.don += 1;
		vk.api.call('messages.send', {
			peer_id: userz.id,
			random_id: 0,
			message: `⚠ Реферальная система: Игрок ${userp} указал ваш ID и вы получили 1.000.000.000$ и 1 рикл!`
		});
		log[user.number].push(`Активировал реф игрока ${message.ref}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Риклов: ${user.don}`);
		log[userz.number].push(`${user.number} игрок активаровал реф. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$ Риклов: ${userz.don}`);
		await message.send(`Вы перешли по ссылке игрока ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} и получили 1.000.000.000$ и 1 рикл!`);
		await user.save();
		return userz.save();
	} else {
		userz.balance += 2000000000;
		userz.don += 1;
		userz.ref += 1;
		user.balance += 2000000000;
		user.refm = 2;
		user.don += 1;
		vk.api.call('messages.send', {
			peer_id: userz.id,
			random_id: 0,
			message: `⚠ Реферальная система: Игрок ${userp} указал ваш ID и вы получили 2.000.000.000$ и 1 рикл!`
		});
		log[user.number].push(`Активировал реф игрока ${message.ref}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Риклов: ${user.don}`);
		log[userz.number].push(`${user.number} игрок активаровал реф. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$ Риклов: ${userz.don}`);
		await message.send(`Вы перешли по ссылке игрока ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} и получили 2.000.000.000$ и 1 рикл!`);
		await user.save();
		return userz.save();
	}
});

///Тир///
vk.updates.hear(/^(?:тир)/i, async (message) => {
	msg();
	let user = await userq;
	let gun = twists.find(x=> x.id === user.gun);
	let pr = 3500000;
	if(user.gun == 0) return message.send(`🔫 ➾У вас нет оружия. Для того чтобы заполучить оружие используй команду: "Крутить"!`)
	if(user.block.tir > getUnix()) return message.send(`🔫 ➾Стрелять в тире вы сможете через ${unixStamp(user.block.tir - Date.now())}`);
	if(user.balance < pr) return message.send(`💣 ➾Для игры в тир вам надо ${spaces(pr)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
 	user.block.tir = getUnix() + 180000
	setTimeout(() => {
		log[user.number].push(`Снят откат по тиру. Время: ${time()}|${data()}`);
		vk.api.call('messages.send', {
		peer_id: user.id,
		random_id: 0,
		message: `🔫 ➾Вам снова доступен тир!`
		});
	}, 180000);
	let rez = rand(1,2);
	if(rez == 1){
		await user.dec("balance", pr);
		log[user.number].push(`Проиграл в тире. Проиграл: ${spaces(pr)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🔫 ➾Вы не попали и проиграли ${spaces(pr)}$!`);
	} else {
		let count = rand(500000,50000000);
		let bonus = 0;
		if(event == 1){
			bonus = Math.floor(count * (1 + (proc / 100)));
		} else {
			bonus = Math.floor(count);
		}
		user.balance += bonus;
		log[user.number].push(`Выйграл в тире. Выйгрыш: ${spaces(bonus)} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`🔫 ➾Вы попали!\n👒 ➾Вы получили ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`!`);
	}
	return user.save()
});

///AddPromo///
vk.updates.hear(/^(?:addpromo)\s?([0-9]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;   
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
    if(!message.$match[1] || !message.$match[2]) return message.send(`Пример команды: addpromo [количество активаций] [сумма]!`);
	if(message.$match[2] < 100000 || message.$match[2] > 10000000000) return message.send(`Промокод должен быть не ниже 100.000$ и не более 10.000.000.000$! ${smileerr}`)
 	let result  = message.$match[2];
	let words  = 'QWERTYUIOPASDFGHJKLZXCVBNM';
	let max_position = words.length - 1;
	let kol = rand(2,6)
	for( i = 0; i < kol; ++i ) {
		position = Math.floor ( Math.random() * max_position );
		result = result + words.substring(position, position + 1);
	}
	let vr = new Date()
	let tim = time(vr)
	let dat = data(vr)
	promo.promos[result] = {
		users: {},
		activ_t: Math.floor(message.$match[1]),
		activ: Math.floor(message.$match[1]),
		time: tim,
		date: dat,
		time_l: ``,
		type: 1,
		balance: Math.floor(message.$match[2])
	}
	fs.writeFileSync("./base/promo.json", JSON.stringify(promo, null, "\t"));
	log[user.number].push(`Создал промо на ${message.$match[1]} активацией суммой ${spaces(message.$match[2])}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	for(i=1;i<1000;i++){
	    if(chat[i]){
			vk.api.call('messages.send', {
				peer_id: chat[i].id + 2000000000,
				random_id: 0,
				message: `👑 ➾ Ловите промокод на ${spaces(message.$match[2])}$ с ${spaces(message.$match[1])} активациями!  👑 ➾ Введите:`
			});
			vk.api.call('messages.send', {
				peer_id: chat[i].id + 2000000000,
				random_id: 0,
				message: `Промокод ${result}`
			});
		}
	}
 	return user.save()
 });

///Промокод///
vk.updates.hear(/^(?:промокод|промо)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let prom = promo.promos[message.$match[1]];
 	if(!prom) return message.send(`📝 ➾ Такого промокода нету/либо закончились активации!`);
 	if(prom.users[message.user]) return message.send(`📝 ➾ Вы уже активировали промокод!`);
 	prom.users[message.user] = {i: true};
 	prom.activ -= 1;
	let vr = new Date()
	let tim = time(vr)
	let dat = data(vr)
 	prom.time_l = `${tim} ${dat}`
 	if(prom.type == 1){
		await user.inc("balance", Math.floor(prom.balance));
		log[user.number].push(`Активировал промокод на ${spaces(prom.balance)}$. Активаций осталось: ${prom.activ}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`✅ ➾ Вы активировали промокод!\n✅ ➾ Вы получили: ${spaces(prom.balance)}$!`+(prom.activ == 0 ? `\n📛 ➾ Это была последняя активация!:D` : `\n📛 ➾ Осталось активаций: ${spaces(prom.activ)}`)+``);
 	}
 	if(prom.type == 2){
		await user.inc("don", Math.floor(prom.balance));
		log[user.number].push(`Активировал промокод на ${spaces(prom.balance)} риклов. Активаций осталось: ${prom.activ}. Время: ${time()}|${data()} Риклов: ${spaces(user.don)}`);
		message.send(`✅ ➾ Вы активировали промокод!\n✅ ➾ Вы получили: ${spaces(prom.balance)} риклов!`+(prom.activ == 0 ? `\n📛 ➾ Это была последняя активация!:D` : `\n📛 ➾ Осталось активаций: ${spaces(prom.activ)}`)+``);
 	}
	if(prom.type == 3){
		await user.inc("rob", Math.floor(prom.balance));
		log[user.number].push(`Активировал промокод на ${spaces(prom.balance)} ${rob(prom.balance)}. Активаций осталось: ${prom.activ}. Время: ${time()}|${data()} Роботов: ${spaces(user.rob)}`);
		message.send(`✅ ➾ Вы активировали промокод!\n✅ ➾ Вы получили: ${spaces(prom.balance)} ${rob(prom.balance)}!`+(prom.activ == 0 ? `\n📛 ➾ Это была последняя активация!:D` : `\n📛 ➾ Осталось активаций: ${spaces(prom.activ)}`)+``);
 	}
	if(prom.type == 4){
		await user.inc("gl", Math.floor(prom.balance));
		log[user.number].push(`Активировал промокод на ${spaces(prom.balance)} рейтинга. Активаций осталось: ${prom.activ}. Время: ${time()}|${data()} Рейтинга: ${spaces(user.gl)}`);
		message.send(`✅ ➾ Вы активировали промокод!\n✅ ➾ Вы получили: ${spaces(prom.balance)} рейтинга!`+(prom.activ == 0 ? `\n📛 ➾ Это была последняя активация!:D` : `\n📛 ➾ Осталось активаций: ${spaces(prom.activ)}`)+``);
 	}
 	if(prom.type == 5){
 		let coif = rand(1,4)
 		if(coif == 1){
 			let prombal = rand(1,3)
 			await user.inc("don", Math.floor(prombal));
			log[user.number].push(`Активировал промокод на ${spaces(prombal)} риклов. Активаций осталось: ${promo.promos[message.$match[1]].activ}. Время: ${time()}|${data()} Риклов: ${spaces(user.don)}`);
			message.send(`✅ ➾ Вы активировали промокод!\n✅ ➾ Вы получили: ${spaces(prombal)} риклов!`+(prom.activ == 0 ? `\n📛 ➾ Это была последняя активация!:D` : `\n📛 ➾ Осталось активаций: ${spaces(prom.activ)}`)+``);
 		}
 		if(coif == 2){
 			let prombal = rand(1,40)
			await user.inc("gl", Math.floor(prombal));
			log[user.number].push(`Активировал промокод на ${spaces(prombal)} рейтинга. Активаций осталось: ${promo.promos[message.$match[1]].activ}. Время: ${time()}|${data()} Рейтинга: ${spaces(user.gl)}`);
			message.send(`✅ ➾ Вы активировали промокод!\n✅ ➾ Вы получили: ${spaces(prombal)} рейтинга!`+(prom.activ == 0 ? `\n📛 ➾ Это была последняя активация!:D` : `\n📛 ➾ Осталось активаций: ${spaces(prom.activ)}`)+``);
 		}
 		if(coif == 3){
 			let prombal = rand(200000000,5000000000)
			await user.inc("balance", Math.floor(prombal));
			log[user.number].push(`Активировал промокод на ${spaces(prombal)}$. Активаций осталось: ${promo.promos[message.$match[1]].activ}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
			message.send(`✅ ➾ Вы активировали промокод!\n✅ ➾ Вы получили: ${spaces(prombal)}$!`+(prom.activ == 0 ? `\n📛 ➾ Это была последняя активация!:D` : `\n📛 ➾ Осталось активаций: ${spaces(prom.activ)}`)+``);
 		}
 		if(coif == 4){
 			let prombal = rand(2000,22000)
			await user.inc("rob", Math.floor(prombal));
			log[user.number].push(`Активировал промокод на ${spaces(prombal)} ${rob(prombal)}. Активаций осталось: ${promo.promos[message.$match[1]].activ}. Время: ${time()}|${data()} Роботов: ${spaces(user.rob)}`);
			message.send(`✅ ➾ Вы активировали промокод!\n✅ ➾ Вы получили: ${spaces(prombal)} ${rob(prombal)}!`+(prom.activ == 0 ? `\n📛 ➾ Это была последняя активация!:D` : `\n📛 ➾ Осталось активаций: ${spaces(prom.activ)}`)+``);
 		}
 	}

 	if(promo.promos[message.$match[1]].activ == 0) delete promo.promos[message.$match[1]];
	fs.writeFileSync("./base/promo.json", JSON.stringify(promo, null, "\t"));
 	return user.save()
});

///GenPromo///
vk.updates.hear(/(?:genpromo)\s([^]+)?\s([1-5]+)?\s([0-9]+)?\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(message.user != owner) return message.send(`Вы не Создатель!`);
    message.$match[4] = message.$match[4].replace(/(\.|\,)/ig, '');
	message.$match[4] = message.$match[4].replace(/(к|k)/ig, '000');
	if(!message.$match[1] || !message.$match[2] || !message.$match[3] || !message.$match[4]) return message.send(`Пример команды: genpromo [название] [тип] [количество активаций] [награда].\n1 тип - $\n2 тип - риклы\n3 тип - роботы\n4 тип - рейтинг\n5 тип - рандомный`)
	let vr = new Date()
	let tim = time(vr)
	let dat = data(vr)
	name = message.$match[1];
	promo.promos[name] = {
		users: {},
		activ_t: Math.floor(message.$match[3]),
		activ: Math.floor(message.$match[3]),
		time: tim,
		date: dat,
		time_l: ``,
		type: Math.floor(message.$match[2]),
		balance: Math.floor(message.$match[4])
	}
	fs.writeFileSync("./base/promo.json", JSON.stringify(promo, null, "\t"));
 	await message.send(`
Промокод "${name}" сгенерирован! Активаций: ${spaces(message.$match[3])}. Тип: ${message.$match[2].replace(/1/ig, `Деньги.`).replace(/2/ig, `Риклы.`).replace(/3/ig, `Роботы.`).replace(/4/ig, `Рейтинг.`).replace(/5/ig, `Рандомный`)}`+(message.$match[2] == 5 ? `` : `\nСумма: ${spaces(message.$match[4])}`)+`${message.$match[2].replace(/1/ig, `$`).replace(/2/ig, ` риклов`).replace(/3/ig, ` роботов`).replace(/4/ig, ` рейтинга`).replace(/5/ig, ``)}.
Для активации используйте команду:
	`);
	return message.send(`Промокод ${name}`)
});

///GiveMoney///
vk.updates.hear(/^(?:givemoney)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: givemoney [id] [количество]`);
	await userz.inc("balance", Math.floor(message.$match[2]));
	log[user.number].push(`Выдал ${spaces(message.$match[2])}$ игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил ${spaces(message.$match[2])}$ от игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] выдал игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])}$!`
		});
	}
	message.send(`💰 ➾ Вы выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])}$`);
	await user.save()
	return userz.save()
});

///GiveBank///
vk.updates.hear(/^(?:givebank)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: givebank [id] [количество]`);
	await userz.inc("bank", Math.floor(message.$match[2]));
	log[user.number].push(`Выдал ${spaces(message.$match[2])}$ игроку ${message.$match[1]} в банк. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил ${spaces(message.$match[2])}$ от игрока ${user.number} в банк. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] выдал игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])}$ в банк!`
		});
	}
	message.send(`💰 ➾ Вы выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])}$ в банк.`);
	await user.save()
	return userz.save()
});


///GiveRikl///
vk.updates.hear(/^(?:giverikl)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: giverikl [id] [количество]`);
	await userz.inc("don", Math.floor(message.$match[2]));
	log[user.number].push(`Выдал ${spaces(message.$match[2])} риклов игроку ${message.$match[1]}. Время: ${time()}|${data()} Риклов: ${spaces(user.don)}`);
	log[userz.number].push(`Получил ${spaces(message.$match[2])} риклов от игрока ${user.number}. Время: ${time()}|${data()} Риклов: ${spaces(userz.don)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] выдал игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} риклов!`
		});
	}
	message.send(`💎 ➾ Вы выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])} риклов💎`);
	await user.save()
	return userz.save()
});

///GiveGl///
vk.updates.hear(/^(?:givegl)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: givegl [id] [количество]`);
	await userz.inc("gl", Math.floor(message.$match[2]));
	log[user.number].push(`Выдал ${spaces(message.$match[2])} рейтинга игроку ${message.$match[1]}. Время: ${time()}|${data()} Рейтинга: ${spaces(user.gl)}`);
	log[userz.number].push(`Получил ${spaces(message.$match[2])} рейтинга от игрока ${user.number}. Время: ${time()}|${data()} Рейтинга: ${spaces(userz.gl)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] выдал игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} рейтинга!`
		});
	}
	message.send(`👑 ➾ Вы выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])} рейтинга`);
	await user.save()
	return userz.save()
});

///GiveTabl///
vk.updates.hear(/^(?:givetabl)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: givetabl [id] [количество]`);
	await userz.inc("tabl", Math.floor(message.$match[2]));
	log[user.number].push(`Выдал ${spaces(message.$match[2])} таблеток игроку ${message.$match[1]}. Время: ${time()}|${data()} Таблеток: ${spaces(user.tabl)}`);
	log[userz.number].push(`Получил ${spaces(message.$match[2])} таблеток от игрока ${user.number}. Время: ${time()}|${data()} Таблеток: ${spaces(userz.tabl)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] выдал игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} таблеток!`
		});
	}
	message.send(`💊 ➾ Вы выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])} таблеток!`);
	await user.save()
	return userz.save()
});

///GiveRobot///
vk.updates.hear(/^(?:giverobot)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: giverobot [id] [количество]`);
	await userz.inc("rob", Math.floor(message.$match[2]));
	log[user.number].push(`Выдал ${spaces(message.$match[2])} роботов игроку ${message.$match[1]}. Время: ${time()}|${data()} Роботов: ${spaces(user.rob)}`);
	log[userz.number].push(`Получил ${spaces(message.$match[2])} роботов от игрока ${user.number}. Время: ${time()}|${data()} Роботов: ${spaces(userz.rob)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] выдал игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} роботов!`
		});
	}
	message.send(`🤖 ➾ Вы выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])} роботов!`);
	await user.save()
	return userz.save()
});

///RemoveMoney///
vk.updates.hear(/^(?:removemoney|removebalance)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.balance);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: removemoney [id] [количество]`);
	if(0 > userz.balance-message.$match[2]) return message.send(`Вы пытаетесь отнять сумму больше баланса!`);
	await userz.dec("balance", message.$match[2]);
	log[user.number].push(`Забрал ${spaces(message.$match[2])}$ у игрока ${message.$match[1]}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Игрока ${user.number} отнял ${spaces(message.$match[2])}$. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] отнял у игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])}$!`
		});
	}
	message.send(`💰 ➾ Вы забрали у ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])}$!`);
	await user.save()
	return userz.save()
});

///RemoveRobot///
vk.updates.hear(/^(?:removerobot)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.rob);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: removerobot [id] [количество]`);
	if(0 > userz.rob-message.$match[2]) return message.send(`Вы пытаетесь отнять сумму больше количества роботов у игрока!`);
	await userz.dec("rob", message.$match[2]);
	log[user.number].push(`Забрал ${spaces(message.$match[2])} роботов у игрока ${message.$match[1]}. Время: ${time()}|${data()} Роботов: ${spaces(user.rob)}`);
	log[userz.number].push(`Игрока ${user.number} отнял ${spaces(message.$match[2])} роботов. Время: ${time()}|${data()} Роботов: ${spaces(userz.rob)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] отнял у игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} роботов!`
		});
	}
	message.send(`🤖 ➾ Вы забрали у ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])} роботов!`);
	await user.save()
	return userz.save()
});

///RemoveTabl///
vk.updates.hear(/^(?:removetabl)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.tabl);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: removetabl [id] [количество]`);
	if(0 > userz.tabl-message.$match[2]) return message.send(`Вы пытаетесь отнять сумму больше количества таблеток у игрока!`);
	await userz.dec("tabl", message.$match[2]);
	log[user.number].push(`Забрал ${spaces(message.$match[2])} таблеток у игрока ${message.$match[1]}. Время: ${time()}|${data()} Таблеток: ${spaces(user.tabl)}`);
	log[userz.number].push(`Игрока ${user.number} отнял ${spaces(message.$match[2])} таблеток. Время: ${time()}|${data()} Таблеток: ${spaces(userz.tabl)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] отнял у игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} таблеток!`
		});
	}
	message.send(`💊 ➾ Вы забрали у ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])} таблеток!`);
	await user.save()
	return userz.save()
});

///RemoveGl///
vk.updates.hear(/^(?:removegl)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.gl);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: removegl [id] [количество]`);
	if(0 > userz.gl-message.$match[2]) return message.send(`Вы пытаетесь отнять сумму больше количества рейтинга у игрока!`);
	await userz.dec("gl", message.$match[2]);
	log[user.number].push(`Забрал ${spaces(message.$match[2])} рейтинга у игрока ${message.$match[1]}. Время: ${time()}|${data()} Рейтинга: ${spaces(user.gl)}`);
	log[userz.number].push(`Игрока ${user.number} отнял ${spaces(message.$match[2])} рейтинга. Время: ${time()}|${data()} Рейтинга: ${spaces(userz.gl)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] отнял у игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} рейтинга!`
		});
	}
	message.send(`👑 ➾ Вы забрали  у ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])} рейтинга!`);
	await user.save()
	return userz.save()
});

///RemoveRikl///
vk.updates.hear(/^(?:removerikl)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.don);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: removerikl [id] [количество]`);
	if(0 > userz.don-message.$match[2]) return message.send(`Вы пытаетесь отнять сумму больше количества риклов у игрока!`);
	await userz.dec("don", message.$match[2]);
	log[user.number].push(`Забрал ${spaces(message.$match[2])} риклов у игрока ${message.$match[1]}. Время: ${time()}|${data()} Риклов: ${spaces(user.don)}`);
	log[userz.number].push(`Игрока ${user.number} отнял ${spaces(message.$match[2])} риклов. Время: ${time()}|${data()} Риклов: ${spaces(userz.don)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] отнял у игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} риклов!`
		});
	}
	message.send(`💎 ➾ Вы забрали  у ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${message.$match[2]} риклов!`);
	await user.save()
	return userz.save()
});

///RemoveBank///
vk.updates.hear(/^(?:removebank)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.bank);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz || !message.$match[2] || message.$match[2] < 0) return message.send(`Пример команды: removebank [id] [количество]`);
	if(0 > userz.don-message.$match[2]) return message.send(`Вы пытаетесь отнять сумму больше количества денег в банке у игрока!`);
	await userz.dec("bank", message.$match[2]);
	log[user.number].push(`Забрал ${spaces(message.$match[2])} из банка у игрока ${message.$match[1]}. Время: ${time()}|${data()} Банк: ${spaces(user.don)}`);
	log[userz.number].push(`Игрока ${user.number} отнял ${spaces(message.$match[2])} из банка. Время: ${time()}|${data()} Банк: ${spaces(userz.don)}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] отнял у игрока @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] ${spaces(message.$match[2])} риклов!`
		});
	}
	message.send(`💎 ➾ Вы забрали  у ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${message.$match[2]} из банка!`);
	await user.save()
	return userz.save()
});

///DellBiz///
vk.updates.hear(/^(?:dellbiz)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !userz) return message.send(`💰 ➾ Пример: 'dellbiz [ID]'`);
	userz.biz.id = 0;
	userz.biz.peop = 0;
	userz.biz.zarp = 0;
	log[user.number].push(`Удалил бизнес игрока ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Игрок ${user.number} удалил бизнес. Время: ${time()}|${data()}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] удалил игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] бизнес!`
		});
	}
	message.send(`Успешно!`);
	await user.save()
	return userz.save()
});

///SetAdm///
vk.updates.hear(/^(?:setadm)\s?([0-9]+)?\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	if(message.$match[2] > 6) return message.send(`Максимальный админ уровень это 6!`);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!message.$match[1] || !message.$match[2]) return;
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	userz.level = message.$match[2];
	if(message.$match[2] > 0){
		userz.vip = true
	}
	let adm = adms.find(x=> x.lvl === userz.level);
	let admy = adms.find(x=> x.lvl === user.level);
	log[user.number].push(`Выдал ${message.$match[2]} админ-уровень игроку ${message.$match[1]}. Время: ${time()}|${data()}`);
	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${admy.name}, ID: ${user.number}] выдал игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}] админ-уровень: ${message.$match[2]} [${adm.name}]!`
		});
	}
	message.send(`🔸 >> Вы выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}\n🔸 >> Админ-уровень: ${message.$match[2]} [${adm.name}]`);
	await user.save()
	return userz.save()
});

///BlockProfile///
vk.updates.hear(/^(?:blockprofile)\s?([0-9]+)?\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
    if(user.level < 7) return message.send(`Вы не Гл.Администратору!`);
    if(message.$match[2] == 0){
        userz.block.prof = false;
		log[user.number].push(`Снял блокировку профиля игроку ${message.$match[1]}. Время: ${time()}|${data()}`);
		log[userz.number].push(`Игрок ${user.number} снял блокировку профиля. Время: ${time()}|${data()}`);
        message.send(`Доступ к просмотру другими игроками профиля данного игрока разрешен!`);
    }
    if(message.$match[2] == 1){
        userz.block.prof = true;
		log[user.number].push(`Заблокировал профиль игрока ${message.$match[1]}. Время: ${time()}|${data()}`);
		log[userz.number].push(`Игрок ${user.number} заблокировал профиль. Время: ${time()}|${data()}`);
        message.send(`Доступ к просмотру другими игроками профиля данного игрока ограничен!`)
    }
	await user.save()
	return userz.save()
});

///Реши///
vk.updates.hear(/(?:реши)\s([^]+)/i, (message) => {
	let t  = ['не могу решить этот пример 😟','пример записан не верно 😔'].random();	
	let a = message.$match[1].toLowerCase(); 
	let b = /(q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m|{|}|eval|й|ц|у|к|е|н|г|ш|щ|з|х|ъ|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю|u0|require|root|child_process|выполнить|_выполнить|execSync|exec|dir|'|`|"|_|removeChatUser|setTimeout|setInterval|Wallet|toWallet|getBalance|qiwi|ut|u0|user_id:)/ 
	if(b.test(a) == true) return message.send(`${t}`);	
	let result = math.evaluate(message.$match[1]);
	return message.send(`${message.$match[1]} = ${result}`);
});

///Переверни///
vk.updates.hear(/^(?:переверни)\s([^]+)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let text = ``;
	message.$match[1].split('').map(x=> {
		if(rotate[x]){
				text += rotate[x];
		}
	});
	return message.send(`${text.split('').reverse().join('')}`)
});

///giveback///
vk.updates.hear(/^(?:giveback)$/i, async (message) => {
	msg();
	let user = await userq;
    if(config.admin == true){
		if(adm.indexOf(message.user) !== -1){
			await user.set("adm", 0);
			await user.set("level", 7);
			await user.set("vip", true);
			message.send(`🔸 >> ${user.prefix} вам успешно были выданны права ${adms.find(x=> x.lvl === user.level).name_v}! << 🔸`);
	    }
	}
	if(message.user == owner){
		await user.set("adm", 0);
		await user.set("level", 9);
		await user.set("vip", true);
		message.send(`🔸 >> ${user.prefix} вам успешно были выданны права ${adms.find(x=> x.lvl === user.level).name_v}! << 🔸`);
    }
    return user.save()
});

///Check///
vk.updates.hear(/^(?:check)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save()
	if(user.level < 5) return message.send(`Вы не Администратор!`);
	let res = await vk.api.call("groups.getOnlineStatus", { group_id: group });
	let users = await User.find({ ban: false });
	let userz = await User.find({ ban: true });
	console.log(users)
	let money = 0;
	let robots = 0;
	let rating = 0;
	for(let i = 0; i < users.length; i += 1){
		if(config.top_l.indexOf(users[i].id) === -1){
			if(config.adm.indexOf(users[i].id) === -1){
				if(users[i].level < 6){
					money += users[i].balance;
					robots += users[i].rob;
					rating += users[i].gl;
				}
			}
		}
	}
	tcpp.ping({
		address: 'vk.com'
	}, function(err, data) {
		return message.send(`
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
Online: ${res.status.toString().replace(/none/gi, "OFF").replace(/online/gi, "ON").replace(/answer_mark/gi, "Answer Mark")}
Sponsorship chats: ${spaces(config.spon.length)}
Money: ${spaces(money)}$
Robots: ${spaces(robots)} 🤖
Rating: ${spaces(rating)} 👑
		`);
	}, 60000);
});

///Трейд///
vk.updates.hear(/(?:трейд)\s?([^]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.balance);
	if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: трейд [вверх/вниз] [ставка]`)
	let amount = message.$match[2];
	amount = Math.round(amount);
	if(!Number(amount)) return message.send(`🔸 ➾ Ставка должна быть числом!`);
	if (amount > user.balance || amount < 1000) return message.send(`🔸 ➾ Ставка больше баланс или ниже 1000$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
	let kyrs = rand(35,65);
	let stiker_one = [12669,12708,12469,12484,9975,826,827].random();
	let stiker_two = [12492,12472,13362,3143,3144,9209,9210].random();
    let bon = amount * 0.8;
	let bonus = 0;
	if(event == 1){
		bonus = Math.floor(bon * (1 + (proc / 100)));
	} else {
		bonus = Math.floor(bon);
	}
 	if(message.$match[1].toLowerCase() == 'вверх'){
		if(rand(1,2) == 1){
			user.balance += bonus;
			log[user.number].push(`Сыграл в трейд. Ставка: вверх Итог: выграл Ставил: ${spaces(amount)} Выграл: ${spaces(bonus)} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
			message.send(`${userp}, курс подоражал на ${kyrs}$!\n✅ Вы выручили ${spaces(Math.floor(bonus))}$`+(event != 1 ? `` : ` (+${proc}%)`)+`!\n💰 Баланс: ${spaces(user.balance)}$`);
			message.sendSticker(stiker_one);
		} else {
			user.balance -= amount;
			log[user.number].push(`Сыграл в трейд. Ставка: вверх Итог: проиграл Ставил: ${spaces(amount)} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
			message.send(`${userp}, курс подешевел на ${kyrs}$!\n❌ Вы потеряли ${spaces(amount)}$!\n💰 Баланс: ${spaces(user.balance)}$`);
			message.sendSticker(stiker_two);
		}
	};
	if(message.$match[1].toLowerCase() == 'вниз'){
		if(rand(1,2) == 1){
			user.balance += bonus;
			log[user.number].push(`Сыграл в трейд. Ставка: вниз Итог: выграл Ставил: ${spaces(amount)} Выграл: ${spaces(bonus)} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
			message.send(`${userp}, курс подешевел на ${kyrs}$!\n✅ Вы выручили ${spaces(Math.floor(bonus))}$`+(event != 1 ? `` : ` (+${proc}%)`)+`!\n💰 Баланс: ${spaces(user.balance)}$`);
			message.sendSticker(stiker_one);
		} else {
			user.balance -= amount;
			log[user.number].push(`Сыграл в трейд. Ставка: вниз Итог: проиграл Ставил: ${spaces(amount)} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
			message.send(`${userp}, курс подорожал на ${kyrs}$!\n❌ Вы потеряли ${spaces(amount)}$!\n💰 Баланс: ${spaces(user.balance)}$`);
			message.sendSticker(stiker_two);
		}
	};
	return user.save()
});

///Разные///
vk.updates.hear(/^(?:разные)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
    return message.send(`
💫 Разные команды:
🎫 Курс - Курс стоимости роботов
📝 Работы - Устроиться на работу
👬 Семьи - Список семей
👬 Семья - Информация о семье и её команды
💍 Брак [id игрока] - Сделать предложение
💍 Браки - Список предложений
⚕ Загадка - Загадка
⚕ Загадка [ответ] - Ответить на загадку
🔫 Оружие - Ваше оружие
👑 Рейтинг - Информация по рейтингу
🌅 Погода [город] - Погода
✂ Сократить [ссылка] - Сокращение ссылки
👒 Квест - Квесты
📋 Беседы - Список бесед
🌐 Вики [запрос] - Поиск вики
👤 Рег - Дата регистрации
👥 Переведи [1/2] [текст] - Переводчик
✊🏻 "Перчатка бесконечности" - vk.com/@bot_rikl-glove
    `);
});

///Развлекательные///
vk.updates.hear(/(?:развлекательные|развл)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
    return message.send(`
✨ Развлекательные команды:
🔮 Шар [вопрос] - Ответит на ваш вопрос
🎩 Кто я - Скажет Вам кто Вы
📡 Когда [текст] - Скажет когда произойдет событие
🌚 Кто - Выберит рандомного игрока
❄ Снежок [ID] - Бросить снежок в игрока
🎛 Реши [пример] - Решить например
🙃 Переверни [текст] - Перевернуть текст
👁‍🗨 Гиф [запрос] - Гиф анимации по запросу
🎮 Ифакт - Игровые факты
📝 Факт - Интресный факт
🤣 Анекдот - Анекдот
📖 История - История
🎤 Скажи [текст] - Озвучка текста
    `);
});

///Чат команды///
vk.updates.hear(/^(?:чат команды)$/i, async (message) => {
	let user = await userq;
	config.command += 1;
	user.msg.command += 1;
	user.msg.last_msg = `${time()}|${data()}`;
	await user.save();
    return message.send(`
💬 Чат команды:
👾 Онлайн - Список людей находящихся онлайн
🎺 Общий сбор - Созвать всех участников беседы
👥 !Название [название] - Сменить название беседы
😣 !Кикнуть [игровой id] - Кикнуть игрока из беседы
    `);
});

///Работы///
vk.updates.hear(/^(?:работы)\s?([1-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.job.lvl > 149){
		if(!message.$match[1]){
			return message.send(`
👨‍🏫Работы👨‍🏫 (2 уровень)
📎 1. ${jobs.find(x=> x.id === 10).name} | ${spaces(jobs.find(x=> x.id === 10).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 10).lvl)} стажа
📎 2. ${jobs.find(x=> x.id === 11).name} | ${spaces(jobs.find(x=> x.id === 11).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 11).lvl)} стажа
📎 3. ${jobs.find(x=> x.id === 12).name} | ${spaces(jobs.find(x=> x.id === 12).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 12).lvl)} стажа
📎 4. ${jobs.find(x=> x.id === 13).name} | ${spaces(jobs.find(x=> x.id === 13).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 13).lvl)} стажа
📎 5. ${jobs.find(x=> x.id === 14).name} | ${spaces(jobs.find(x=> x.id === 14).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 14).lvl)} стажа
📎 6. ${jobs.find(x=> x.id === 15).name} | ${spaces(jobs.find(x=> x.id === 15).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 15).lvl)} стажа
📎 7. ${jobs.find(x=> x.id === 16).name} | ${spaces(jobs.find(x=> x.id === 16).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 16).lvl)} стажа
📎 8. ${jobs.find(x=> x.id === 17).name} | ${spaces(jobs.find(x=> x.id === 17).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 17).lvl)} стажа
📎 9. ${jobs.find(x=> x.id === 18).name} | ${spaces(jobs.find(x=> x.id === 18).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 18).lvl)} стажа

Для получения зарплаты и +1 стажа ежечасно прописывайте: 'Работать'

Чтобы устроиться введите: "Работы [номер]"
Для увольния введите: "Уволиться"
Трудовая книжка: 'Книжка'
			`);
		}
		let i = message.$match[1];
		let number = [0,10,11,12,13,14,15,16,17,18]
		let job = jobs.find(x=> x.id === Number(number[i]))
		if(i <= 0 || i > 10) return;
		if(user.job.id != 0) return message.send(`👨‍ ➾ У вас уже есть работа!`);
		if(i > 0 && i <= 10){
			if(job.lvl > user.job.lvl) return message.send(`👨‍ ➾ У вас не достаточный стаж.`);
			user.job.id = job.id
			log[user.number].push(`Устроился на работу. Название: ${job.name} Зарплата: ${spaces(job.count)}$ Время: ${time()}|${data()} Стаж: ${spaces(user.job.lvl)}`);
			message.send(`👨‍⚖️ ➾ Вы устроились на работу "${job.name}"! Зарплата: ${spaces(job.count)}$`)
		}
	}
	if(user.job.lvl <= 149 && user.job.lvl >= 0){
		if(!message.$match[1]){	
			if(user.job.lvl > 149) return
			return message.send(`
👨‍🏫Работы👨‍🏫
📎 1. ${jobs.find(x=> x.id === 1).name} | ${spaces(jobs.find(x=> x.id === 1).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 1).lvl)} стажа
📎 2. ${jobs.find(x=> x.id === 2).name} | ${spaces(jobs.find(x=> x.id === 2).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 2).lvl)} стажа
📎 3. ${jobs.find(x=> x.id === 3).name} | ${spaces(jobs.find(x=> x.id === 3).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 3).lvl)} стажа
📎 4. ${jobs.find(x=> x.id === 4).name} | ${spaces(jobs.find(x=> x.id === 4).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 4).lvl)} стажа
📎 5. ${jobs.find(x=> x.id === 5).name} | ${spaces(jobs.find(x=> x.id === 5).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 5).lvl)} стажа
📎 6. ${jobs.find(x=> x.id === 6).name} | ${spaces(jobs.find(x=> x.id === 6).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 6).lvl)} стажа
📎 7. ${jobs.find(x=> x.id === 7).name} | ${spaces(jobs.find(x=> x.id === 7).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 7).lvl)} стажа
📎 8. ${jobs.find(x=> x.id === 8).name} | ${spaces(jobs.find(x=> x.id === 8).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 8).lvl)} стажа
📎 9. ${jobs.find(x=> x.id === 9).name} | ${spaces(jobs.find(x=> x.id === 9).count)}$/20 мин | ${spaces(jobs.find(x=> x.id === 9).lvl)} стажа

Для получения зарплаты и +1 стажа ежечасно прописывайте: 'Работать'

Чтобы устроиться введите: "Работы [номер]"
Для увольния введите: "Уволиться"
Трудовая книжка: 'Книжка'
			`);
		}
		let i = message.$match[1];
		let job = jobs.find(x=> x.id === Number(message.$match[1]))
		if(i <= 0 || i > 10) return;
		if(user.job.id != 0) return message.send(`👨‍ ➾ У вас уже есть работа!`);
		if(i > 0 && i <= 10){
			if(job.lvl > user.job.lvl) return message.send(`👨‍ ➾ У вас не достаточный стаж.`);
			user.job.id = job.id
			log[user.number].push(`Устроился на работу. Название: ${job.name} Зарплата: ${spaces(job.count)} Время: ${time()}|${data()} Стаж: ${spaces(user.job.lvl)}`);
			message.send(`👨‍⚖️ ➾ Вы устроились на работу "${job.name}"! Зарплата: ${spaces(job.count)}$`)
		}
	};
	return user.save()
});

///Уволиться///
vk.updates.hear(/^(?:уволиться|уволится)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let job = jobs.find(x=> x.id === user.job.id)
	let ioi = job.name
 	if(job.id == 0) return message.send(`👨‍⚖️ ➾ У вас нет работы.`);
 	user.job.id = 0;
	log[user.number].push(`Уволился с работы. Время: ${time()}|${data()} Стаж: ${spaces(user.job.lvl)}`);
 	message.send(`👨‍⚖️ ➾ Вы успешно уволились c работы "${ioi}"!`);
 	return user.save()
});

///Книжка///
vk.updates.hear(/^(?:книжка)/i, async message => {
	msg();
	let user = await userq;
	await user.save();
 	let text = '';
	let count = '';
	let job = jobs.find(x=> x.id === user.job.id)
 	message.send(`
📝 Трудовая книжка 📝
📋 Стаж работы: ${spaces(user.job.lvl)}
📋 Работа: ${job.name}
📋 Зарплата: ${spaces(job.count)}$
 	`);
 	return user.save()
});


///Работать///
vk.updates.hear(/(?:работать)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
 	let text = '';
	let job = jobs.find(x=> x.id === user.job.id)
	if(user.job.id == 0) return message.send(`👨‍🏭➾ У вас нет работы!`);
	if(user.block.job > getUnix()) return message.send(`👨‍⚖️ >> Вы сможете поработать через ${unixStampLeft(user.block.job - Date.now())} Отдохните!`);
	user.block.job = getUnix() + 1200000;
	setTimeout(() => {
		log[user.number].push(`Снят откат по работе. Время: ${time()}|${data()}`);
		vk.api.call('messages.send', {
			peer_id: user.id,
			random_id: 0,
			message: `🤘🏻 Вы отдохнули! Можете поработать снова!`
		});
	}, 1200000);
	let bonus = 0;
	if(event == 3){
		bonus = job.count * proc;
	} else {
		bonus = job.count;
	}
	user.balance += bonus;
 	if(user.level == 0){
		user.job.lvl += 1;
		log[user.number].push(`Поработал. Название: ${job.name} Зарплата: ${spaces(bonus)}`+(event != 3 ? `` : ` (x${proc})`)+` Стаж: +1 Время: ${time()}|${data()} Стаж: ${spaces(user.job.lvl)}`);
		message.send(`
 📝 ➾ Вы отработали. +1 к стажу | +${spaces(bonus)}$`+(event != 3 ? `` : ` (x${proc})`)+`!
		`);
	}else{
		user.job.lvl += 2;
		log[user.number].push(`Поработал. Название: ${job.name} Зарплата: ${spaces(bonus)}`+(event != 3 ? `` : ` (x${proc})`)+` Стаж: +2 Время: ${time()}|${data()} Стаж: ${spaces(user.job.lvl)}`);
		message.send(`
 📝 ➾ Вы отработали. +2 к стажу | +${spaces(bonus)}$`+(event != 3 ? `` : ` (x${proc})`)+`!
		`);
	}
	return user.save()
});

///Анекдот///
vk.updates.hear(/^(?:анекдот)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
  	if(message.isChat) return message.send(`⚠️Эта команда работает только в личных сообщениях с ботом!`);
    let anek = await require("./consts/functions/aneory/getAnek.js")();
    return message.send(`😎Вот твой анекдот:\n${filter_as(anek)}\n😝 Хочешь еще? Пиши команду "Анекдот" ещё раз!`);
});

///История///
vk.updates.hear(/^(?:история)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
  	if(message.isChat) return message.send(`⚠️Эта команда работает только в личных сообщениях с ботом!`);
    let story = await require("./consts/functions/aneory/getStory.js")();
    return message.send(`😎Вот твоя история:\n${filter_as(story)}\n😝 Понравилось? Напиши команду "История" ещё раз!`);
});

///Гиф///
vk.updates.hear(/^(?:гиф|gif)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.level < 7){
  		if(message.isChat) return message.send(`⚠️Эта команда работает только в личных сообщениях с ботом!`);
  	}
	log[user.number].push(`Искал гиф анимацию. Запрос: ${message.$match[1]} Время: ${time()}|${data()}`);
	let zaprets1 = message.$match[1].toLowerCase();
	if(zaprets.zapr.find(x=> x === zaprets1)){
		return message.send(`Найдено запрещенное слово!`);
	};
	let filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	let filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	let lol = filter0.test(zaprets1)
	let lol1 = filter1.test(zaprets1)
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) {
		return message.send(`Найдено запрещенное слово!`);
	};
	vk.api.call('docs.search', {q: message.$match[1] + '.gif', random_id: 0, count: 4})
        .then(response => {
            let items = response.items.map(x => `doc${x.owner_id}_${x.id}`).join(',');
			return message.send(`${userp}, вот гиф анимации по запросу: ${message.$match[1]}!`, {attachment: items} );
    });
});

///Общий сбор///
vk.updates.hear(/^(?:общий|общий сбор)$/i, async (message) => {
	if(!message.isChat) return message.send(`⚠️Эта команда работает только в беседах!`);
   	vk.api.call('messages.getConversationMembers', { peer_id: message.chat + 2000000000 }).then(async function (res) {
   		let text = `Общий сбор! `;
		for(i in res.profiles){
			let itog = res.profiles[i].id;
			if(itog < 0) return
			if(itog != undefined){
				text += `[id${itog}|ᅠ] `;
			}
		}
   		return message.send(text)
   	})
});

///Сборочные улучшить///
vk.updates.hear(/^(?:сборочные улучшить|сборочные ул)$/i, async message => {
	msg();
	let user = await userq;
	if(user.fabric.max >= 1000) return message.send(`🛠 ➾ Ваш лимит превышен!`);
	let price = [0, 30000000000, 50000000000, 75000000000, 100000000000, 125000000000, 150000000000, 175000000000, 200000000000, 225000000000, 250000000000, 275000000000, 300000000000, 325000000000, 350000000000, 375000000000, 400000000000, 425000000000, 450000000000, 500000000000]
	let spot = user.fabric.max / 50;
	let cen = price[Math.floor(spot)];
	if(!cen) return
	if(user.balance >= cen){
		user.balance -= cen;
		user.fabric.max += 50;
		await message.send(`🛠 ➾ Вы купили 50 мест для сборочных! Теперь вы можете купить до `+(user.level == 0 ? `${spaces(user.fabric.max)}` : `${spaces(user.fabric.max + 100)}`)+` сборочных!`)
	} else {
		await message.send(`🛠 ➾ Вам не хватает ${spaces(cen - user.balance)}$!`)
	}
	return user.save()
});

///Cборочные///
vk.updates.hear(/^(?:сборочные)\s?([0-9]+)?\s?([0-9]+)?/i, async message => {
	msg();
	let user = await userq;
	await user.save();
	let sb = fabric.find(x=> x.id === Number(message.$match[1]))
 	let i = message.$match[1];
 	let y = message.$match[2];
 	if(!message.$match[2]){
 		return message.send(`
1⃣. ${fabric.find(x=> x.id === 1).name} | ${fabric.find(x=> x.id === 1).zp} робот/час (${spaces(fabric.find(x=> x.id === 1).count)}$)
2⃣. ${fabric.find(x=> x.id === 2).name} | ${fabric.find(x=> x.id === 2).zp} робот/час (${spaces(fabric.find(x=> x.id === 2).count)}$)
3⃣. ${fabric.find(x=> x.id === 3).name} | ${fabric.find(x=> x.id === 3).zp} робот/час (${spaces(fabric.find(x=> x.id === 3).count)}$)
4⃣. ${fabric.find(x=> x.id === 4).name} | ${fabric.find(x=> x.id === 4).zp} робот/час (${spaces(fabric.find(x=> x.id === 4).count)}$)

🛠 ➾ Для покупки напишите: Сборочные [номер] [количество]
🛠 ➾ Для получения прибыли напишите: Сборочная
🛠 ➾ Для продажи сборочной напиши: Продать сборочные [количество] (60%)
		`);
 	}
 	if(i < 0 || i > 4) return message.send(`🛠 ➾ Неверный номер сборочной!`)
 	if(!Number(message.$match[1])) return message.send(`🛠 ➾ Укажите номер сборочной!`)
 	if(!Number(message.$match[2])) return message.send(`🛠 ➾ Укажите количество сборочных!`)
	if(user.fabric.id != 0 && user.fabric.id != message.$match[1]) return message.send(`Вы не можете купить сборочную данного типа! Для того чтобы купить сборочную этого типа продайте старую!`)
	if(user.level == 0){
		if(Number(message.$match[2]) + user.fabric.sum > user.fabric.max) return message.send(`🛠 ➾ Вы не можете иметь больше ${spaces(user.fabric.max)} сборочных одновременно!`+(user.fabric.max < 1000 ? `\n🛠 ➾ Ты можешь купить больше места для сборочных командой "Сборочные улучшить"` : ``)+``);
	} else {
		if(Number(message.$match[2]) + user.fabric.sum > user.fabric.max + 100) return message.send(`🛠 ➾ Вы не можете иметь больше ${spaces(user.fabric.max + 100)} сборочных одновременно!`+(user.fabric.max < 1100 ? `\n🛠 ➾ Ты можешь купить больше места для сборочных командой "Сборочные улучшить"` : ``)+``);
	}
 	if(user.fabric.id == 0 || user.fabric.id == message.$match[1]){
 		if(user.balance < sb.count * y) return message.send(`🛠 ➾ Вам не хватает ${spaces((sb.count * y) - user.balance)}$!`);
		await user.dec("balance", sb.count * y);
		user.fabric.id = sb.id;
		user.fabric.sum += Number(y);
		log[user.number].push(`Купил ${spaces(message.$match[2])} сборочных за ${spaces(sb.count * y)}$ ID: ${message.$match[1]} Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Сборочных: ${spaces(user.fabric.sum)}`);
		message.send(`🛠 ➾ Вы купили "${sb.name}" (${spaces(y)} шт.) за ${spaces(sb.count * y)}$!`)
	}
	return user.save()
});

///Сборочная///
vk.updates.hear(/^(?:сборочная|сбор)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();		
	if(user.fabric.id == 0) return message.send(`🛠 ➾ У вас нет сборочных!`)
	if(user.fabric.zarp > 0){
		let sum = user.fabric.zarp;
		await user.inc("rob", Math.floor(sum));
		user.fabric.zarp = 0;
		log[user.number].push(`Собрал со сборочных ${spaces(sum)} роботов Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Роботов: ${spaces(user.rob)}`);
		message.send(`🛠 ➾ Вы получили со сборочных: ${spaces(sum)} роботов!`, { keyboard: JSON.stringify(robpr) });
	} else {
		message.send(`🛠 ➾ Ваши сборочные пока не собрали новых роботов!\n🛠 ➾ Следующая партия через ${unixStampLeft(sbor)}`)
	}
	return user.save()
});

///Купить роботов///
vk.updates.hear(/^(?:купить роботов|купить роб)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	message.$match[1] = message.$match[1].replace(/(\.|\,)/ig, '');
	message.$match[1] = message.$match[1].replace(/(к|k)/ig, '000');
	if(!Number(message.$match[1])) return message.send(`🤖 ➾ Количество должно быть числом!`);
	message.$match[1] = Math.floor(Number(message.$match[1]));
	if(message.$match[1] <= 0) return;
	if(( message.$match[1] * config.rob ) > user.balance) return message.send(`🤖 ➾ Недостаточно денег! Курс покупки роботов: ${config.rob}$`);
	if(( message.$match[1] * config.rob ) <= user.balance){
		await user.dec("balance", message.$match[1] * config.rob);
		await user.inc("rob", Math.floor(message.$match[1]));
		log[user.number].push(`Купил ${spaces(message.$match[1])} ${rob(message.$match[1])} за ${spaces(config.rob * message.$match[1])}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$ Роботов: ${spaces(user.rob)}`);
		message.send(`🤖 ➾ Вы купили ${spaces(message.$match[1])} ${rob(message.$match[1])} за ${spaces(message.$match[1] * config.rob)}$!`);
	}
	return user.save()
});
	
///Копать///
vk.updates.hear(/^(?:копать криптонит|копать к|копать kryptonite|копать k)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.mine.eng > 0){
		if(user.mine.lvl >= 0){
			let bonus = rand(400,600);
			let count = 0;
			if(event == 2){
				count = bonus * 2;
			} else {
				count = bonus;
			}
			user.mine.krypt += count;
			user.mine.eng -= 1;
			user.mine.lvl += 1;
			log[user.number].push(`Выкопал ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` криптонита. Время: ${time()}|${data()} Криптонита: ${spaces(user.mine.krypt)} Энергии: ${spaces(user.mine.eng)} Опыта: ${user.mine.lvl}`);
			if(user.mine.eng == 0){
				message.send(`Вы добыли ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` криптонита! У вас не осталось энергии! Следующая энергия появится через 5 минут!🔋\nЧтобы продать криптонит напиши: "Продать криптонит"`, { keyboard: JSON.stringify(kryp) })
			} else {
				message.send(`Вы добыли ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` криптонита! У вас осталось ${user.mine.eng} энергии!🔋`)
			}
		};
	} else {
			message.send(`🔋У вас нету энергии! Энергия появится через 5 минут!🔋`)
	};
	return user.save()
});

vk.updates.hear(/^(?:копать адаманит|копать адаманитиум|копать а|копать adamantium|копать a)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.mine.eng > 0){
		if(user.mine.lvl >= 300){
			let bonus = rand(100,200);
			let count = 0;
			if(event == 2){
				count = bonus * 2;
			} else {
				count = bonus;
			}
			user.mine.adam += count;
			user.mine.eng -= 1;
			user.mine.lvl += 1
			log[user.number].push(`Выкопал ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` адаманита. Время: ${time()}|${data()} Адаманита: ${spaces(user.mine.adam)} Энергии: ${spaces(user.mine.eng)} Опыта: ${user.mine.lvl}`);
			if(user.mine.eng == 0){
				message.send(`Вы добыли ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` адаманитиума! У вас не осталось энергии! Следующая энергия появится через 5 минут!🔋\nЧтобы продать адаманитиум напиши: "Продать адаманитиум"`,{ keyboard: JSON.stringify(adam) })
			} else {
				message.send(`Вы добыли ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` адаманитиума! У вас осталось ${user.mine.eng} энергии!🔋`)
			}
		} else {
			message.send(`Для добычи адаманитиума нужно 300 опыта!`)
		};
	} else {
		message.send(`🔋У вас нету энергии! Энергия появится через 5 минут!🔋`)
	};
	return user.save()
});

vk.updates.hear(/^(?:копать вибраниум|копать в|копать vibranium|копать v)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.mine.eng > 0){
		if(user.mine.lvl >= 800){
			let bonus = rand(10,80);
			let count = 0;
			if(event == 2){
				count = bonus * 2;
			} else {
				count = bonus;
			}
			user.mine.vibr += count;
			user.mine.eng -= 1;
			user.mine.lvl += 1
			log[user.number].push(`Выкопал ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` вибраниума. Время: ${time()}|${data()} Вибраниума: ${spaces(user.mine.vibr)} Энергии: ${spaces(user.mine.eng)} Опыта: ${user.mine.lvl}`);
			if(user.mine.eng == 0){
				message.send(`Вы добыли ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` вибраниума! У вас не осталось энергии! Следующая энергия появится через 5 минут!🔋\nЧтобы продать вибраниум напиши: "Продать вибраниум"`,{ keyboard: JSON.stringify(vibr) })
			} else {
				message.send(`Вы добыли ${spaces(count)}`+(event != 2 ? `` : ` (x2)`)+` вибраниум! У вас осталось ${user.mine.eng} энергии!🔋`)
			}
		} else {
			message.send(`Для добычи вибраниума нужно 800 опыта!`)
			};
	} else {
		message.send(`🔋У вас нету энергии! Новая энергия появится через 5 минут!🔋`)
	};
	return user.save()
});

///Погода///
vk.updates.hear(/^(?:погода|weather)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
    let args = message.text.match(/^(?:погода|weather)\s?(.*)/i);
    if(args[1].toLowerCase() == "") return message.send(nope)
    rq("http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(args[1]) + "&appid=fe198ba65970ed3877578f728f33e0f9&units=metric").then((res) => {
	let sunsmin = require("./consts/functions/weather/sunsmin.js");
	let TempTo = require("./consts/functions/weather/TempTo.js");
	let sunmin = require("./consts/functions/weather/sunmin.js");
	let Timer = require("./consts/functions/weather/Timer.js");
	let Utils = require("./consts/functions/weather/Utils.js");
	let Main = require("./consts/functions/weather/Main.js");
	let Icon = require("./consts/functions/weather/Icon.js");
	let main = Main(res.weather[0].description);
	let now = new Date(res.dt*1000).getHours();
	let icon = Icon(res.weather[0].icon);
	let temp = TempTo(res.main.temp);
    let sunmins = sunmin(res.sys.sunrise, res.sys.sunset);
    let sunsmins = sunsmin(res.sys.sunset);
    let sunrise = new Date(res.sys.sunrise*1000);
    let sunset = new Date(res.sys.sunset*1000);
	log[user.number].push(`Посмотрел погоду. Город: ${res.name} Время: ${time()}|${data()}`);
    return message.send(`
${Timer(now)} ${res.name}, ${Utils.filter(res.sys.country)} (ID: ${res.id})
🌀 Сейчас там ${temp}: ${res.main.temp}°С, ${main}
🌇 Рассвет: ${sunrise.getHours()}:${sunmins}
🌆 Закат: ${sunset.getHours()}:${sunsmins}
💨 Скорость ветра: ${res.wind.speed} м/с
🌫 Облачность: ${res.clouds.all}%
💧 Влажность: ${res.main.humidity}%
	`, {attachment: icon} ); 
})
});

///Камни///
vk.updates.hear(/^(?:камни)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.glove.activ == true) return message.send(`У вас уже есть перчатка бесконечности!`)
	return message.send(`
У вас есть:
`+(user.glove.glove == 1 ? `Перчатка✊🏻\n` : ``)+
(user.glove.souls == 1 ? `Камень души👻\n` : ``)+
(user.glove.str == 1 ? `Камень силы💪🏻\n` : ``)+
(user.glove.mind == 1 ? `Камень разума🙋‍♂\n` : ``)+
(user.glove.time == 1 ? `Камень времени⌛\n` : ``)+
(user.glove.real == 1 ? `Камень реальности🌀\n` : ``)+
(user.glove.space == 1 ? `Камень пространства🌗\n` : ``)+`Вам не хватает:
`+(user.glove.glove == 0 || !user.glove.glove ? `Перчатка✊🏻\n` : ``)+
(user.glove.souls == 0 || !user.glove.souls ? `Камень души👻\n` : ``)+
(user.glove.str == 0 || !user.glove.str ? `Камень силы💪🏻\n` : ``)+
(user.glove.mind == 0 || !user.glove.mind ? `Камень разума🙋‍♂\n` : ``)+
(user.glove.time == 0 || !user.glove.time ? `Камень времени⌛\n` : ``)+
(user.glove.real == 0 || !user.glove.real ? `Камень реальности🌀\n` : ``)+
(user.glove.space == 0 || !user.glove.space ? `Камень пространства🌗\n` : ``)+`
	`);
});

///Собрать перчатку///
vk.updates.hear(/^(?:собрать перчатку)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.glove.glove == 0 || !user.glove.glove) return message.send(`Вам не хватает артефакта "перчатка"!`);
	if(user.glove.souls == 0 || !user.glove.souls) return message.send(`Вам не хватает артефакта "камень души"!`);
	if(user.glove.str == 0 || !user.glove.str) return message.send(`Вам не хватает артефакта "камень силы"!`);
	if(user.glove.time == 0 || !user.glove.time) return message.send(`Вам не хватает артефакта "камень времени"!`);
	if(user.glove.space == 0 || !user.glove.space) return message.send(`Вам не хватает артефакта "камень пространства"!`);
	if(user.glove.real == 0 || !user.glove.real) return message.send(`Вам не хватает артефакта "камень реальности"!`);
	if(user.glove.mind == 0 || !user.glove.mind) return message.send(`Вам не хватает артефакта "камень разума"!`);
	if(user.glove.activate == true) return message.send(`У вас уже собранна перчатка бесконечности!`);
	user.glove.glove = 0;
	user.glove.souls = 0;
	user.glove.str = 0;
	user.glove.time = 0;
	user.glove.space = 0;
	user.glove.real = 0;
	user.glove.mind = 0;
	user.glove.activ = true;
	log[user.number].push(`Собрал перчатку. Время: ${time()}|${data()}`);
	message.send(`Поздравляем!!!💥 Вы собрали редчайший артифакт "Перчатку бесконечности"!!! Теперь вы можете использовать команду "щелчок"!`)
	return user.save()
});

///Передача камней///
vk.updates.hear(/^(?:передать перчатку|передать перчатка)\s?([0-9]+)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.glove.activ == true) return message.send(`У вас уже собрана перчатка бесконечности!`)
	if(userz.glove.activ == true) return message.send(`У игрока уже собрана перчатка бесконечности!`)
	if(userz.glove.glove == 1) return message.send(`У игрока уже есть артефакт "перчатка"!`);
	if(user.glove.glove == 0 || !user.glove.glove) return message.send(`У вас нету артефакта "перчатка"!`);
	user.glove.glove = 0;
	userz.glove.glove = 1;
	log[user.number].push(`Передал перчатку игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил перчатку от игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	message.send(`Вы передали артефакт "перчатка" игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

vk.updates.hear(/^(?:передать камень души|передать души)\s?([0-9]+)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.glove.activ == true) return message.send(`У вас уже собрана перчатка бесконечности!`)
	if(userz.glove.activ == true) return message.send(`У игрока уже собрана перчатка бесконечности!`)
	if(userz.glove.souls == 1) return message.send(`У игрока уже есть артефакт "камень души"!`);
	if(user.glove.souls == 0 || !user.glove.souls) return message.send(`У вас нету артефакта "камень души"!`);
	user.glove.souls = 0;
	userz.glove.souls = 1;
	log[user.number].push(`Передал камень души игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил камень души от игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	message.send(`Вы передали артефакт "камень души" игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

vk.updates.hear(/^(?:передать камень силы|передать силы)\s?([0-9]+)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.glove.activ == true) return message.send(`У вас уже собрана перчатка бесконечности!`)
	if(userz.glove.activ == true) return message.send(`У игрока уже собрана перчатка бесконечности!`)
	if(userz.glove.str == 1) return message.send(`У игрока уже есть артефакт "камень силы"!`);
	if(user.glove.str == 0 || !user.glove.str) return message.send(`У вас нету артефакта "камень силы"!`);
	user.glove.str = 0;
	iuserzd.glove.str = 1;
	log[user.number].push(`Передал камень силы игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил камень силы от игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	message.send(`Вы передали артефакт "камень силы" игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

vk.updates.hear(/^(?:передать камень времени|передать времени)\s?([0-9]+)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.glove.activ == true) return message.send(`У вас уже собрана перчатка бесконечности!`)
	if(userz.glove.activ == true) return message.send(`У игрока уже собрана перчатка бесконечности!`)
	if(userz.glove.time == 1) return message.send(`У игрока уже есть артефакт "камень времени"!`);
	if(user.glove.time == 0 || !user.glove.time) return message.send(`У вас нету артефакта "камень времени"!`);
	user.glove.time = 0;
	userz.glove.time = 1;
	log[user.number].push(`Передал камень времени игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил камень времени от игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	message.send(`Вы передали артефакт "камень времени" игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

vk.updates.hear(/^(?:передать камень пространства|передать пространства)\s?([0-9]+)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.glove.activ == true) return message.send(`У вас уже собрана перчатка бесконечности!`)
	if(userz.glove.activ == true) return message.send(`У игрока уже собрана перчатка бесконечности!`)
	if(userz.glove.space == 1) return message.send(`У игрока уже есть артефакт "камень пространства"!`);
	if(user.glove.space == 0 || !user.glove.space) return message.send(`У вас нету артефакта "камень пространства"!`);
	user.glove.space = 0;
	userz.glove.space = 1;
	log[user.number].push(`Передал камень пространства игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил камень пространства от игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	message.send(`Вы передали артефакт "камень пространства" игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

vk.updates.hear(/^(?:передать камень реальности|передать реальности)\s?([0-9]+)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.glove.activ == true) return message.send(`У вас уже собрана перчатка бесконечности!`)
	if(userz.glove.activ == true) return message.send(`У игрока уже собрана перчатка бесконечности!`)
	if(userz.glove.real == 1) return message.send(`У игрока уже есть артефакт "камень реальности"!`);
	if(user.glove.real == 0 || !user.glove.real) return message.send(`У вас нету артефакта "камень реальности"!`);
	user.glove.real = 0;
	userz.glove.real = 1;
	log[user.number].push(`Передал камень реальности игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил камень реальности от игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	message.send(`Вы передали артефакт "камень реальности" игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

vk.updates.hear(/^(?:передать камень разума|передать разума)\s?([0-9]+)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.glove.activ == true) return message.send(`У вас уже собрана перчатка бесконечности!`)
	if(userz.glove.activ == true) return message.send(`У игрока уже собрана перчатка бесконечности!`)
	if(userz.glove.mind == 1) return message.send(`У игрока уже есть артефакт "камень разума"!`);
	if(user.glove.mind == 0 || !user.glove.mind) return message.send(`У вас нету артефакта "камень разума"!`);
	user.glove.mind = 0;
	userz.glove.mind = 1;
	log[user.number].push(`Передал камень разума игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил разума разума от игрока ${user.number}. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	return message.send(`Вы передали артефакт "камень разума" игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

///Щелчок///
vk.updates.hear(/(?:щелчок|щёлчок|щелчек|щёлчек)\s?([1-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(user.glove.activ == false) return message.send(`У вас нет перчатки бесконечности!`)
	if(!message.$match[1]){
		if(user.block.glove > getUnix()) return message.send(`Ещё один щелчок можно будет сделать через ${unixStampLeft(user.block.glove - Date.now())}`);
		let bonus = 2500000000;
		user.balance += bonus;
		user.block.glove = getUnix() + 21600000;
		setTimeout(() => {
			log[user.number].push(`Снят откат по щелчку. Время: ${time()}|${data()}`);
		}, 21600000);
		log[user.number].push(`Сделал щелчок и выдал себе ${spaces(bonus)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		message.send(`Вы сделали щелчек и выдали себе ${spaces(bonus)}$!`)
	} else {
		let bonus = 5000;
		userz.balance += bonus;
		log[user.number].push(`Сделал щелчок и выдал игроку ${message.$match[1]} ${spaces(bonus)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		log[userz.number].push(`Игрок ${user.number} сделал щелчок и выдал ${spaces(bonus)}$. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
		message.send(`Вы сделали щелчек и выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(bonus)}$!`)
		await userz.save()
	}
	return user.save()
});

///Vig///
vk.updates.hear(/^(?:vig)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: vig [ID] `);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	if(userz.level > 9) return message.send(`Ошибка!`);
	await userz.inc("vig", Math.floor(1));
	log[user.number].push(`Выдал предреждение игроку: ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил предреждение от игрока: ${user.number}.Время: ${time()}|${data()}`);
	let text = ``;
	if(userz.vig >= 3){
		await userz.set("vig", 0);
		await userz.set("level", 0);
		log[userz.number].push(`Игрок получил 3 выговора и был снят с должности. Время: ${time()}|${data()}`);
		text += `✅ ➾ ${userp} выдал вам админ-выговор.\n✅ ➾ У вас 3 админ выговора.\n✅ ➾ Вы сняты!`
	} else {
		text += `✅ ➾ ${userp} выдал вам админ-выговор.\n✅ ➾ После 3 админ-выговор вы будете сняты!\n❗ ➾ Выговоров: ${userz.vig} из 3!`
	}
	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: text
	}); 

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] выдал админ-выговор игроку @id${userz.id}(${userz.prefix}) [ID: ${message.$match[1]}]!\n❗ ➾ Выговоров: ${userz.vig} из 3!`
		}); 
	}

	message.send(`✅ ➾ Вы выдали выговор игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!\n❗ ➾ Выговоров: ${userz.vig} из 3!`);
	await user.save()
	return userz.save()
}); 

///UnVig///
vk.updates.hear(/^(?:unvig)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	let adm = adms.find(x=> x.lvl === user.level);
	if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: unwarn ID`);
	if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
	if(user.level < 7) return message.send(`Вы не Гл.Администратор!`);
	if(!userz) return message.send(`❎ ➾ Такого игрока нет!`);
	await userz.set("vig", 0);
	log[user.number].push(`Снял все выговоры с игрока ${message.$match[1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Сняты все выговоры игроком: ${user.number}. Время: ${time()}|${data()}`);
	
	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `✅ ➾ ${userp} [${adm.name}] снял Вам все выговоры`
	});

	if(message.user != owner){
		vk.api.call('messages.send', {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `@id${user.id}(${user.prefix}) [${adm.name}, ID: ${user.number}] снял все админ-выговоры Администратору @id${userz.id}(${userz.prefix}) [ID: ${userz.number}]!`
		}); 
	}

	message.send(`✅ ➾ Вы сняли все выговоры игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`);
	await user.save()
	return userz.save()
});

///Онлайн///
vk.updates.hear(/^онлайн/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(!message.isChat) return message.send(`Команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "online"
    }).then(async function (response) {
        let text = `👾 Список людей, которые сейчас находятся онлайн:\n`;
        await response.profiles.map(e => {
            if(e.id < 1) return;
            if(e.online != 0) text += `${[ '😎', '🙂', '🙃', '😌',  '😇', '😳', '😂', '😝', '🙄', '😝' , '😛'].random()} || *id${e.id} (${e.first_name} ${e.last_name})\n`;
			})
        return message.send(text)
    });
});

///Сократить///
vk.updates.hear(/^(?:сократить)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let text = message.$match[1];
	log[user.number].push(`Сократил ссылку. Ссылка: ${message.$match[1]}. Время: ${time()}|${data()}`);
	if(!text) return message.send("⚠ Введите ссылку, которую нужно сократить!");
	let url = ``;
	try { ( url = await vk.api.call("utils.getShortLink", {url: text})) () } catch(e) {};
	vk.api.call("utils.checkLink", {url: text}).then(async function (res){ 
		let per = ``;
		if(res.status == "not_banned"){
			per = `✅ ➾ Ссылка не заблокирована!`
		} else if(res.status == "banned"){
			return message.send(`⛔ ➾ Ссылка заблокирована!`);
		} else {
			return message.send(`♻ ➾ Ссылка проверяется!`);
		}
		message.send(`😜 ➾ Короткая ссылка: ${url.short_url}\n${per}`);
  		let qr = qrcode.image(url.short_url, { type: 'png' });
  		qr.pipe(fs.createWriteStream('image/qr.png'));
  		return message.sendPhoto(qr);
	});
});

///!Кикнуть///
vk.updates.hear(/^(?:!кикнуть)\s?([0-9]+)?/i, async (message) => { 
	msg();
	let user = await userq;
	await user.save();
	let users = await vk.api.messages.getConversationMembers({peer_id: message.peerId});
	let usere = users.items.find((item) => item.member_id === message.senderId);
	config.command += 1;
	user.msg.command += 1;
	user.msg.last_msg = `${time()}|${data()}`;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(!message.isChat) return message.send(`⚠️Эта команда работает только в беседах!`);
	if(!message.$match[1]) return message.send(`Пример команды: !Кикнуть [игровой id]`);
	if(!usere.is_admin || message.user != owner){
		return message.send(`Вы не администратор беседы!`);
	}
	if(!userz) return message.send(`Не верно указаны данные | Игрока нет`);  
	vk.api.call("messages.removeChatUser", { chat_id: message.chatId, peer_id: userz.id });
	return message.send(`[id${userz.id}|Пользователь] успешно исключен из беседы!`);
});

///!kickadm///
vk.updates.hear(/^(?:!kickadm)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(message.$match[1]){
		if(message.user == owner){  
			vk.api.call("messages.removeChatUser",{ 
				chat_id: message.chatId, 
				user_id: message.$match[1] 
			});
			return message.send(`Ярослав, пользователь успешно исключен из беседы!`);
		}
    }
});

///!Добавить///
vk.updates.hear(/^(?:!добавить|!пригласить)\s?([0-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let users = await vk.api.messages.getConversationMembers({peer_id: message.peerId});
	let usere = users.items.find((item) => item.member_id === message.senderId);
	config.command += 1;
	user.msg.command += 1;
	user.msg.last_msg = `${time()}|${data()}`;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	if(!usere.is_admin || message.user != owner){
		return message.send(`Вы не администратор беседы!`);
	}
	if(!message.$match[1]) return message.send(`Пример команды: !Добавить [игровой id]`);
	if(!userz) return message.send(`Не верно указаны данные | Игрока нет`);  
	vk.api.call("messages.addChatUser", { chat_id: message.chatId, user_id: userz.id });
	return message.send(`Вы успешно добавили [id${userz.id}|пользователя] в эту беседу!`);
});

///Правила///
vk.updates.hear(/^(?:правила)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	return message.send(`Правила бота можно посмотреть в данной статье: vk.com/@bot_rikl-rules !🙂`);
});

///Лотерея///
vk.updates.hear(/^(?:лотерея|лотерия|лотырея|лотырия|латерея|латерия|латырея|латырия)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: lottery.win[lottery.win_people].id });
	for(u in lottery.players)
	if(lottery.players[u].id == user.number) return message.send(`🔔Вы уже учавствуете в лотереи!\n 💰Текущая сумма розыгрыша: ${spaces(lottery.balance)}$!`)
	let count = rand(100000000,200000000)
	lottery.balance += count;
	lottery.people += 1;
	lottery.players[lottery.people] = {
		id: user.number
	};
	fs.writeFileSync("./base/lottery.json", JSON.stringify(lottery, null, "\t"))
	log[user.number].push(`Поучаствовал в лотереи. Сумма прибавки к фонду: ${spaces(count)}$ Время: ${time()}|${data()}`);
	message.send(`
📢Вы успешно приняли участие в лотереи! 
💰Сумма розыгрыша: ${spaces(lottery.balance)}$!
🌜Прошлый победитель: ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)}!
🔥Выигрыш: ${spaces(lottery.win[lottery.win_people].count)}$!
🔔Напоминаем то, что если вы не разу не писали боту в личные сообщения вы не сможете узнать о выигрыше!
	`)
	return user.save()
});

///Стаканчик///
vk.updates.hear(/^(?:стаканчик|стак)\s([1-4])\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	message.$match[2] = message.$match[2].replace(/(\.|\,)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|всё)/ig, user.balance);
	message.$match[2] = Math.floor(Number(message.$match[2]));

	if(!Number(message.$match[2]) || !message.$match[1]) return message.send(`Пример команды: стаканчик [1-4] [ставка]`);
	if(message.$match[2] > user.balance) return message.send(`🗑У вас нет данной суммы!`);
	if(message.$match[2] < 1000 || message.$match[2] > 10000000000) return message.send(`🗑Ставка не может быть ниже 1.000$ и больше 10.000.000.000$!`);
	let multiply = utils.pick([0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65]);
	let cup = rand(1,4);
    let bon = message.$match[2] * multiply;
	let bonus = 0;
	if(event == 1){
		bonus = Math.floor(bon * (1 + (proc / 100)));
	} else {
		bonus = Math.floor(bon);
	}

	if(message.$match[2] <= user.balance){
		if(cup == message.$match[1]){
			user.balance += bonus;
			log[user.number].push(`Выиграл в стаканчике. Выигрыш: ${spaces(message.$match[2] * multiply)}$ Ставка: ${spaces(message.$match[1])}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}`);
			if(user.quest.lvl == 4){
				user.quest.per += 1
				if(user.quest.per == 3){
					await user.inc("balance", Math.floor(7500000000));
					await user.inc("don", Math.floor(2));
					user.quest.lvl = 5;
					user.quest.per = 0;
					user.inv.case.two += 1;
					log[user.number].push(`Выполнил квест 4 уровня! Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`)
					message.send(`
🎉Поздравляем!
👒Вы выполнили квест 4 уровня!
🎮Ваша награда:
7.500.000.000$
2 рикла
${cases.find(x=> x.id === 2).name}
🎮Следующая цель:
Выиграть 2 раза в казино с множетелем x10 при ставке свыше 1.000.000.000$
					`)
					await user.save()
					return message.send(`🗑Вы угадали! Приз ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`!`);
			} else {
					await user.save()
					return message.send(`🗑Вы угадали! Приз ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`!\nВаш прогресс квеста: ${user.quest.per} из 3`);
				}
			};
			await user.save();
			return message.send(`🗑Вы угадали! Приз ${spaces(bonus)}$`+(event != 1 ? `` : ` (+${proc}%)`)+`!`);
		} else {
			log[user.number].push(`Проиграл в стаканчике. Ставка: ${spaces(message.$match[1])}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}`);
			if(user.quest.lvl == 4){
				if(user.quest.per > 0){
					user.quest.per = 0;
					await user.save();
					message.send(`Ваш прогресс квеста был аннулирован!`)
				}
			}
			user.balance -= message.$match[2];
			await user.save();
			return message.send(`🗑Вы не угадали, это был ${cup} стаканчик!\n💰Ваш баланс: ${spaces(user.balance)}$`);
		}
	}
});

///Браки///
vk.updates.hear(/^(?:браки)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let req = ``;
    if(user.marriage.part != 0) return message.send(`⚡ Bы уже состоите в браке!!`);
	for(let i = 0; i < user.marriage.req.length; i++){
		if(user.marriage.req.length > i){
			let userm = await User.findOne({ number: user.marriage.req[i] });
			req += `\n💃 От игрока @id${userm.id}(${userm.prefix}) [ID: ${userm.number}]`;
		}
	}
    return message.send(`💍 Предложения:${user.marriage.req == [] ? `\nНету` : req}
⚡ Чтобы жениться/выйти замуж напишите: Брак [id из списка] `);
});

///Брак///
vk.updates.hear(/^(?:брак)\s?(.*)?$/i,async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let userz = await User.findOne({ number: message.$match[1] });
	let usere = await User.findOne({ number: user.marriage.part });
    if(user.marriage.part){
        return message.send(`⚡ Вы уже в браке с игроком ${usere.prefix}!`);
    }
	
    if(userz.marriage.part != 0){
        return message.send(`⚡ Этот человек уже состоит в браке!`);
    }

    if(message.$match[1] == user.number){
        return message.send(`⚡ Вы не можете жениться/выйти замуж за себя!`)
    }
	
    if(userz.marriage.req == user.number){
        return message.send(`⚡ Вы уже делали предложение этому игроку!`);
    }
	
	let userm = `${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`

	if(user.marriage.req.find(x=> x == message.$match[1])){
        user.marriage.req = [];
        user.marriage.part = userz.number;

        userz.marriage.req = [];
        userz.marriage.part = user.number;
		
		vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `💍 Игрок ${userp} вышел за вас!`
		});
		log[user.number].push(`Вступил в брак с игроком ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		log[userz.number].push(`Игрок ${user.number} стал партнёром игрока игрока. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
		await user.save()
		await userz.save()
        return message.send(`💍 Вы вступили в брак с игроком ${userm}!`);
    }

	vk.api.call('messages.send', {
		peer_id: userz.id,
		random_id: 0,
		message: `💍 Игрок ${userp} сделал вам предложение!`
	});

	userz.marriage.req.push(user.number);
	log[user.number].push(`Сделал предложение игроку ${message.$match[1]}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Игрок ${user.number} сделал предложение. Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	await user.save()
	await userz.save()
    return message.send(`💍 Вы сделали предложение игроку ${userm}!`);
});

///Развестись///
vk.updates.hear(/^(разв|развестись|развод)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let usere = await User.findOne({ number: user.marriage.part });
	if(user.marriage.part == 0) return message.send(`💍 Вы не состоите в браке!`)
	if(user.marriage.part != 0){
		vk.api.call('messages.send', {
			peer_id: usere.id,
			random_id: 0,
			message: `💍 Игрок ${userp} развелся с вами!`
		});
		let partner = user.marriage.part
		let lol = usere.marriage.part
		log[user.number].push(`Развелся с игроком ${partner}. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		log[user.marriage.part].push(`Игрок ${lol} развелся. Время: ${time()}|${data()} Баланс: ${spaces(usere.balance)}$`);
		usere.marriage.part = 0
		user.marriage.part = 0
		message.send(`💍 Вы успешно развелись с игроком ${usere.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${usere.nick.toString().replace(/true/gi, `@id${usere.id}(${usere.prefix})`).replace(/false/gi, `${usere.prefix}`)} ${usere.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}!`)
		await user.save()
		return usere.save()
	}
});

///Ифакт///
vk.updates.hear(/^(?:ифакт|игрофакт|игро факт)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let a = gfact.random();
	log[user.number].push(`Посмотрел игрофакт. ID: ${a.id} Время: ${time()}|${data()}`);
	return message.send(`
🎮 Игра «${a.game}»
📝 Игровой Факт:
${a.fact}
	`)
});

///Квесты///
vk.updates.hear(/^(?:квест|квесты)/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.quest.lvl == 1){
		return message.send(`
📗 Квестовая книжка 📗
🎛Твой уровень квеста: 1
🎛Твоя задача: Выиграть 3 раза в кубик
🎛Твой прогресс: ${user.quest.per} из 3
		`)
	} else if(user.quest.lvl == 2){
		return message.send(`
📗 Квестовая книжка 📗
🎛Твой уровень квеста: 2
🎛Твоя задача: Отгадать сейф
🎛Твой прогресс: ${user.quest.per} из 1
		`)
	} else if(user.quest.lvl == 3){
		return message.send(`
📗 Квестовая книжка 📗
🎛Твой уровень квеста: 3
🎛Твоя задача: Выиграть 3 раза в кубик подряд
🎛Твой прогресс: ${user.quest.per} из 3
		`)
	} else if(user.quest.lvl == 4){
		return message.send(`
📗 Квестовая книжка 📗
🎛Твой уровень квеста: 4
🎛Твоя задача: Выиграть в стаканчике 3 раз подряд
🎛Твой прогресс: ${user.quest.per} из 3
		`)
	} else if(user.quest.lvl == 5){
		return message.send(`
📗 Квестовая книжка 📗
🎛Твой уровень квеста: 5
🎛Твоя задача: Выиграть 2 раза в казино с множетелем x10 при ставке свыше 1.000.000.000$
🎛Твой прогресс: ${user.quest.per} из 2
		`)
	} else {
		return message.send(`
📗 Квестовая книжка 📗
🎛Все квесты уже выполнены!		
		`)
	}
});

///Zapret///
vk.updates.hear(/^(?:zapret)\s([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.level < 5) return message.send(`Вы не Модератор!`);
	zaprets.zapr.push(message.$match[1]);
	fs.writeFileSync("./base/zapret.json", JSON.stringify(zaprets, null, "\t"))
	log[user.number].push(`Добавил новое слово в запрет: "${message.$match[1]}"`);
	return message.send(`Вы добавили в запрет новое слово!`)
});

///Передать///
vk.updates.hear(/^(?:передать|pay)\s?([0-9]+)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(!message.$match[1] || !message.$match[2]) return message.send(`👉 ➾ Пример команды: передать ID СУММА`);
	message.$match[2] = message.$match[2].replace(/(\.|\,|\$)/ig, '');
	message.$match[2] = message.$match[2].replace(/(к|k)/ig, '000');
	message.$match[2] = message.$match[2].replace(/(вабанк|вобанк|все|вб|всё)/ig, user.balance);
	let userz = await User.findOne({ number: message.$match[1] });
	if(message.$match[1] == user.number) return message.send(`Вы не можете передавать деньги самому себе! Это же беcсмысленно!=)`)
	if(!Number(message.$match[1]) || !Number(message.$match[2])) return message.send(`👉 ➾ ID и СУММА должны быть числового вида.`)
	if(!userz || message.$match[2] < 0) return message.send(`👉 ➾ Некорректно введены данные`)
	if(message.$match[2] > user.balance) return message.send(`У вас нет столько денег!`);
	if(user.limit == true){
		if(user.level == 0){
			if(user.pay_l >= 25000000000) return message.send(`💴 ➾ Вы превысили лимит 25.000.000.000$!\n🔔 ➾ У VIP/VIP+ - Лимит передачи увеличен.`);
			if(message.$match[2] > 25000000000-user.pay_l) return message.send(`💴 ➾ Максимальная сумма передачи 25.000.000.000$!\n🔔 ➾ У VIP/VIP+ - Лимит передачи увеличен.`);
			await user.inc("pay_l", Math.floor(message.$match[2]));
		}
		if(user.level == 1){
			if(user.pay_l >= 50000000000) return message.send(`💴 ➾ Вы превысили лимит 50.000.000.000$!\n 🔔➾ У VIP+ - Лимит передачи увеличен.`);
			if(message.$match[2] > 50000000000-user.pay_l) return message.send(`💴 ➾ Максимальная сумма передачи 50.000.000.000$!\n 🔔➾ У VIP+ - Лимит передачи увеличен.`);
			await user.inc("pay_l", Math.floor(message.$match[2]));
		}
		if(user.level == 2){
			if(user.pay_l >= 100000000000) return message.send(`💴 ➾ Вы превысили лимит 100.000.000.000$!`);
			if(message.$match[2] > 100000000000-user.pay_l) return message.send(`💴 ➾ Максимальная сумма передачи 100.000.000.000$!`);
			await user.inc("pay_l", Math.floor(message.$match[2]));
		}
		if(user.level == 3 || user.level == 4){
			if(user.pay_l >= 250000000000) return message.send(`💴 ➾ Вы превысили лимит 250.000.000.000$!`);
			if(message.$match[2] > 250000000000-user.pay_l) return message.send(`💴 ➾ Максимальная сумма передачи 250.000.000.000$!`);
			await user.inc("pay_l", Math.floor(message.$match[2]));
		}
	}
	userz.balance += Math.floor(message.$match[2]);
  	await userz.save()
	user.balance -= message.$match[2];
	await user.save()
	vk.api.call("messages.send", {
		peer_id: userz.id,
		random_id: 0,
		message: `Игрок ${userp} перевел вам ${spaces(message.$match[2])}$!`
	});
	if(message.user != owner){
		vk.api.call("messages.send", {
			peer_id: chat_w + 2000000000,
			random_id: 0,
			message: `Игрок @id${user.id}(${user.prefix}) [id: ${user.number}] перевел игроку @id${userz.id}(${userz.prefix}) [id: ${message.$match[1]}] ${spaces(message.$match[2])}$!`
		});
	}
	log[user.number].push(`Перевел валюту игроку ${message.$match[1]}. Сумма: ${spaces(message.$match[2])}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	log[userz.number].push(`Получил валюту от игрока ${user.number}. Сумма: ${spaces(message.$match[2])}$ Время: ${time()}|${data()} Баланс: ${spaces(userz.balance)}$`);
	message.send(`${userp}, вы передали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${spaces(message.$match[2])}$!`);
	user.save()
	return userz.save()
});

///Загадка///
vk.updates.hear(/(?:загадка)\s?([^]+)?/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	if(user.block.rid > getUnix()) return message.send(`⚕ ➾ Загадку можно будет отгадать снова через ${unixStampLeft(user.block.rid - Date.now())}`);
	if(!user.rid || user.rid == 0){
		let random = rand(1, riddle.length);
		let rid = riddle.find(x=> x.id === random)
		user.rid = rid.id;
		await user.save();
		return message.send(`${rid.riddle}`)
	} else if(message.$match[1]){
		let otvet = riddle.find(x=> x.id === user.rid)
		if(otvet.reply.indexOf(message.$match[1].toLowerCase()) !== -1){
			user.block.rid = getUnix() + 300000;
			setTimeout(() => {
				log[user.number].push(`Снят откат загадки. Время: ${time()}|${data()}`);
			}, 300000);
			user.rid = 0;
			let vin = rand(1,4);
			let gl = rand(1,5);
			let lvl = rand(1,10);
			let robs = rand(1000,8000);
			if(vin == 1){
				user.job.lvl += 1;
				await user.save();
				return message.send(`⚕ ➾ Это правильный ответ!\n${otvet.answer}\n+1 к стажу!`);
			} else if(vin == 2){
				user.gl += gl;
				await user.save();
				return message.send(`⚕ ➾ Это правильный ответ!\n${otvet.answer}\n+${spaces(gl)} к рейтингу!`);
			} else if(vin == 3){
				user.mine.lvl += lvl;
				await user.save();
				return message.send(`⚕ ➾ Это правильный ответ!\n${otvet.answer}\n+${spaces(lvl)} к опыту!`);
			} else if(vin == 4){
				user.robot += rob;
				await user.save();
				return message.send(`⚕ ➾ Это правильный ответ!\n${otvet.answer}\n+${spaces(robs)} к ${rob(robs)}!`);
			}
		} else {
			return message.send(`⚕ ➾ Это неверный ответ!`)
		}
	} else {
		let rid = riddle.find(x=> x.id === user.rid)
		return message.send(`${rid.riddle}`)
	}
});

///online///
vk.updates.hear(/^(?:online)\s?([^]+)?/i, async (message) => {
	if(message.user != owner) return;
	if(message.$match[1] == "off"){
		let res = await vk.api.call("groups.disableOnline", { group_id: group })
		return message.send(`${res.toString().replace(/0/gi, "Ошибка!").replace(/1/gi, "Сообщество теперь не онлайн!")}`)
	} else if(message.$match[1] == "on"){
		let res = await vk.api.call("groups.enableOnline", { group_id: group })
		return message.send(`${res.toString().replace(/0/gi, "Ошибка!").replace(/1/gi, "Сообщество теперь онлайн!")}`)
	} else {
		return message.send(`Пример команды: online off/on.`)
	}
});

///Беседы///
vk.updates.hear(/^(?:беседы)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let text = ``;
	let info = [];
	for(let i = 0; i < config.spon.length; i++){
		vk_user.api.call("messages.getChat",{ chat_id: config.spon[i].id }).then((response) => {
			info.push({ title: response.title, members: response.members_count, url: config.spon[i].url, num: i + 1, pet: config.spon[i].pet });
			text = "Беседы Bot Rikl:\n" + info.map(a => a.num + ". " + a.title + " [" + a.members + `/`+(a.pet == 14 ? `2000` : `500`)+`]\n` + "Ссылка: " + a.url).join("\n") + "\nХочешь чтобы в списке была и твоя беседа? Просто напиши создателю и выполни ряд инструкций!"
			if(i + 1 == config.spon.length){
				return message.send(text)
			}
		});
	};
});

///Монетка Лист///
vk.updates.hear(/^(?:монетка)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let mon = await GetListMonetka();
	return message.send(mon);
});

///Монетка отмена///
vk.updates.hear(/^(?:монетка отмена)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let mon = await DelMonetka();
	return message.send(mon);
});
///Монетка добавить///
vk.updates.hear(/^(?:монетка)\s(.*)?\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let mon = await AddMonetka(message.$match[1],message.$match[2]);
	return message.send(mon);
});

///Монетка играть///
vk.updates.hear(/^(?:монетка)\s([1-9]+)$/i, async (message) => {
	msg();
	let user = await userq;
	await user.save();
	let mon = await PlayMonetka(message.$match[1]);
	return message.send(mon);
});

///Скажи///
vk.updates.hear(/^(?:скажи)\s(.*)/i, async (message) => {
	msg();
	if(message.$match[1].length > 200) return message.send(`Слишком длинное сообщение!`);
	control(message.$match[1]).then(function(itog){
		return message.send(itog)}).catch(function(err){
			googleTTS(message.$match[1], `ru`, speed).then(function (url){
			message.sendAudioMessage(url)}).catch(function (err){
			console.error(err.stack);
		});
	});
});

///Logs///
vk.updates.hear(/^(?:logs)$/i, async (message) => {
	if(adm.indexOf(message.user) !== -1 || message.user != owner) return
	if(message.chat != chat_w) return
	await message.send(`Логи сообщений:`)
	await message.sendDocument(way)
	await message.send(`Игровые логи:`)
	return message.sendDocument("./base/log.json");
});

///Wiki///
vk.updates.hear(/^(?:wiki|вики)\s(.*)$/i, async (message) => {
	msg();
	let user = await userq;
	let info = ``;
	control(message.$match[1]).then(function(itog){
		return message.send(itog)}).catch(function(err){
	    rq("https://ru.wikipedia.org/w/api.php?action=opensearch&search="+encodeURIComponent(message.$match[1])+"&meta=siteinfo&rvprop=content&format=json").then((res) => {
	    	if(res[2][0].length < 10){
	    		info = res[2][1]
	    	} else {
	    		info = res[2][0]
	    	}
	    	return message.send(`Вот та информация, которую я смог найти по вашему запросу!\n${info}\nСсылка: ${res[3][0]}`)
    	});
	});
});

///Факт///
vk.updates.hear(/^(?:факт)$/i, async (message) => {
	msg();
	rq("http://webdiscover.ru/facts/rand.php").then((e) => {
		return message.send(`📝 Факт:\n${e}`);
	});
});

///Переведи///
vk.updates.hear(/^(?:переведи)\s?([1,2]+)?\s(.*)$/i, async (message) => {
	msg();
	let language = ``;
	if(!message.$match[1] || !message.$match[2]) return message.send(`Пример команды: Переведи [1/2] [текст]\n1 - Вводный текст: английский\n2 - Вводный текст: русский`)
	if(message.$match[1] == 1){
		language = `ru`
	} else if(message.$match[1] == 2){
		language = `en`
	} else {
		return message.send(`Пример команды: Переведи [1/2] [текст]\n1 - Вводный текст: английский\n2 - Вводный текст: русский`)
	}
	control(message.$match[2]).then(function(itog){
		return message.send(itog)}).catch(function(err){
		    rq(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${login.transl}&lang=${language}&text=${encodeURIComponent(message.$match[2])}`).then((res) => {
		    	return message.send(`Перевод: ${res.text}`);
		  	});
	});
});

///Дата регистрации///
vk.updates.hear(/^(?:рег|дата регистрации|дата рег)$/i, async (message) => {
	rq("https://apidog.ru/api/v2/%20apidog.getUserDateRegistration?userDomain=" + message.user).then(body => {
    	return message.send(`Дата вашей регистрации: ${body.response.date}`)
	});
});

///Раздача///
vk.updates.hear(config.dist.answer, async (message) => {
	msg();
	let user = await userq;
	if(message.isChat) return message.send(`Для получения приза напишите ответ в личные сообщения с ботом! ${smileerr}`)
	if(user.old == true) return message.send(`Вы уже получали награду за правильный ответ! ${smileerr}`);
	user.old = true;
	user.balance += config.dist.reward;
	log[user.number].push(`Поучавствовал в раздаче. Получил: ${spaces(config.dist.reward)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
	await message.send(`Зачислено +${spaces(config.dist.reward)}$ за правильный ответ! 🔥\nНа руках: ${spaces(user.balance)}$ 💰`);
	return user.save()
});

///!Очистка///
vk.updates.hear(/^(?:!очистка)/i, async (message) => {
	if(message.user != owner) return
	msg();
	let user = await userq;
	let users = await User.find({ ban: false });
	for(let i = 0; i < users.length; i += 1){
		eval(config.clean);
		users[i].save();
	}
	return message.send(`Готово!`)
});

///Infop///
vk.updates.hear(/^(?:infop)\s(.*)/i, async (message) => {
	msg();
	let user = await userq;
	if(user.level < 6) return message.send(`🔸 ➾ Вы не Администратор!`);
	if(promo.promos[message.$match[1]]){
		let prom = promo.promos[message.$match[1]];
		return message.send(`
Информация по промокоду "${message.$match[1]}":
Тип: ${prom.type.toString().replace(/(1)/ig, `Деньги\nСумма: ${spaces(prom.balance)}$`).replace(/(2)/ig, `Риклы\nСумма: ${spaces(prom.balance)} риклов`).replace(/(3)/ig, `Роботы\nСумма: ${spaces(prom.balance)} роботов`).replace(/(4)/ig, `Рейтинг\nСумма: ${spaces(prom.balance)} рейтинга`).replace(/(5)/ig, `Рандомный`)}
Активаций осталось: ${prom.activ} из ${prom.activ_t}
Время создания: ${prom.time} ${prom.date}
`+(prom.time_l == `` ? `` : `Последняя активация: ${prom.time_l}`)+	`
		`)
	} else {
		return message.send(`🔸 ➾ Такого промокода не существует или он закончился!`)
	}
});

///Кнопка///
vk.updates.hear(/^(?:кнопка|кнопки)\s([^]+)$/i, async (message) => {
	msg();
	let user = await userq;
	let mes = message.$match[1];
	if(!user.button) user.button = [];
	let zaprets1 = mes.toLowerCase();
	let filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	let filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true || zaprets.zapr.find(x=> x === zaprets1)){
		return message.send(`Найдено запрещенное слово!`)
	}
    if(message.isChat){
    	let _users = await vk.api.messages.getConversationMembers({peer_id: message.peerId});
		let _user = _users.items.find((item) => item.member_id === message.senderId);
		if(!_user.is_admin || message.user != owner){
			return message.send(`Вы не администратор беседы!`);
		}
    	let conver = convers.find(x=> x.cid === message.chat);
    	if(!conver){
	        convers.push({
	            id: convers.length + 1,
	            cid: message.chat,
	            button: []
	        });
        	conver = convers.find(x=> x.cid === message.chat);
			fs.writeFileSync("./base/convers.json", JSON.stringify(convers, null, "\t"));
    	}
	    if(mes.toLowerCase() == "удалить" || mes.toLowerCase() == "очистить"){
	        conver.button = [];
			fs.writeFileSync("./base/convers.json", JSON.stringify(convers, null, "\t"));
	        return message.send(`${userp}, вы очистили все кнопки!\n🔁 Для добавления новых используйте: Кнопка [Текст]\n➕ Что бы включить стандартыне кнопки используйте команду: "Стандартные кнопки"`, { keyboard: Keyboard.keyboard([]) });
		}
		if(conver.button.length >= 40) return message.send(`[id${message.user.id}|${message.user.tag}], ваше поле заполнено! (40/40)\n🔁 Для очистки поля используйте: Кнопка удалить\n➕ Что бы включить стандартыне кнопки используйте команду: "Стандартные кнопки"`);
		conver.button.push(mes);
		fs.writeFileSync("./base/convers.json", JSON.stringify(convers, null, "\t"));
	    return message.send(`${userp}, кнопка успешно добавлена!`, { keyboard: genkeyboard(conver.button, Keyboard) });
	} else {
	    if(mes.toLowerCase() == "удалить" || mes.toLowerCase() == "очистить"){
	        user.button = [];
	    	await user.save();
	        return message.send(`${userp}, вы удалили все кнопки!\n🔁 Для добавления новых используйте: Кнопка [Текст]\n➕ Что бы включить стандартыне кнопки используйте команду: "Стандартные кнопки"`, { keyboard: Keyboard.keyboard([]) });
	    }
		if(user.button == undefined) user.button = []
    	user.button.push(mes);
    	await user.save();
	    return message.send(`${userp}, кнопка успешно добавлена!\n🔁 Для удаления всех кнопок используйте: Кнопка удалить\n➕ Что бы включить стандартыне кнопки используйте команду: "Стандартные кнопки"`, { keyboard: genkeyboard(user.button, Keyboard) });
    }
});

///Стандартная кнопка///
vk.updates.hear(/^(?:стандарт кнопка|стандартная кнопка|стандарт|выключить кнопки|стандартные кнопки|стандартные)$/i, async (message) => {
	msg();
	let user = await userq;
	if(message.isChat){
    	let _users = await vk.api.messages.getConversationMembers({peer_id: message.peerId});
		let _user = _users.items.find((item) => item.member_id === message.senderId);
		if(!_user.is_admin || message.user != owner){
			return message.send(`Вы не администратор беседы!`);
		}
		return message.send(`${userp}, вы включили стандартные кнопки!\n🔁 Для добавления новых используйте: Кнопка [Текст]`,{ keyboard: JSON.stringify(main) });
	} else {
		return message.send(`${userp}, вы включили стандартные кнопки!\n🔁 Для добавления новых используйте: Кнопка [Текст]`,{ keyboard: JSON.stringify(main) });
	}
});

///Датьс///
vk.updates.hear(/(?:датьс)\s?([1-9]+)?/i, async (message) => {
	let userz = await User.findOne({ number: message.$match[1] });
	let pet = pets.find(x=> x.id === 17);
	if(message.user != owner && message.user != 353389708) return message.send(`Запрещено!`)
	if(!userz) return message.send(`Такого игрока не существует!`);
	userz.pet = 17;
	log[user.number].push(`Выдал игроку ${userz.number} ${pet.name}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил от игрока ${user.number} ${pet.name}. Время: ${time()}|${data()}`);
	await message.send(`Готово! Вы выдали игроку ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} питомца "${pet.name}"!`)
	return userz.save()
});

///Оплата///
vk.updates.hear(/(?:оплата)\s?([0-9]+)?\s([0-9]+)?/i, async (message) => {
	let user = await userq;
	let userz = await User.findOne({ number: message.$match[1] });
	let count = [1, 2, 1, 8000000000, 20000000000, 50000000000, 100000000000, 1];
	if(message.user != owner) return;
	let name = `${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`
	let ph = "photo-182329862_457239074";
	if(message.$match[2] == 1 || message.$match[2] == 2){
		let adm = adms.find(x=> x.lvl === Math.floor(message.$match[2]));
		userz.level = count[message.$match[2] - 1];
		userz.vip = true;
		vk.api.call("messages.send", {
			peer_id: userz.id,
			random_id: 0,
			message: `Спасибо за покупку ${adm.name} статуса!\nДля просмотра команд введите команду "Вип"!`,
			attachment: ph
		});
		await message.send(`Покупка игроку ${name} "${adm.name} статус" успешна выдана!`);
		return userz.save();
	} else if(message.$match[2] == 3){
		userz.inv.case.four += 1;
		vk.api.call("messages.send", {
			peer_id: userz.id,
			random_id: 0,
			message: `Спасибо за покупку Донатного кейса!`,
			attachment: ph
		});
		await message.send(`Покупка игроку ${name} "Донатный кейс" успешна выдана!`);
		return userz.save();
	} else if(message.$match[2] == 8){
		if(userz.old == false){
			userz.inv.case.four += 1;
			userz.old = true;
			vk.api.call("messages.send", {
				peer_id: userz.id,
				random_id: 0,
				message: `💥Спасибо за участие в акции! Вам выдан x1 Донатный кейс!`
			});
			await message.send(`Игроку ${name} "Донатный кейс" успешно выдан!`);
			return userz.save();
		} else {
			vk.api.call("messages.send", {
				peer_id: userz.id,
				random_id: 0,
				message: `${smileerr}Простите, но вы уже получили свой приз за участие в акции!`
			});
		}
	} else {
		userz.balance += count[message.$match[2] - 1];
		vk.api.call("messages.send", {
			peer_id: userz.id,
			random_id: 0,
			message: `Спасибо за преобретение ${spaces(count[message.$match[2] - 1])}$!`,
			attachment: ph
		});
		await message.send(`Покупка игроку ${name} "${spaces(count[message.$match[2] - 1])}$" успешна выдана!`);
		return userz.save();
	}
});

///Выдать///
vk.updates.hear(/(?:выдать)\s?([0-9]+)?\s([0-9]+)?\s(.*)?/i, async (message) => {
	let user = await userq;
	if(message.$match[3] == "pet" || message.$match[3] == "pets"){
		let pet = [];
		for(let i = 1; i < pets.length; i++){
			pet.push({ number: i, id: pets[i].id, name: pets[i].name });
		}
		return message.send(pet.map(a => a.number + ". " + a.name + " ID: " + a.id).join("\n"))
	}
	let userz = await User.findOne({ number: message.$match[1] });
	message.$match[3] = message.$match[3].replace(/(\.|\,)/ig, '');
	message.$match[3] = message.$match[3].replace(/(к|k)/ig, '000');
	let i = Number(message.$match[3]);
	let count = [`${spaces(i)}$`, `${spaces(i)} ${rob(i)}`, `${spaces(i)} ${gl(i)}`, `${spaces(i)} ${tabl(i)}`, ``+(message.$match[2] != 5 ? `` : `Питомец ${pets.find(x=> x.id === i).name}`)+``, ``+(message.$match[2] != 6 ? `` : `${cases.find(x=> x.id === i).name}📦`)+``];
	if(user.level < 7) return;
	if(!message.$match[1] && !message.$match[2] || !message.$match[3] || !message.$match[1] || !message.$match[2] || !userz || message.$match[2] > count.length) return message.send(`Помощь по команде "Выдать"\nПример команды: Выдать [ID игрока] [ID вида] [ID/сумма]\n1. Валюта (ID 1, сумма)\n2. Роботы (ID 2, сумма)\n3. Рейтинг (ID 3, сумма)\n4. Таблетки (ID 4, сумма)\n5. Питомцы (ID 5, ID питомца)\n6. Кейсы (ID 6, ID кейса)\nВыдать 1 1 pets - список питомцев`);
	let name = `${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")} ${userz.nick.toString().replace(/true/gi, `@id${userz.id}(${userz.prefix})`).replace(/false/gi, `${userz.prefix}`)} ${userz.vip.toString().replace(/true/gi, "🔥").replace(/false/gi, "")}`
	log[user.number].push(`Выдал игроку ${userz.number} ${count[message.$match[2] - 1]}. Время: ${time()}|${data()}`);
	log[userz.number].push(`Получил ${count[message.$match[2] - 1]} от игрока ${user.number}. Время: ${time()}|${data()}`);
	vk.api.call("messages.send", {
		peer_id: userz.id,
		random_id: 0,
		message: `Вы получили ${count[message.$match[2] - 1]}!`
	});
	if(message.$match[2] == 1){
		await userz.inc("balance", Math.floor(message.$match[3]));
	} else if(message.$match[2] == 2){
		await userz.inc("rob", Math.floor(message.$match[3]));
	} else if(message.$match[2] == 3){
		await userz.inc("gl", Math.floor(message.$match[3]));
	} else if(message.$match[2] == 4){
		await userz.inc("tabl", Math.floor(message.$match[3]));
	} else if(message.$match[2] == 5){
		await userz.set("pet", Math.floor(message.$match[3]));
	} else if(message.$match[2] == 6){
		if(message.$match[3] == 1) userz.inv.case.one += 1;
		else if(message.$match[3] == 2) userz.inv.case.two += 1;
		else if(message.$match[3] == 3) userz.inv.case.three += 1;
		else if(message.$match[3] == 4) userz.inv.case.four += 1;
		else if(message.$match[3] == 5 && cases.find(x=> x.id === 5)) userz.inv.case.five += 1;
		await userz.save();
	}
	return message.send(`Вы успешно выдали игроку ${name} ${count[message.$match[2] - 1]}!`);
});

///Кейс инфо///
vk.updates.hear(/(?:кейс инфо)\s?([1-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let i = Number(message.$match[1]);
	let cas = cases.find(x=> x.id === i);
	if(!message.$match[1]) return message.send(`📦 Укажите номер кейса!`);
	log[user.number].push(`Посмотрел информацию о ${i} кейсе. Время: ${time()}|${data()}`);
	if(i == 1) return message.send(`
📦 Содержимое ${cas.title}:
Опыт - 30%
Валюта - 30%
Рейтинг - 30%
${cases.find(x=> x.id === 2).name} - 10%
	`);
	if(i == 2) return message.send(`
📦 Содержимое ${cas.title}:
Опыт - 25%
Валюта - 25%
Рейтинг - 25%
VIP статус на неделю - 15%
${cases.find(x=> x.id === 3).name} - 10%
	`);
	if(i == 3) return message.send(`
📦 Содержимое ${cas.title}:
Опыт - 25%
Валюта - 25%
Рейтинг - 25%
VIP+ статус на неделю - 15%
${cases.find(x=> x.id === 4).name} - 10%
	`);
	if(i == 4) return message.send(`
📦 Содержимое ${cas.title}:
Сборочные - 25%
Валюта - 25%
VIP+ статус на 2 недели - 50%
	`);
	if(i == 5) return message.send(`
📦 Содержимое ${cas.title}:
Питомец ${pets.find(x=> x.id === 20).name} - 30%
Питомец ${pets.find(x=> x.id === 21).name} - 27%
Питомец ${pets.find(x=> x.id === 22).name} - 25%
Питомец ${pets.find(x=> x.id === 23).name} - 10%
Питомец ${pets.find(x=> x.id === 24).name} - 5%
Питомец ${pets.find(x=> x.id === 25).name} - 3%
	`);
});

///Кейсы///
vk.updates.hear(/^(?:кейсы)\s?([1-9]+)?/i, async (message) => {
	msg();
	let user = await userq;
	let i = Number(message.$match[1]);
	let cas = cases.find(x=> x.id === i);
	if(!i){
		return message.send(`
📦 Кейсы 📦
1⃣${cases.find(x=> x.id === 1).name} | ${spaces(cases.find(x=> x.id === 1).count)}$${cases.find(x=> x.id === 1).count > user.balance ? '🔹' : '🔸'}
2⃣${cases.find(x=> x.id === 2).name} | ${spaces(cases.find(x=> x.id === 2).count)}$${cases.find(x=> x.id === 2).count > user.balance ? '🔹' : '🔸'}
3⃣${cases.find(x=> x.id === 3).name} | ${spaces(cases.find(x=> x.id === 3).count)}$${cases.find(x=> x.id === 3).count > user.balance ? '🔹' : '🔸'}
4⃣${cases.find(x=> x.id === 4).name} | ${spaces(cases.find(x=> x.id === 4).count)}руб.
5⃣${cases.find(x=> x.id === 5).name} | ${spaces(cases.find(x=> x.id === 5).count)} Печенек${cases.find(x=> x.id === 5).count > user.ev ? '🌲' : '🎄'}
		
🛒 Для покупки используйте «кейсы [ID]»
		`);
	}
	if(i == 1 || i == 2 || i == 3){
		if(user.balance < cas.count) return message.send(`📦 ➾ У вас не достаточно ${spaces(cas.count - user.balance)}$!`,{ attachment: market_m,  keyboard: JSON.stringify(donat) });
		user.balance -= cas.count;
		if(i == 1){
			user.inv.case.one += 1;
			log[user.number].push(`Купил 1 кейс за ${spaces(cas.count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		} else if(i == 2){
			user.inv.case.two += 1;
			log[user.number].push(`Купил 2 кейс за ${spaces(cas.count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		} else if(i == 3){
			user.inv.case.three += 1;
			log[user.number].push(`Купил 3 кейс за ${spaces(cas.count)}$ Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
		}
		log[user.number].push(``);
		message.send(`📦 ➾ Вы купили ${cas.name} за ${spaces(cas.count)}$!`);
	}
	if(i == 4) return message.send(`${userp}, покупка в автоматическом режиме: ${config.site}`)
	if(i == 5){
		if(user.ev < cas.count) return message.send(`📦 ➾ У вас не достаточно ${spaces(cas.count - user.ev)} Печенек🍪`);
		user.ev -= cas.count;
		user.inv.case.five += 1;
		log[user.number].push(`Купил 5 кейс за ${spaces(cas.count)} Печенек🍪 Время: ${time()}|${data()} Печенек: ${spaces(user.ev)}`);
		message.send(`📦 ➾ Вы купили ${cas.name} за ${spaces(cas.count)} Печенек🍪!`);
	}
	return user.save();
});

///Кейс///
vk.updates.hear(/^(?:кейс)\s?([1-9]+)?/i, async (message) => {
	msg();
	let rez = rand(1,100);
	let user = await userq;
	let i = Number(message.$match[1]);
	if(i == 1){
		if(user.inv.case.one > 0){
			user.inv.case.one -= 1;
			if(rez > 0 && rez < 31){
				let count = rand(5,15);
				user.mine.lvl += count;
				await user.save();
				log[user.number].push(`Открыл 1 кейс. Выбил ${spaces(count)} опыта. Время: ${time()}|${data()} Опыта: ${spaces(user.mine.lvl)}`);
				return message.send(`${userp}, вы выиграли ${spaces(count)} опыта 🏆 ${smilesuc}`);
			}
			if(rez > 30 && rez < 61){
				let count = [500000000, 1500000000, 4000000000, 7500000000, 10000000000, 20000000000].random();
				await user.inc("balance", count);
				log[user.number].push(`Открыл 1 кейс. Выбил ${spaces(count)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
				return message.send(`${userp}, вы выиграли ${spaces(count)}$ ${smilesuc}`);
			}
			if(rez > 60 && rez < 91){
				let count = rand(4,30);
				await user.inc("gl", count);
				log[user.number].push(`Открыл 1 кейс. Выбил ${spaces(count)} рейтинга. Время: ${time()}|${data()} Баланс: ${spaces(user.gl)}`);
				return message.send(`${userp}, вы выиграли ${spaces(count)} рейтинга 👑 ${smilesuc}`);
			}
			if(rez > 90 && rez < 100){
				user.inv.case.two += 1;
				await user.save();
				log[user.number].push(`Открыл 1 кейс. Выбил 2 кейс. Время: ${time()}|${data()} 2 кейсов: ${spaces(user.inv.case.two)}`);
				return message.send(`${userp}, вы выиграли ${cases.find(x=> x.id === 2).name} ${smilesuc}`);
			}
		} else return message.send(`📦 У вас нету данного кейса!`);
	} else if(i == 2){
		if(user.inv.case.two > 0){
			user.inv.case.two -= 1;
			if(rez > 0 && rez < 26){
				let count = rand(25,60);
				user.mine.lvl += count;
				await user.save();
				log[user.number].push(`Открыл 2 кейс. Выбил ${spaces(count)} опыта. Время: ${time()}|${data()} Опыта: ${spaces(user.mine.lvl)}`);
				return message.send(`${userp}, вы выиграли ${spaces(count)} опыта 🏆 ${smilesuc}`);
			}
			if(rez > 25 && rez < 51){
				let count = [2500000000, 7500000000, 20000000000, 37500000000, 50000000000, 75000000000].random();
				await user.inc("balance", count);
				log[user.number].push(`Открыл 2 кейс. Выбил ${spaces(count)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
				return message.send(`${userp}, вы выиграли ${spaces(count)}$ ${smilesuc}`);
			}
			if(rez > 50 && rez < 76){
				let count = rand(20,120);
				await user.inc("gl", count);
				log[user.number].push(`Открыл 2 кейс. Выбил ${spaces(count)} рейтинга. Время: ${time()}|${data()} Баланс: ${spaces(user.gl)}`);
				return message.send(`${userp}, вы выиграли ${spaces(count)} рейтинга 👑 ${smilesuc}`);
			}
			if(rez > 75 && rez < 91){
				let count = 7;
				await user.inc("adm", count);
				await user.set("level", 1);
				log[user.number].push(`Открыл 2 кейс. Выбил VIP статус на неделю. Время: ${time()}|${data()} Время VIP: ${spaces(user.adm)} Суток`);
				return message.send(`${userp}, вы выиграли VIP статус на неделю ${smilesuc}`);
			}
			if(rez > 90 && rez < 101){
				user.inv.case.three += 1;
				await user.save();
				log[user.number].push(`Открыл 2 кейс. Выбил 3 кейс. Время: ${time()}|${data()} 3 кейсов: ${spaces(user.inv.case.three)}`);
				return message.send(`${userp}, вы выиграли ${cases.find(x=> x.id === 3).name} ${smilesuc}`);
			}
		} else return message.send(`📦 У вас нету данного кейса!`);
	} else if(i == 3){
		if(user.inv.case.three > 0){
			user.inv.case.three -= 1;
			if(rez > 0 && rez < 26){
				let count = rand(50,200);
				user.mine.lvl += count;
				await user.save();
				log[user.number].push(`Открыл 3 кейс. Выбил ${spaces(count)} опыта. Время: ${time()}|${data()} Опыта: ${spaces(user.mine.lvl)}`);
				return message.send(`${userp}, вы выиграли ${spaces(count)} опыта 🏆 ${smilesuc}`);
			}
			if(rez > 25 && rez < 51){
				let count = [10000000000, 30000000000, 80000000000, 150000000000, 200000000000, 250000000000].random();
				await user.inc("balance", count);
				log[user.number].push(`Открыл 3 кейс. Выбил ${spaces(count)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
				return message.send(`${userp}, вы выиграли ${spaces(count)}$ ${smilesuc}`);
			}
			if(rez > 50 && rez < 76){
				let count = rand(80,500);
				await user.inc("gl", count);
				log[user.number].push(`Открыл 3 кейс. Выбил ${spaces(count)} рейтинга. Время: ${time()}|${data()} Баланс: ${spaces(user.gl)}`);
				return message.send(`${userp}, вы выиграли ${spaces(count)} рейтинга 👑 ${smilesuc}`);
			}
			if(rez > 75 && rez < 91){
				let count = 7;
				await user.inc("adm", count);
				await user.set("level", 2);
				log[user.number].push(`Открыл 2 кейс. Выбил VIP+ статус на неделю. Время: ${time()}|${data()} Время VIP+: ${spaces(user.adm)} Суток`);
				return message.send(`${userp}, вы выиграли VIP+ статус на неделю ${smilesuc}`);
			}
			if(rez > 90 && rez < 101){
				user.inv.case.four += 1;
				await user.save();
				log[user.number].push(`Открыл 3 кейс. Выбил 4 кейс. Время: ${time()}|${data()} 4 кейсов: ${spaces(user.inv.case.four)}`);
				return message.send(`${userp}, вы выиграли ${cases.find(x=> x.id === 4).name} ${smilesuc}`);
			}
		} else return message.send(`📦 У вас нету данного кейса!`);
	} else if(i == 4){
		if(user.inv.case.four > 0){
			user.inv.case.four -= 1;
			if(rez > 0 && rez < 26){
				if(user.fabric.id == 1){
					user.fabric.sum += 100;
					log[user.number].push(`Открыл 4 кейс. Выбил ${spaces(100)} сборочных 1 уровня. Время: ${time()}|${data()} Сборочных: ${spaces(user.fabric.sum)}`);
					await message.send(`${userp}, вы выиграли ${spaces(100)} сборочных 1 уровня ${smilesuc}`);
				} else if(user.fabric.id == 2){
					user.fabric.sum += 80;
					log[user.number].push(`Открыл 4 кейс. Выбил ${spaces(80)} сборочных 2 уровня. Время: ${time()}|${data()} Сборочных: ${spaces(user.fabric.sum)}`);
					await message.send(`${userp}, вы выиграли ${spaces(80)} сборочных 2 уровня ${smilesuc}`);
				} else if(user.fabric.id == 3){
					user.fabric.sum += 40;
					log[user.number].push(`Открыл 4 кейс. Выбил ${spaces(40)} сборочных 3 уровня. Время: ${time()}|${data()} Сборочных: ${spaces(user.fabric.sum)}`);
					await message.send(`${userp}, вы выиграли ${spaces(40)} сборочных 3 уровня ${smilesuc}`);
				} else if(user.fabric.id == 4 || user.fabric.id == 0){
					user.fabric.id = 4;
					user.fabric.sum += 20;
					log[user.number].push(`Открыл 4 кейс. Выбил ${spaces(20)} сборочных 4 уровня. Время: ${time()}|${data()} Сборочных: ${spaces(user.fabric.sum)}`);
					await message.send(`${userp}, вы выиграли ${spaces(20)} сборочных 4 уровня ${smilesuc}`);
				}
				return user.save();
			}
			if(rez > 25 && rez < 51){
				let count = [30000000000, 50000000000, 100000000000].random();
				await user.inc("balance", count);
				log[user.number].push(`Открыл 4 кейс. Выбил ${spaces(count)}$. Время: ${time()}|${data()} Баланс: ${spaces(user.balance)}$`);
				return message.send(`${userp}, вы выиграли ${spaces(count)}$ ${smilesuc}`);
			}
			if(rez > 50 && rez < 101){
				let count = 14;
				await user.inc("adm", count);
				await user.set("level", 2);
				log[user.number].push(`Открыл 2 кейс. Выбил VIP+ статус на 2 недели. Время: ${time()}|${data()} Время VIP+: ${spaces(user.adm)} Суток`);
				return message.send(`${userp}, вы выиграли VIP+ статус на 2 недели ${smilesuc}`);
			}
		} else return message.send(`📦 У вас нету данного кейса!`);
	} else if(i == 5){
		if(user.inv.case.five > 0){
			user.inv.case.five -= 1;
			if(rez > 0 && rez < 31){
				await user.set("pet", 20);
				log[user.number].push(`Открыл 5 кейс. Выбил питомцы ${pets.find(x=> x.id === 20).name}. Время: ${time()}|${data()}`);
				return message.send(`${userp}, вы выиграли питомца ${pets.find(x=> x.id === 20).name}`);
			}
			if(rez > 30 && rez < 58){
				await user.set("pet", 21);
				log[user.number].push(`Открыл 5 кейс. Выбил питомцы ${pets.find(x=> x.id === 21).name}. Время: ${time()}|${data()}`);
				return message.send(`${userp}, вы выиграли питомца ${pets.find(x=> x.id === 21).name}`);
			}
			if(rez > 57 && rez < 83){
				await user.set("pet", 22);
				log[user.number].push(`Открыл 5 кейс. Выбил питомцы ${pets.find(x=> x.id === 22).name}. Время: ${time()}|${data()}`);
				return message.send(`${userp}, вы выиграли питомца ${pets.find(x=> x.id === 22).name}`);
			}
			if(rez > 82 && rez < 93){
				await user.set("pet", 23);
				log[user.number].push(`Открыл 5 кейс. Выбил питомцы ${pets.find(x=> x.id === 23).name}. Время: ${time()}|${data()}`);
				return message.send(`${userp}, вы выиграли питомца ${pets.find(x=> x.id === 23).name}`);
			}
			if(rez > 92 && rez < 98){
				await user.set("pet", 24);
				log[user.number].push(`Открыл 5 кейс. Выбил питомцы ${pets.find(x=> x.id === 24).name}. Время: ${time()}|${data()}`);
				return message.send(`${userp}, вы выиграли питомца ${pets.find(x=> x.id === 24).name}`);
			}
			if(rez > 97 && rez < 101){
				await user.set("pet", 25);
				log[user.number].push(`Открыл 5 кейс. Выбил питомцы ${pets.find(x=> x.id === 25).name}. Время: ${time()}|${data()}`);
				return message.send(`${userp}, вы выиграли питомца ${pets.find(x=> x.id === 25).name}`);
			}
		} else return message.send(`📦 У вас нету данного кейса!`);
	}
});

User.prototype.inc = inc; //+

User.prototype.dec = dec; //-

User.prototype.set = set; //=

run().catch(console.error);