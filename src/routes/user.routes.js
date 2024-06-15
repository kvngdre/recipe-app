const { signup, login } = require("../controllers/user.controller");
const express = require("express");
const { validateLogin, validateSignUp } = require("../validators/auth");
const router = express.Router();

router.post("/signup", validateSignUp, signup);
router.post("/login", validateLogin, login);

module.exports = router;
