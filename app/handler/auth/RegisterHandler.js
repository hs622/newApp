const Constant = require("../../../constant");
const validateRegisterRequest = require("../../validations/registerValidation");
const User = require('../../../schema/userSchema');

module.exports = async (request, response) => {
  try {
    const body = await validateRegisterRequest(request.body);

    return response.send(body);
    // User.create({
    //   "name": body.name,
    //   "email": body.email,
    //   "password": body.password,
    //   "gender": body.gender.toLowerCase(),
    //   "dob": body.dob
    // }).then((userObject) => {
    //   return response.status(Constant.Status.OK)
    //     .send({
    //       "success": true,
    //       "user": userObject,
    //       "message": "User register successfully."
    //     });
    // })
    // .catch((errorObject, ) => {
    //   return response.status(Constant.Status.InternalServerError)
    //     .send({
    //       "success": false,
    //       "error": errorObject,
    //       "message": "Error occur while registing user."
    //     });
    // });

  } catch (errors) {
    // let res = errors.details.map((e) => e.message);
    return response.status(Constant.Status.UnprocessableEntity).send(errors);
  }
};
