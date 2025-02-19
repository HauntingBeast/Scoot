const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

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
      body("vehicle.color")
        .notEmpty()
        .withMessage("Vehicle Color is required")
        .bail()
        .isLength({ min: 3 })
        .withMessage("Color should be atleast 3 character long "),
      body("vehicle.plate")
        .notEmpty()
        .withMessage("Vehicle Plate is required")
        .bail()
        .isLength({ min: 3 })
        .withMessage("Plate should be atleast 3 character long "),
      body("vehicle.capacity")
        .notEmpty()
        .withMessage("Vehicle Capacity is required")
        .bail()
        .isInt({ min: 1 })
        .withMessage("Plate should be atleast 1"),
      body("vehicle.vehicleType")
        .notEmpty()
        .withMessage("Vehicle Type is required")
        .bail()
        .isIn(["car", "auto", "motorcycle"])
        .withMessage("Invalid vehicle type "),
    ],
    captainController.registerCaptain
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
    captainController.loginCaptain
  );

router
  .route("/profile")
  .get(authMiddleware.authCaptain, captainController.getCaptainProfile);

router.route("/logout").get(captainController.logoutCaptain);
module.exports = router;
