module.exports = function(field, value){
	this[field] -= value;
	return this.save();
}