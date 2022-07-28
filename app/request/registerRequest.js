const Joi = require('joi');

const GenderEnum = [
	'Male', 
	'Female'
];

// Rules.
const Rules = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(3).max(10).required(),
	gender: Joi.string().valid(...Object.values(GenderEnum)),
});

// Request body
// Validation Operation
module.exports = async (request) => {
	return result = await Rules.validateAsync(request, {
		abortEarly: false,
	});
}