const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MentorSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    tasks: {
      type: Array
    }
  },
  {
    timestamps: true
  }
);

module.exports = Mentor = mongoose.model("Mentor", MentorSchema);
