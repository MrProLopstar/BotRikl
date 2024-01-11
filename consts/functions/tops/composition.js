module.exports = async function composition(){
	let users = await User.find({ ban: false });
	let owner = ``;
	let spec_adm = ``;
	let gl_adm = ``; 
	let adm = ``;
	let moder = ``;
	let helper = ``;
	let text = ``;
    if(config.owner != 0){
		let owners = await User.findOne({ id: config.owner });
    	owner = `Создатель:\n@id${owners.id}(${owners.prefix})\n`;
    };
	for(let i in users){
		let userm = users[i];
		if(userm.level == 8){ 
			if(spec_adm == ``){
				spec_adm = 'Спец.Администраторы:\n';
			}
		}
		if(userm.level == 7){ 
			if(gl_adm == ``){
				gl_adm = 'Гл.Администраторы:\n';
			}
		}
		if(userm.level == 6){ 
			if(adm == ``){
				adm = 'Администраторы:\n';
			}
		}
		if(userm.level == 5){ 
			if(moder == ``){
				moder = 'Модераторы:\n';
			}
		}
		if(userm.level == 4){ 
			if(helper == ``){
				helper = 'Хэлперы:\n';
			}
		}
	    if(userm.level == 8) spec_adm += `@id${userm.id}(${userm.prefix})\n`;
		if(userm.level == 7) gl_adm += `@id${userm.id}(${userm.prefix})\n`;
		if(userm.level == 6) adm += `@id${userm.id}(${userm.prefix})\n`;
		if(userm.level == 5) moder += `@id${userm.id}(${userm.prefix})\n`;
		if(userm.level == 4) helper += `@id${userm.id}(${userm.prefix})\n`;
	}
	if(owner.length != 24) text += owner;
	if(spec_adm.length != 24) text += spec_adm;
	if(gl_adm.length != 24) text += gl_adm;
	if(adm.length != 24) text += adm;
	if(moder.length != 24) text += moder;
	if(helper.length != 24) text += helper;
	return text
}