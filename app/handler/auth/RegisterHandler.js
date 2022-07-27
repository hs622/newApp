const { body, validationResult } = require('express-validator');

const validateRequest = (request) => {

	console.log({ 
		request
			// "path": request.url, 
			// "method": request.method, 
			// "headers": request.rawHeaders,
			// "body": request.body
		});
}

module.exports.register = (request, response) => {

	validateRequest(request.body);
  response.send("working"
		// JSON.stringify({
		// 	"path": request.url, 
		// 	"method": request.method, 
		// 	"headers": request.rawHeaders,
		// 	"body": request.body
		// })
		)
		.end();
}