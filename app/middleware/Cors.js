const express = require("express");
const router = express.Router();

module.exports = (req, res, next) => {
  console.log(req);
  next();
};
