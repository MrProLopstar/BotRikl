module.exports = function repl(count, user){
	count = count.replace(/(\.|\,|\$)/ig, '');
	count = count.replace(/(к|k)/ig, '000');
	count = count.replace(/(вабанк|вобанк|все|вб|всё)/ig, user.balance);
	return count
}