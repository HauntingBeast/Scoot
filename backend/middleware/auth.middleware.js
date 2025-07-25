const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  //   console.log(req.headers);
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  console.log(token);
  // console.log("aa");

  if (!token) {
    // console.log("a");
    return res.status(401).json({ message: "Unauthorised" });
  }

  const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
  console.log(isBlacklisted);
  if (isBlacklisted) {
    // console.log("b");
    return res.status(401).json({ message: "Unautharised" });
  }
  try {
    // console.log("in");
    console.log(token);
    console.log(process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("in2");
    console.log(decoded);
    if (!decoded) {
      console.log("c");
      return res.status(401).json({ message: "Unauthorised" });
    }

    const user = await userModel.findById(decoded._id);
    console.log(user);
    req.user = user;
    console.log("pass");
    return next();
  } catch (error) {
    console.log("high error");
    console.error("JWT Verify Error:", error);
    return res.status(401).json({ message: "Unauthorised" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  //   console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorised" });
  }

  const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unautharised" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorised" });
    }

    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;

    return next();
  } catch (error) {
    console.error("JWT Verify Error:", error);

    return res.status(401).json({ message: "Unauthorised" });
  }
};
