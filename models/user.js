const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title"],
      unique: true,
    },
    logo: {
      type: String,
      required: [true, "Please enter logo"],
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
