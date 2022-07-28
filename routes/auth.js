const express = require('express');
const router = express.Router();

const login = require('../app/handler/auth/LoginHandler');
const register = require('../app/handler/auth/RegisterHandler');
const Authenticate = require('../app/middleware/Authenticate');

// Authenticate.guest,
// auth routes
router.post("/login", login);
router.post("/register", register);
// router.get("/password-reset-link", RegisterHandler.register);

module.exports = router;