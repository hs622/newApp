const Joi = require('joi')
	.extend(require('@joi/date'));

// Rules.
const Rules = Joi.object({
	email: Joi.string().required().messages({
		// 'string.base': `"a" should be a type of 'text'`, ----- Example
		'string.empty': `"name": name is required for sign up.`
	}),
	password: Joi.string().min(3).max(10).required(),
});

// Request body
// Validation Operation
module.exports = async (request) => {
	return result = await Rules.validateAsync(request, {
		abortEarly: false,
	});
}