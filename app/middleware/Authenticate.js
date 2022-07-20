module.exports.guest = (req, res, next) => {
  console.log('Only guest user allowed.');
  next();
}