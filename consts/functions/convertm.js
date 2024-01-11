const convertm = function convertm(stavka,type){
	if(type == 1){
		switch(stavka){
			case 'орел':
			case 'орёл':
			return 'Орёл';
			break;
			case 'решка':
			return 'Решка';
			break;
			default:
			return false;
			break;
		}
	} else if(type == 2){
		switch(stavka){
			case 'орел':
			case 'орёл':
			return 'Орла';
			break;
			case 'решка':
			return 'Решку';
			break;
			default:
			return false;
			break;
		}
	}
}

module.exports = convertm;