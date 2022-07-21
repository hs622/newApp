const express = require('express');

const Auth = require('../routes/auth')
const User = require('../routes/user')
const Blog = require('../routes/blog')
const Exception = require('../routes/exception')
const cors = require('../app/middleware/Cors')

module.exports = (app) => {
	app.use(express.json());
  app.use('*', cors);
  
  app.get("/", (request, response) => {
    response.redirect('/users');
  });

  // Register your routes.
  app.use(Auth);
  app.use(User);
  app.use(Blog);
  app.use(Exception);
  
};