const schema = new mongo.Schema({
	level: Number,
	balance: Number,
	bank: Number,
	rob: Number,
	don: Number,
	gl: Number,
	ev: Number,
	tm: Number,
	pay_l: Number,
	limit: Boolean,
	heal: Number,
	tabl: Number,
	ref: Number,
	snow: Number,
	adm: Number,
	refm: Number,
	block: {
		nick: Number,
		bonus: Number,
		pari: Number,
		tir: Number,
		family: Number,
		gun: Number,
		glove: Number,
		job: Number,
		kit: Number,
		rid: Number,
		prof: Boolean
	},
	number: Number,
	id: Number,
	nick: Boolean,
	vip: Boolean,
	msg: {
		lvl: Number,
		command: Number,
		last_msg: String
	},
	biz: {
		id: Number,
		peop: Number,
		zarp: Number
	},
	car: Number,
	air: Number,
	hel: Number,
	home: Number,
	home: Number,
	phone: Number,
	boat: Number, 
	pet: Number,
	vig: Number,
	ban: Boolean,
	ban_i: String,
	ban_t: Number,
	warn: Number,
	warn_p: Array,
	family: Number,
	gun: Number,
	prefix: String,
	rtime: String,
	rid: Number,
	old: Boolean,
	button: Array,
	job: {
		lvl: Number,
		id: Number
	},
	inv: {
		pet: Array,
		case: {
			one: Number,
			two: Number,
			three: Number,
			four: Number,
			five: Number
		}
	},
	fabric: {
	    id: Number,
		max: Number,
		sum: Number,
	    zarp: Number
	},
	mine: {
	    vibr: Number,
	    adam: Number,
	    krypt: Number,
	    eng: Number,
		lvl: Number
	},
	glove: {
		glove: Number,
		souls: Number,
		str: Number,
		time: Number,
		real: Number,
		mind: Number,
		space: Number,
		activ: Boolean
	},
	marriage: {
		part: Number,
		req: Array
	},
	quest: {
		lvl: Number,
		per: Number
	}
});

module.exports = schema;