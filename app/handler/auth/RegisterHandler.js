const { exist } = require("joi");
const validateRegisterRequest = require("../../request/registerRequest");
const Constant = require("../../../constant");

module.exports = async (request, response) => {
  try {
    const errors = await validateRegisterRequest(request.body);

    return response.status(200).send(errors);
  } catch (errors) {
    let res = errors.details.map((error) => error.message);
    return response.status(Constant.Status.UnprocessableEntity).send(res);
  }

  // if (!errors.isEmpty())
  // 	return response.status(422).json({
  // 		success: false,
  // 		errors: errors.array()
  // 	});
  // else
  // result.newValue = {
  // 	"text" : "value"
  // }
  // return response.send(

  // 	"wait"
  // 	// JSON.stringify(Validate.result.details)
  // 		// JSON.stringify({
  // 		// 	"path": request.url,
  // 		// 	"method": request.method,
  // 		// 	"headers": request.rawHeaders,
  // 		// 	"body": request.body
  // 		// })
  // 		)
  // 		.end();
};
