const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      require: true,
      minLength: [3, "First Name Must Be At Least 3 Char "],
    },
    lastname: {
      type: String,
      minLength: [3, "Last Name Must Be At Least 3 Char "],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email",
    ],
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "color must be atleast 3 character long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, "plate must be atleast 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "capacity must be atleast 1"],
    },
    vehicleType: {
      type: String,
      enum: ["car", "auto", "motorcycle"],
      required: true,
    },
  },
  location: {
    lat: {
      type: Number,
      //   required: true,
    },
    long: {
      type: Number,
      //   required: true,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("Captain", captainSchema);

module.exports = captainModel;
