const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      unique: false,
      required: false,
    },
    country: {
      type: String,
      unique: false,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
