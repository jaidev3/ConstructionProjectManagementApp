const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  photo_url: { type: String, required: true },
  description:{type:String,required:false}
});

module.exports = mongoose.model("photo", PhotoSchema);
