const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please Fill Name!"],
    },
    email: {
      type: String,
      require: [true, "Please Fill Email!"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please Fill Password"],
    },
    profilePic: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
      default: false,
    },
    rank: {
      type: String,
      enum: ["A", "B", "C"],
      default: "C",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
