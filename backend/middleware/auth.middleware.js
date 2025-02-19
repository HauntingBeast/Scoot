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

    const user = await userModel.findById(decoded._id);
    req.user = user;

    return next();
  } catch (error) {
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
    return res.status(401).json({ message: "Unauthorised" });
  }
};
