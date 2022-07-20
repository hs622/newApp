const express = require('express');
const router = express.Router();

const UserHandler = require('../app/handler/UserHandler');
const RedirectIfAuthenticated = require('../app/middleware/RedirectIfAuthenticated');

router.get("/blogs", RedirectIfAuthenticated.auth, UserHandler.getUsers);
router.get("/blog/:id", UserHandler.getUser);
router.post("/blog", UserHandler.setUser);

module.exports = router;