module.exports = async function events(){
	let itog = rand(1,20);
	if(itog == 5){
		event = 1; //увелечение в играх
		proc = rand(10,15);
		etime = getUnix() + 43200000;
	} else if(itog == 10){
		event = 2; //удвоенное копание
		etime = getUnix() + 43200000;
	} else if(itog == 15){
		event = 3; //увеличенная зарплата зарплата
		proc = rand(2,4)
		etime = getUnix() + 43200000;
	} else {
		event = 0;
		proc = 0;
		etime = 0;
	}
};