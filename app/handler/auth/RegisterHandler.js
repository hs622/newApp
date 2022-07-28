const validateRequest = require('../../request/registerRequest');

module.exports = (request, response) => {

	const errors = validateRequest(request.body);
	// if (!errors.isEmpty())
	// 	return response.status(422).json({ 
	// 		success: false, 
	// 		errors: errors.array() 
	// 	});
	// else
	errors.newValue = {
		"text" : "value"
	}
		return response.send(

				errors
				// JSON.stringify({
				// 	"path": request.url, 
				// 	"method": request.method, 
				// 	"headers": request.rawHeaders,
				// 	"body": request.body
				// })
				)
				.end();
}