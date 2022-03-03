const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  project_name: { type: String, required: true },
  location: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: false },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("project", ProjectSchema);
