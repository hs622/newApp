const MailInit = require("../../../core/helpers/mail");
const JWT = require("jsonwebtoken");
const Constant = require("../../../constant");
const User = require('../../../schema/userSchema');
const validateRegisterRequest = require("../../validations/registerValidation");

// const Mail = MailInit();

module.exports = async (request, response) => {
  try {
    console.log(MailInit.getHost());
    // const body = await validateRegisterRequest(request.body);

    
    // try {
    //   const userObject = await User.create({
    //     "name": body.name,
    //     "email": body.email,
    //     "password": body.password,
    //     "gender": body.gender.toLowerCase(),
    //     "dob": body.dob
    //   })

    //   JWT.sign({
    //     data: userObject
    //   }, Constant.JWT.JWT_SECRET, { expiresIn: 60 * 60 })

    //   return response.status(Constant.Status.OK)
    //     .send({
    //       "success": true,
    //       "user": userObject,
    //       "message": "Registration complete, We send you a link to verify your account."
    //     });

    // } catch(error) {

    //   if(error.code == 11000) {
    //     return response.status(Constant.Status.UnprocessableEntity)
    //       .send({
    //         "success": false,
    //         "error": {
    //           "email": "Email address is taken!"
    //         }
    //       });
    //   } else {
    //     return response.status(Constant.Status.InternalServerError)
    //       .send({
    //         "success": false,
    //         "error": error,
    //         "message": "Error occur while saving data."
    //       });
    //   }
    // }

  } catch (errors) {
    // let res = errors.details.map((e) => e.message);
    return response.status(Constant.Status.UnprocessableEntity).send(errors);
  }
};
