const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  console.log(fullname, email, password);

  const exists = await userModel.findOne({ email });
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const { firstname, lastname } = fullname;
  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }
  const valid = await user.comparePassword(password);
  // console.log(valid);
  if (!valid) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token, {
    httpOnly: true,
    secure: (process.env.NODE_ENV = "production"),
    maxAge: 360000,
  });
  return res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  console.log("inside");
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blacklistTokenModel.create({ token });
  return res.status(200).json({ message: "Logged Out" });
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  const exist = await blacklistTokenModel.findOne({ token });
  if (!exist) await blacklistTokenModel.create({ token });
  return res.status(200).json({ message: "Logged Out" });
};
