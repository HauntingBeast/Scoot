const mongoose = require("mongoose");

// Define the schema for blacklisted tokens
const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true, // Token is mandatory
      unique: true, // Ensure no duplicate entries
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the current date
      expires: 86400, // Set TTL to 24 hours (in seconds)
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps
);

// Create the model
const blacklistTokenModel = mongoose.model(
  "BlacklistToken",
  blacklistTokenSchema
);

module.exports = blacklistTokenModel;
