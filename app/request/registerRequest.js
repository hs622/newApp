const { rules, validationResult } = require('express-validator');

module.exports = (data) => {

  rules('name').isString()
  // request('email').isEmail().normalizeEmail(),
  // request('password').isLength({ min: 8, max: 32 })

}