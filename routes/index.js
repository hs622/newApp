const express = require("express");

const Auth = require("../routes/auth");
const User = require("../routes/user");
const Blog = require("../routes/blog");
const Exception = require("../routes/exception");
const cors = require("../app/middleware/Cors");

module.exports = (app) => {
  const routesWithPrefix = (prefix, ...routes) => {
    routes.forEach((route) => app.use(prefix, route));
  };

  app.use(express.json());
  app.use(cors);

  app.get("/", (request, response) => {
    response.redirect("/api/users");
  });

  // Register your routes.

  routesWithPrefix("/api", Auth, User, Blog, Exception);
};
