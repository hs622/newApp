const express = require('express');
const router = express.Router();

const UserHandler = require('../app/handler/UserHandler');
const RedirectIfAuthenticated = require('../app/middleware/RedirectIfAuthenticated');

router.get("/users", RedirectIfAuthenticated.auth, UserHandler.getUsers);
router.get("/user/:id", UserHandler.getUser);
router.post("/user", UserHandler.setUser);

module.exports = router;