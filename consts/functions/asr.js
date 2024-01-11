const request = require("request-promise");

const uri = `https://api.wit.ai/speech`
const apikey = 'F7JPMGZDOIQMRS4G4AT5CUMRNJSA5FWC'

module.exports = async (body) => {
	const response = await request.post({
		uri,
		headers: {
		'Accept': 'audio/x-mpeg-3',
		'Authorization': `Bearer ` + apikey,
		'Content-Type': 'audio/mpeg3',
		'Transfer-Encoding': 'chunked'
		},
		body
	})
	return JSON.parse(response)._text
}