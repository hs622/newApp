const express = require('express');

const Auth = require('../routes/auth')
const User = require('../routes/user')
const Blog = require('../routes/blog')
const Exception = require('../routes/exception')

module.exports = (app) => {
	app.use(express.json());
  
  app.get("/", (request, response) => {
    response.send("Welcome to Express.").end();
  });

  // Register your routes.
  app.use(Auth);
  app.use(User);
  app.use(Blog);
  app.use(Exception);
  
};