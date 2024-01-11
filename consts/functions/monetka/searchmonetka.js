module.exports = function SearchMonetka(){
	let user = userq;
	let mon = ``;
	for(i in monetka.games){
		if(monetka.games[i].uid == user.number){ 
			return true;
		} else {
			return false;
		}
	}
};