const express = require("express");
const dotenv = require("dotenv").config();
const connectToDB = require("./db/db");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/user.route");
const captainRoutes = require("./routes/captain.route");

const cookieParser = require("cookie-parser");

connectToDB();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

module.exports = { app };
