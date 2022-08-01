const User = require('../../schema/userSchema');
const Joi = require('joi').extend(require('@joi/date'));

const GenderEnum = [
	'male', 
	'female',
	'other'
];

// Rules.
const Rules = Joi.object({
	name: Joi.string().required().messages({
		// 'string.base': `"a" should be a type of 'text'`, ----- Example
		'string.empty': `"name": name is required for sign up.`
	}),
	email: Joi.string().email().required(),
	password: Joi.string().min(3).max(10).required(),
	gender: Joi.string().valid(...Object.values(GenderEnum)).required(),
	dob: Joi.date().format('YYYY-MM-DD').utc().required(),
});

// Request body
// Validation Operation
module.exports = async (request) => {
	return result = await Rules.validateAsync(request, {
		abortEarly: false,
	});
}