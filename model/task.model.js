const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  task_name: { type: String, required: true },
  description: { type: String, required: true },
  progress: { type: Number, default:0 },
  status:{type:Boolean,default:false}
});

module.exports = mongoose.model("task", TaskSchema);

