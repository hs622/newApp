const JWT = require("jsonwebtoken");
const Constant = require("../../../constant");
const JWT_config = require("../../../config/jwt");
const Mail = require("../../../core/helpers/mail");
const User = require('../../../schema/userSchema');
const validateRegisterRequest = require("../../validations/registerValidation");

module.exports = async (request, response) => {
  try {
    const body = await validateRegisterRequest(request.body);

    try {
      const userObject = await User.create({
        "name": body.name,
        "email": body.email,
        "password": body.password,
        "gender": body.gender.toLowerCase(),
        "dob": body.dob
      })

      const token = JWT.sign({
        data: userObject
      }, JWT_config.JWT_SECRET , { expiresIn: 60 * 60 })

      const user = {
        token,
      };
      user.userObject;

      return response.status(Constant.Status.OK)
        .send({
          "success": true,
          "user": user,
          "message": "Registration complete, We send you a link to verify your account."
        });

    } catch(error) {
      if(error.code == 11000) {
        return response.status(Constant.Status.UnprocessableEntity)
          .send({
            "success": false,
            "error": {
              "email": "Email address is taken!"
            }
          });
      } else {
        return response.status(Constant.Status.InternalServerError)
          .send({
            "success": false,
            "error": error,
            "message": "Error occur while saving data."
          });
      }
    }

  } catch (errors) {
    console.log({ada: errors});
    // let res = errors.details.map((e) => e.message);
    return response.status(Constant.Status.InternalServerError).send({
      "success": false,
      "error": errors.message,
      "message": "Error occur while saving data."
    });
  }
};
