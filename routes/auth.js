const express = require('express');
const router = express.Router();

const LoginHandler = require('../app/handler/auth/LoginHandler');
const RegisterHandler = require('../app/handler/auth/RegisterHandler');
const Authenticate = require('../app/middleware/Authenticate');

// Authenticate.guest,
// auth routes
router.post("/login", LoginHandler.login);
router.post("/register", RegisterHandler.register);
// router.get("/password-reset-link", RegisterHandler.register);

module.exports = router;