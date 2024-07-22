const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    title: {
      type: String,
      require: [true, "Please Fill Title!"],
    },
    description: {
      type: String,
      require: [true, "Please Fill Description"],
    },
    // thumbnail: {
    //   type: String,
    //   require: true,
    // },
    githubURL: {
      type: String,
      require: true,
    },
    liveLinkURL: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
