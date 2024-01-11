module.exports = function(field, value){
	this[field] += Math.floor(value);
	return this.save();
}