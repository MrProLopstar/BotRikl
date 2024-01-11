module.exports = function genkeyboard(array, Keyboard){
	let kb = [];
	if(array.length > 40) return false;
	for (let i = 0; i < 10; i += 1) {
		if(!array.slice(i * 4, i * 4 + 4)[0]) break;
		kb.push(array.slice(i * 4, i * 4 + 4));
	}
	kb.map((arr) => {
		arr.map((button, i) => {
			arr[i] = Keyboard.textButton({ label: button, color: Keyboard.PRIMARY_COLOR });
		});
	});
	return Keyboard.keyboard(kb);
}