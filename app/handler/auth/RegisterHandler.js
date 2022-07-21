

module.exports.register = (request, response) => {
  response.send(
		JSON.stringify({
			"path": request.url, 
			"method": request.method, 
			"headers": request.rawHeaders,
			"body": request.body
		}))
		.end();
}