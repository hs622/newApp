const { exist } = require('joi');
const validateRegisterRequest = require('../../request/registerRequest');
const Constant = require('../../../constant');

module.exports = async (request, response) => {

	await validateRegisterRequest(request.body)
		.then((body) => {
			console.log("validation: ", body)
		})
		.catch((errors) => {
			let res = errors.details.map(error => error.message);
			return response.status(Constant.Status.UnprocessableEntity)
				.send(res)
				.end();
		})
		
		
	// if (!errors.isEmpty())
	// 	return response.status(422).json({ 
	// 		success: false, 
	// 		errors: errors.array() 
	// 	});
	// else
	// result.newValue = {
	// 	"text" : "value"
	// }
		return response.send(

			"wait"
			// JSON.stringify(Validate.result.details)
				// JSON.stringify({
				// 	"path": request.url, 
				// 	"method": request.method, 
				// 	"headers": request.rawHeaders,
				// 	"body": request.body
				// })
				)
				.end();
}