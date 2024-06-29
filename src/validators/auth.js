const { check, validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorObj = {};

    errors.array().forEach((e) => {
      errorObj[e.path] = (errorObj[e.path] || []).concat([e.msg]);
    });

    return res.status(400).json({
      status: "error",
      message: "Validation Error",
      data: errorObj
    });
  }

  next();
};

const validateSignUp = [
  check("fullName").notEmpty().withMessage("Fullname is required"),
  check("email").notEmpty().withMessage("Email is required"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6, max: 20 })
    .withMessage("Password length must be atleast 6 characters long"),
  validate
];

const validateLogin = [
  check("email").notEmpty().withMessage("Email is required"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6, max: 20 })
    .withMessage("Password length must be atleast 6 characters long"),
  validate
];

module.exports = {
  validateLogin,
  validateSignUp
};
