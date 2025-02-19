const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
router
  .route("/register")
  .post(
    [
      body("email")
        .notEmpty()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("Invalid Email"),
      body("fullname.firstname")
        .notEmpty()
        .withMessage("firstname is required")
        .bail()
        .isLength({ min: 3 })
        .withMessage("First name must be at least 3 characters long"),
      body("password")
        .notEmpty()
        .withMessage("password is required")
        .bail()
        .isLength({ min: 6 })
        .withMessage("Password must be atleast 6 characters long"),
    ],
    userController.registerUser
  );
router
  .route("/login")
  .post(
    [
      body("email")
        .notEmpty()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("Invalid Email"),
      body("password").notEmpty().withMessage("password is required"),
    ],
    userController.loginUser
  );

router
  .route("/profile")
  .get(authMiddleware.authUser, userController.getUserProfile);

router.route("/logout").get(userController.logoutUser);

module.exports = router;
