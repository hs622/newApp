
module.exports.auth = (req, res, next) => {
  console.log('User id AUTHORIZER todo.');
  next();
}