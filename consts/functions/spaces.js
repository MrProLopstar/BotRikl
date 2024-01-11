const spaces = function spaces(string) {
	if(typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9,a-z,+,-]{1,3}/g).join(".").split("").reverse().join("");
}

module.exports = spaces;