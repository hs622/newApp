const express = require("express");
const Cors = require("../core/services/Cors");
const Prefix = require("../core/services/Prefix");

const Auth = require("../routes/auth");
const User = require("../routes/user");
const Blog = require("../routes/blog");
const Exception = require("../routes/exception");

module.exports = (app) => {
  app.use(express.json());
  app.use(Cors);

  app.get("/", (request, response) => {
    response.redirect("/api/users");
  });

  Prefix("/api", app,

    // Register your routes.
    Auth, 
    User, 
    Blog, 
    Exception,

  );
};
