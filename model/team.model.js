const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  person_name: { type: String, required: true },
  role: { type: String, required: true },
  rate: { type: Number, required: true },
  attendance:{type:Boolean,default:false}
});

module.exports = mongoose.model("team", TeamSchema);
